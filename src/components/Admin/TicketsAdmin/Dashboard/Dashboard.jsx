import React from 'react';
import { Header, Segment,Icon, Label, Grid, Statistic, Dropdown } from 'semantic-ui-react'

export function Dashboard() {
    const options = [
        { key: 'open', icon: 'envelope open outline', text: 'Abiertos', value: 'open' },
        { key: 'progress', icon: 'edit outline', text: 'En Progreso', value: 'progress' },
        { key: 'close', icon: 'lock', text: 'Cerrado', value: 'close' },
        { key: 'review', icon: 'info', text: 'Revision', value: 'review' },
        { key: 're-open', icon: 'retweet', text: 'Re-abierto', value: 're-open' },
        { key: 'finished', icon: 'check circle outline', text: 'Finalizado', value: 'finished' },
      ]
  return <>
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
        </>;
}
