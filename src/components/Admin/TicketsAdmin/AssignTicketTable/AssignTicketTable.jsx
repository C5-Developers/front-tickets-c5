import React from 'react';
import { Divider, Segment, Icon, Table, Button, Menu, Pagination } from 'semantic-ui-react'
import './AssignTicketTable.scss'
import { map } from 'lodash'

export  function AssingTicketTable(props) {

  const { tickets, asignarTicket } = props;  

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

    <Table className='table-product-admin' striped>
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
                <Actions ticket={ ticket } asignarTicket={asignarTicket}/>
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
    
  </>;
}

function Actions(props){
    const {  ticket, asignarTicket } = props;
  
    return( 
      <Table.Cell textAlign='center'>
        <Button icon onClick={()=> asignarTicket(ticket)}>
            <Icon name='users' />
        </Button>
        <Button icon negative onClick={()=> console.log('cancelar ticket: '+ticket.id)}>
            <Icon name='cancel' />
        </Button>
      </Table.Cell>
    )
  }
  