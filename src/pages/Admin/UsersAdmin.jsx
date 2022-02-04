import React, {useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { TableUsers, AddEditUserForm } from '../../components/Admin/';
import { HeaderPage } from '../../components/Base/HeaderPage/';
import { ModalBasic } from '../../components/Base/ModalBasic/';

import { useUser } from '../../hooks';
import { toast } from 'react-toastify'

export function UsersAdmin() {
    
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [reFetch, setReFetch] = useState(false);
    
    const { loading, users, getUsers, deleteUser} = useUser();

    useEffect(() => getUsers(), [reFetch]);

    const openCloseModal = () => setShowModal((prev) => !prev)
    const onRefetch = () => setReFetch((prev) => !prev)
    
    const addUser = () => {
        setTitleModal('Nuevo Usuario');
        setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch ={onRefetch}/>);
        openCloseModal();
    }

    const updateUser = (data) => {
        setTitleModal('Editar Usuario');
        setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch ={onRefetch} user={data}/>);
        openCloseModal();
    }

    const onDeleteUser = async (data) => {
        const result = window.confirm (`Eliminar usuario ${data.username}?`)

        if(result){
            
            try {
                
                await deleteUser(data.id)
                onRefetch();
                toast.success(`Usuario Eliminado !`);

            } catch (error) {

                toast.error(error.message);
                
            }
        }
    }

    return (
        <>
            <HeaderPage 
            title={'Administrador Usuarios'}
            btnTitle={ 'Crear Usuario' }
            btnClick={addUser}
            />
            { loading ? (
                <Loader active inline='centered'>
                    Cargando...
                </Loader> 
            ) : (
                <TableUsers users={ users } updateUser={updateUser} onDeleteUser={onDeleteUser} />
            ) }
            <ModalBasic 
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children ={contentModal}
            />
        </>
    )
}
