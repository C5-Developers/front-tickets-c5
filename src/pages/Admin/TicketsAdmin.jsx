import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { AssignTicketForm, AssingTicketTable, Dashboard } from '../../components/Admin'
import { useTicket, useUser } from '../../hooks';
import { ModalBasic } from '../../components/Base';
import { map } from 'lodash'

export function TicketsAdmin() {

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, tickets,  getTicketsAdmin} = useTicket();
  
  const { usersStaff, getUsersStaff} = useUser();
  const [formatUsStaff, setFormatUsStaff] = useState([]);

  useEffect(() => getUsersStaff(),[]);
  useEffect(() => {
    setFormatUsStaff(formatDropDownData(usersStaff))
  }, [usersStaff]);
  
  
  useEffect(()=>getTicketsAdmin(),[refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev)
  const onRefetch = () => setRefetch((prev)=> !prev);

  const asignarTicket = (data) => {
    setTitleModal('Asignar | Tickets');
    setContentModal( <AssignTicketForm 
                        ticket={data} 
                        formatUsStaff = { formatUsStaff } 
                        onClose={openCloseModal} 
                        onRefetch={onRefetch}
                        /> );
    openCloseModal();
  }

  return <>
      <Dashboard />
     
      { loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ) : (
          <AssingTicketTable
          tickets={ tickets }
          asignarTicket={asignarTicket} 
          />
        )}
        <ModalBasic 
        show={showModal}
        size={'small'}
        onClose={openCloseModal}
        title={titleModal}
        children ={contentModal}
        />
  </>;
}

function formatDropDownData(data){
  return map(data,(item)=>({
    key: item?.id,
    text: item?.first_name+" "+item?.last_name,
    value:item?.id
  }));
}