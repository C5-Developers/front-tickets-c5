import React, { useEffect, useState } from 'react';
import { Loader, Modal } from 'semantic-ui-react'

import {HeaderPage} from '../../components/Base/'
import { TableTicket, AddEditTicket } from '../../components/Client/';
import { ModalBasic } from '../../components/Base/'
import { useTicket } from '../../hooks/';



export function TicketsClient() {

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);


  const { loading, tickets, getTickets } = useTicket();

  useEffect(()=>getTickets(),[refetch]);


  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev)=> !prev);

  const addTicket= () => {
    setTitleModal('Nuevo Ticket');
    setContentModal(<AddEditTicket onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal();
  }

  // console.log(tickets);
  return <>
        <HeaderPage title="Tickets - Client" btnTitle='Nuevo Ticket' btnClick={ addTicket } />
        { loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ): (<TableTicket tickets={ tickets } />
        )}
        <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={contentModal} />
  </>;
}
