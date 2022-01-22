import React from 'react';
import {Icon, Menu} from 'semantic-ui-react'
import logoTopNav from '../../../assets/logo_top_nav.png'
import { useAuth } from '../../../hooks';
import "./TopMenu.scss";

export function TopMenu() {
    const { auth, logout } = useAuth(); 
   
    const renderName = () =>{
        if(auth.me?.first_name && auth.me?.last_name){
            return `${auth.me.first_name} ${auth.me.last_name}`
        }

        return auth.me?.email;
    }

    console.log(auth);
    return (
        <Menu fixed='top' className='top-menu-admin'>
            <Menu.Item className='top-menu-admin__logo'>
                <img src={ logoTopNav } alt='Logo Comisaria Zapopan' className='top-menu-admin__img-logo'/>
            </Menu.Item>

            <Menu.Menu position='right' >
                <Menu.Item>
                    <b> { renderName()} </b>
                </Menu.Item>
                <Menu.Item onClick={logout}>
                    <Icon name='sign-out'></Icon>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
