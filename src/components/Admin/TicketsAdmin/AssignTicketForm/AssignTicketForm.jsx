import React, { useState } from 'react';
import { Form, Button, Dropdown, Divider } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useTicket } from '../../../../hooks';

export function AssignTicketForm(props) {

  const { onClose, onRefetch, formatUsStaff, ticket } = props;
  const { assignTicket } = useTicket();

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
    validationSchema: Yup.object(assignSchema()),
    validateOnChange:false,
    onSubmit: async (formValue)=>{

      try {
        if(ticket){

          console.log('Asignar Ticket');
          console.log(ticket.id);
          await assignTicket( ticket.id, formValue );
          console.log('formValue Ticket');
          console.log(formValue);
          toast.success(`Ticket asignado!`,toastConfig);

        }
        
        onRefetch();
        onClose();
        
      } catch (error) {

        toast.error(error.message,toastConfig);

      }
    }
  })


  return <div>
    <Form className='admin-assign-ticket' onSubmit={formik.handleSubmit}>
        <Dropdown
          placeholder='Asignar Ticket'
          name='assigned_to'
          fluid
          selection
          options={formatUsStaff}
          value={formik.values.assigned_to}
          error={formik.errors.assigned_to}
          onChange={(_,data)=>{ formik.setFieldValue('assigned_to',data.value)}}
        />
        <Divider />
        <Button type='submit' primary fluid content='Asignar' />
    </Form>
      
  </div>;
}

function initialValues(ticket){
  return {
    assigned_to:ticket?.assigned_to || '',
  }
}

function assignSchema(){
  return{
    // assigned_to:Yup,
  }
}



