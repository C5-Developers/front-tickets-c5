import React from 'react'

import { TopMenu, SideMenu } from '../../components/Base';
import { LoginAdmin } from '../../pages/Login';
import { useAuth } from '../../hooks';

import './ClientLayout.scss';

export function ClientLayout(props) {

    const { children } = props;
    const { auth } = useAuth();

    if(!auth) return <LoginAdmin />
    
    return (
      
        <div className='client-layout'>
              <h1>ClientLayout</h1>
            <div className='client-layout__menu'>
               <TopMenu />
            </div>

            <div className='client-layout__main-content'>
            
                <SideMenu>

                { children }
                
                </SideMenu>

            </div>
            
        </div>
    )
}
