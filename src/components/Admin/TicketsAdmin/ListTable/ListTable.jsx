import React from 'react';
import { Divider, Segment, Icon, Table, Button } from 'semantic-ui-react'
import './ListTable.scss'
import { map } from 'lodash'

export  function ListTable(props) {

  const { tickets } = props;  

  return <>
    <Divider />
    <Segment basic textAlign='center' padded='very'>
        <Button
            color='violet' 
            content='Crear Ticket'
            icon='add'
            labelPosition='right'
            size='large'
            />
    </Segment>

    <Table className='table-product-admin'>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>Area</Table.HeaderCell>
            <Table.HeaderCell>Asignado</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(tickets,(ticket, index)=>(
            <Table.Row key={index} textAlign='center'>
                <Table.Cell>{ticket.id}</Table.Cell>
                <Table.Cell>{ticket.title}</Table.Cell>
                <Table.Cell>{ticket.owner}</Table.Cell>
                <Table.Cell>{ticket.assigned_to}</Table.Cell>
                <Table.Cell>{ticket.status}</Table.Cell>
                <Actions ticket={ ticket }/>
            </Table.Row>
          ))}
        </Table.Body>
    </Table>
  </>;
}

function Actions(props){
    // const { ticket } = props;
  
    return( 
      <Table.Cell textAlign='center'>
        <Button icon onClick={()=> console.log('asignar ticket')}>
            <Icon name='share' />
        </Button>
        <Button icon negative onClick={()=> console.log('cancelar ticket')}>
            <Icon name='cancel' />
        </Button>
      </Table.Cell>
    )
  }
  