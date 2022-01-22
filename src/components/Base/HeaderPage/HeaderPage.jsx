import React from 'react';

import { Header, Segment, Button, Grid } from 'semantic-ui-react'
import './HeaderPage.scss'

export  function HeaderPage(props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

  return <Segment clearing  color='blue'  padded='very'>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={8}>
                        <Header as='h1' floated='left' color='blue'>
                            { title }
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={4}>

                    </Grid.Column>
                    <Grid.Column width={4}>
                      <div>
                        { btnTitle && (
                              <Button positive onClick={ btnClick } >
                                { btnTitle }
                              </Button>
                            ) }

                            { btnTitleTwo && (
                              <Button negative onClick={ btnClickTwo } >
                                { btnTitleTwo }
                              </Button>
                            ) }
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Segment>

  // return <div className='header-page-client'>
  //   <h2>{ title }</h2>

  //   <div>
  //     { btnTitle && (
  //       <Button positive onClick={ btnClick } >
  //         { btnTitle }
  //       </Button>
  //     ) }

  //     { btnTitleTwo && (
  //       <Button negative onClick={ btnClickTwo } >
  //         { btnTitleTwo }
  //       </Button>
  //     ) }
  //   </div>
  // </div>;
}
