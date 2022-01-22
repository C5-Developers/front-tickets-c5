import React from 'react';
import { Form,TextArea, Image, Button, Divider } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AddEditTicket.scss';

import {useTicket} from '../../../../hooks';

export function AddEditTicket(props) {

  const { onClose, onRefetch } = props; 

  const { addTicket } = useTicket();

  const formik = useFormik({
    initialValues : initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange:false,
    onSubmit: async (formValue)=>{

      try {
        
        await addTicket(formValue);
        onRefetch();
        onClose();
        
      } catch (error) {
        console.log({error:error});
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
        <Button type='submit' primary fluid content='Crear' />
      </Form>
  </div>;
}

function initialValues(){
  return {
    title:'',
    description:''
  }
}

function newSchema(){
  return{
    title:Yup.string().required('Titulo es campo obligatorio'),
    description:Yup.string().required('Descripcion es campo obligatorio'),
  }
}