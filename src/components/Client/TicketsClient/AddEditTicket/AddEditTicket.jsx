import React, { useCallback, useState } from 'react';
import { Form,TextArea, Button, Divider, Image } from 'semantic-ui-react'
import {useDropzone} from 'react-dropzone'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

import './AddEditTicket.scss';

import {useTicket} from '../../../../hooks';

export function AddEditTicket(props) {

  const { onClose, onRefetch, ticket } = props; 
  const [previewImage, setPreviewImage] = useState(ticket ? ticket?.file : null);
  const { addTicket, updateTicket } = useTicket();

  const toastConfig = {
                      className: 'black-background',
                      position: "top-center",
                      autoClose: 2500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined
                      
                    };
    
  
  const formik = useFormik({
    initialValues : initialValues(ticket),
    validationSchema: Yup.object(ticket ? updateSchema() : newSchema() ),
    validateOnChange:false,
    onSubmit: async (formValue)=>{

      try {
        if(ticket){

          await updateTicket( ticket.id, formValue );
          toast.success(`Ticket actualizado !`,toastConfig);


        }else{
        
          await addTicket(formValue);
          toast.success(`Ticket creado !`,toastConfig);


        }
        
        onRefetch();
        onClose();
        
      } catch (error) {

        toast.error(error.message,toastConfig);

      }
    }
  })

  const onDrop = useCallback(async (acceptedFile)=>{
    const file = acceptedFile[0];
    await formik.setFieldValue('file', file);
    setPreviewImage(URL.createObjectURL(file))
  },[])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeybard: true,
    multiple:false,
    onDrop

  })

  return <div>
      <Form className='client-edit-ticket' onSubmit={formik.handleSubmit}>
        <Form.Input 
          name='title' 
          placeholder='Titulo' 
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
          />
        <TextArea 
          name='description' 
          placeholder='Descripcion' 
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
          />
          <Button type='button'fluid { ...getRootProps() }  color={formik.errors.file && 'red'}>
           {previewImage ? 'Cambiar Imagen' : 'Subir Imagen'}
          </Button>
          <input { ...getInputProps() }/>
          <Image name='file' src={previewImage}/>
        <Divider />
        <Button type='submit' primary fluid content={ticket ? 'Editar': 'Crear'} />
      </Form>
  </div>;
}

function initialValues(ticket){
  return {
    title:ticket?.title || '',
    description:ticket?.description || '',
    file: ticket?.file || ''
  }
}

function newSchema(){
  return{
    title:Yup.string().required('Titulo es campo obligatorio'),
    description:Yup.string().required('Descripcion es campo obligatorio'),
    file: Yup.string()
  }
}

function updateSchema(){
  return{
    title:Yup.string().required('Titulo es campo obligatorio'),
    description:Yup.string().required('Descripcion es campo obligatorio'),
    file: Yup.string()
  }
}