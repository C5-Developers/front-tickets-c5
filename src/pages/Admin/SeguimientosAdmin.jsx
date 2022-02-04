import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { ModalListadoSeguimientos, TableSeguimientos } from '../../components/Admin';
import { HeaderPage, ModalBasic } from '../../components/Base';
import { useTicket } from '../../hooks';



export function SeguimientosAdmin() {
  
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const [refetch, setRefetch] = useState(false);
  const { loading, tickets,  getSeguimientoTickets} = useTicket();

  useEffect(()=>getSeguimientoTickets(),[refetch]);

  
  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev)=> !prev);

  const abrirModalSeguimientos = (data) => {
    setTitleModal('Seguimientos | Tickets');
    setContentModal(<ModalListadoSeguimientos tickets={tickets} />);
    openCloseModal();
  }



  return (
    <div>
        <HeaderPage title='Seguimientos'/>
        { loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ) : (
          <TableSeguimientos tickets={ tickets } abrirModalSeguimientos={abrirModalSeguimientos}/>
        )}<ModalBasic 
        show={showModal}
        size={'large'}
        onClose={openCloseModal}
        title={titleModal}
        children ={contentModal}
        />
    </div>
  );
}
