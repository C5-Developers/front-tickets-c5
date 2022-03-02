import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react'

import {HeaderPage} from '../../components/Base/'
import { TableTicket, AddEditTicketForm } from '../../components/Client/TicketsClient/';
import { ModalBasic } from '../../components/Base/'
import { useTicket } from '../../hooks/';

import { toast } from 'react-toastify'
import DataTableTicket from '../../components/Client/TicketsClient/DataTableTicket/DataTableTicket';


export function TicketsClient() {

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);


  const { loading, tickets, getTickets, deleteTicket } = useTicket();

  useEffect(()=>getTickets(),[refetch]);



  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev)=> !prev);

  const addTicket= () => {
    setTitleModal('Nuevo Ticket');
    setContentModal(<AddEditTicketForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal();
  }

  const updateTicket = (data) => {
    setTitleModal('Editar Ticket')
    setContentModal(<AddEditTicketForm ticket={ data } onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal();
  }

  const onDeleteTicket = async (data) => {
    const result = window.confirm(`Eliminar ticket ${data.id}`);
    if(result){
      try {
        
        await deleteTicket(data.id);
        onRefetch()

        toast.success('Ticket Eliminado con Exito!');
        
      } catch (error) {

        toast.error(error.message);

      }
    }
  }

  // console.log(tickets);
  return <>
        <HeaderPage title="Tickets - Client" btnTitle='Nuevo Ticket' btnClick={ addTicket } />
        { loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ) : (
        <TableTicket 
          tickets={ tickets } 
          updateTicket={ updateTicket } 
          onDeleteTicket={ onDeleteTicket }
          />
        // <DataTableTicket />
        )}
        <ModalBasic 
          show={showModal} 
          onClose={openCloseModal} 
          title={titleModal} 
          children={contentModal} 
        />
  </>;
}
