import React, { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import { ListTable, Dashboard } from '../../components/Admin'
import { useTicket } from '../../hooks';

export function TicketsAdmin() {

  const [refetch, setRefetch] = useState(false);
  const { loading, tickets,  getTicketsAdmin} = useTicket();

  useEffect(()=>getTicketsAdmin(),[refetch]);
  const onRefetch = () => setRefetch((prev)=> !prev);

  return <>
      <Dashboard />
     
      { loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ) : (
          <ListTable
          tickets={ tickets } 
          />
        )}
  </>;
}
