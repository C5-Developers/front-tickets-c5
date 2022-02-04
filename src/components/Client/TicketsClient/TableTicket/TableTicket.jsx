import React from 'react';
import './TableTicket.scss'
import {Table, Button, Icon, Menu} from 'semantic-ui-react'
import { map } from 'lodash'

export function TableTicket(props) {
  const { tickets, updateTicket, onDeleteTicket } = props;
  // console.log(tickets);
  return (
  <>
      
      <Table className='table-product-admin' >
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
                <Actions ticket={ ticket } updateTicket={ updateTicket } onDeleteTicket={ onDeleteTicket }/>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='6'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  
  </>
    
  );
}

function Actions(props){
  const { ticket,updateTicket, onDeleteTicket } = props;

  return( 
    <Table.Cell textAlign='center'>
      <Button icon onClick={()=> updateTicket(ticket)}>
          <Icon name='edit outline' />
      </Button>
      <Button icon negative onClick={()=> onDeleteTicket(ticket)}>
          <Icon name='close' />
      </Button>
    </Table.Cell>
  )
}
