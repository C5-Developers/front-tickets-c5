import React from 'react';
import { Divider, Segment, Icon, Table, Button } from 'semantic-ui-react'
import './ListTable.scss'

export  function ListTable() {
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

    <Table color='blue'>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Ticket</Table.HeaderCell>
            <Table.HeaderCell>Estatus</Table.HeaderCell>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row positive>
            <Table.Cell>0001</Table.Cell>
            <Table.Cell>En Proceso  <Icon name='edit outline' /></Table.Cell>
            <Table.Cell>21/02/2022</Table.Cell>
        </Table.Row>
        <Table.Row negative>
            <Table.Cell >0002</Table.Cell>
            <Table.Cell>Finalizado  <Icon name='check circle outline' /></Table.Cell>
            <Table.Cell>24/12/2021</Table.Cell>
        </Table.Row>
        <Table.Row negative>
            <Table.Cell >0003</Table.Cell>
            <Table.Cell>Finalizado  <Icon name='check circle outline' /></Table.Cell>
            <Table.Cell>25/12/2021</Table.Cell>
        </Table.Row>
        <Table.Row negative>
            <Table.Cell >0004</Table.Cell>
            <Table.Cell>Finalizado  <Icon name='check circle outline' /></Table.Cell>
            <Table.Cell>28/12/2021</Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table>
  </>;
}
