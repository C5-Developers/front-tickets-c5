import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import routes from './routes'
import { map } from 'lodash'



export  function Navigation() {

    return (
        <BrowserRouter>
            <Routes> 
                <Route>
                    { map(routes, (route, index) => (
                        <Route 
                          key = { index }
                          path = { route.path }
                          element = {
                              <route.layout>
                                  <route.component />
                              </route.layout>
                          }
                        />

                    ) ) }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
