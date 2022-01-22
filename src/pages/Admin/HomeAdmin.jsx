import React from 'react'
import { useAuth } from '../../hooks';
import { Header, Segment, Divider, Container,Icon, Label, Menu, Table, Button, Grid, Statistic,Dropdown  } from 'semantic-ui-react'

export function HomeAdmin() {
    const { logout } = useAuth();
    const options = [
        { key: 'open', icon: 'envelope open outline', text: 'Abiertos', value: 'open' },
        { key: 'progress', icon: 'edit outline', text: 'En Progreso', value: 'progress' },
        { key: 'close', icon: 'lock', text: 'Cerrado', value: 'close' },
        { key: 'review', icon: 'info', text: 'Revision', value: 'review' },
        { key: 're-open', icon: 'retweet', text: 'Re-abierto', value: 're-open' },
        { key: 'finished', icon: 'check circle outline', text: 'Finalizado', value: 'finished' },
      ]
    return (
        <div>
                <Segment clearing  color='blue'  padded='very'>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column width={4}>
                                <Header as='h1' floated='left' color='blue'>
                                    Dashboard
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
        
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Dropdown text='Lista de Tickets' 
                                    padded='very'
                                    className='button icon'
                                    floating
                                    options={options}
                                    fluid
                                    
                                    />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Grid columns={3}>
                    <Grid.Row>

                        <Grid.Column>
                            <Segment>
                                <Label ribbon color='teal'>Abiertos</Label>
                                <Grid divided='vertically'>
                                    <Grid.Row >
                                        <Grid.Column width={4}>
                                        
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                        <Statistic >
                                                <Statistic.Value>3,322</Statistic.Value>
                                        </Statistic>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                                <Icon name='envelope open outline' size='huge' color='teal'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                <Label ribbon color='green'>En progreso</Label>
                                <Grid divided='vertically'>
                                    <Grid.Row >
                                        <Grid.Column width={4}>
                                        
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                        <Statistic >
                                                <Statistic.Value>3,322</Statistic.Value>
                                        </Statistic>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                                <Icon name='edit outline' size='huge' color='green'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                    <Label ribbon color='red'>Cerrados</Label>
                                    <Grid divided='vertically'>
                                        <Grid.Row >
                                            <Grid.Column width={4}>
                                            
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                            <Statistic >
                                                    <Statistic.Value>3,322</Statistic.Value>
                                            </Statistic>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                    <Icon name='lock' size='huge' color='red'/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                            </Segment>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>

                        <Grid.Column>
                            <Segment>
                                <Label ribbon color='blue'>Revision</Label>
                                <Grid divided='vertically'>
                                    <Grid.Row >
                                        <Grid.Column width={4}>
                                        
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                        <Statistic >
                                                <Statistic.Value>3,322</Statistic.Value>
                                        </Statistic>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                                <Icon name='info' size='huge' color='blue'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                <Label ribbon color='orange'>Re-abierto</Label>
                                <Grid divided='vertically'>
                                    <Grid.Row >
                                        <Grid.Column width={4}>
                                        
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                        <Statistic >
                                                <Statistic.Value>3,322</Statistic.Value>
                                        </Statistic>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                                <Icon name='retweet' size='huge' color='orange'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                <Label ribbon color='purple'>Finalizado</Label>
                                <Grid divided='vertically'>
                                    <Grid.Row >
                                        <Grid.Column width={4}>
                                        
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                        <Statistic >
                                                <Statistic.Value>3,322</Statistic.Value>
                                        </Statistic>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                                <Icon name='check circle outline' size='huge' color='purple'/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>

                    <Segment basic textAlign='center' padded='very'>
                            <Button
                                basic 
                                color='violet' 
                                content='Crear Ticket'
                                icon='add'
                                labelPosition='right'
                                size='large'
                                />
                    </Segment>

                <Divider />

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

               

        </div>
    )
}
