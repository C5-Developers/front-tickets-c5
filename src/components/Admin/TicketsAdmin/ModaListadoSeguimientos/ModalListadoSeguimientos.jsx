import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { map } from 'lodash'

export function ModalListadoSeguimientos(props) {
  
  const { tickets } = props;

  return(
        <Table singleLine>
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
        )
      
}

function Actions(props){
    const {tickets} = props
  
    return (
      <Table.Cell textAlign='center'>
        <Button icon onClick={()=> console.log('onclick first button')}>
          <Icon name='edit outline' />
        </Button>
        <Button negative icon onClick={()=> console.log('onclick second button')}>
          <Icon name='close' />
        </Button>
      </Table.Cell>
    )
  }
    