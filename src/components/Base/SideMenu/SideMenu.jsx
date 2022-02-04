import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'
import { useAuth } from '../../../hooks'

import './SideMenu.scss'

export function SideMenu(props) {
    const { children } = props
    const { pathname } = useLocation();
    return (
        <div className='side-menu-admin'>
            <MenuLeft pathname={pathname} />
            <div className='content'>{ children }</div>
        </div>
    )
}

function MenuLeft(props){
    const { pathname } = props;
    const { auth } = useAuth();

    return (
        <Menu fixed='left' borderless className='side' vertical className='menu-lateral'>

            <Menu.Item as={Link} to={"/"} active={pathname === "/"}>
                <Icon name='home' /> Home
            </Menu.Item>
            

            <Menu.Item as={Link} to={"/tickets"} active={pathname === "/tickets"}>
                <Icon name='ticket alternate' /> Tickets - Client
            </Menu.Item>

            {/* Si es parte del staff(administrador) Se muestra el path Usuarios */}

            { auth.me?.is_staff && (
                <Menu.Item as={Link} to={"/admin/tickets"} active={pathname === "/admin/tickets"}>
                    <Icon name='ticket alternate' /> Tickets - Admin
                </Menu.Item>
             )}

            { auth.me?.is_staff && (
                <Menu.Item as={Link} to={"/admin/seguimientos"} active={pathname === "/admin/seguimientos"}>
                    <Icon name='tasks' /> Tickets - Seguimientos
                </Menu.Item>
             )}

            { auth.me?.is_staff && (
                <Menu.Item as={Link} to={"/admin/users"} active={pathname === "/admin/users"}>
                    <Icon name='users' /> Usuarios
                </Menu.Item>
            )}

            

            {/* <Menu.Item as={Link} to={"/admin/tickets-history"} active={pathname === "/admin/tickets-history"}>
                <Icon name='history' /> Historial
            </Menu.Item>

            <Menu.Item as={Link} to={"/admin/catalogs"} active={pathname === "/admin/catalogs"}>
                <Icon name='list' /> Catalogos
            </Menu.Item> */}


        </Menu>

        
    )
}
