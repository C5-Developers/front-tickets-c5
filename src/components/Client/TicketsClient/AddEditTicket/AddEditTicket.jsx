import React from 'react';
import { Form,TextArea, Image, Button, Divider } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'

import './AddEditTicket.scss';

import {useTicket} from '../../../../hooks';

export function AddEditTicket(props) {

  const { onClose, onRefetch, ticket } = props; 

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

  return <div>
      <h1>AddEditTicket</h1>
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
        <Divider />
        <Button type='submit' primary fluid content={ticket ? 'Editar': 'Crear'} />
      </Form>
  </div>;
}

function initialValues(ticket){
  return {
    title:ticket?.title || '',
    description:ticket?.description || '',
  }
}

function newSchema(){
  return{
    title:Yup.string().required('Titulo es campo obligatorio'),
    description:Yup.string().required('Descripcion es campo obligatorio'),
  }
}

function updateSchema(){
  return{
    title:Yup.string().required('Titulo es campo obligatorio'),
    description:Yup.string().required('Descripcion es campo obligatorio'),
  }
}