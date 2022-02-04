import { BASE_API } from '../utils/constants';



export async function getTicketsAdminApi(token){

    try {
        
        let url = `${BASE_API}/api/tickets/`;

        const params = {
            method: 'GET',
            headers:{
                    Authorization:`Bearer ${token}`,
                }
        };
        
        const response = await fetch(url,params);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}


export async function getTicketsApi(_id_user,token){

    try {
        
        let url = `${BASE_API}/api/tickets/?created_by=${_id_user}`;

        const params = {
            method: 'GET',
            headers:{
                    Authorization:`Bearer ${token}`,
                }
        };
        
        const response = await fetch(url,params);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}



export async function addTicketApi(data, token, id_user){
    try{
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('file',data.file);
        formData.append('created_by',id_user);
        const url = `${BASE_API}/api/tickets/`;
        const params = {
            method: 'POST',
            headers:{
                    Authorization:`Bearer ${token}`,
                },
            body: formData,
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    }catch(error){
        throw error;
    }
}

export async function updateTicketApi(id, data, token ){

    try {
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('file',data.file);
        const url = `${BASE_API}/api/tickets/${id}/`;
        const params = {
            method: 'PATCH',
            headers:{
                Authorization:`Bearer ${token}`,
            },
            body: formData,
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    } catch (error) {
        throw error
    }
}



export async function deleteTicketApi(id, token){
    try {
        const url = `${BASE_API}/api/tickets/${id}`;
        const params = {
            method: 'DELETE',
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    } catch (error) {
        throw error
    }
}

export async function getSeguimientosTicketsApi(_id_user,token){
    
    try {
        
        let url = `${BASE_API}/api/tickets/?assigned_to=${_id_user}`;
        
        const params = {
            method: 'GET',
            headers:{
                Authorization:`Bearer ${token}`,
            }
        };
        
        const response = await fetch(url,params);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}
export async function assignTicketApi(id, data, token ){

    try {
        const formData = new FormData();
        formData.append('assigned_to',data.assigned_to);
        const url = `${BASE_API}/api/tickets/${id}/`;
        const params = {
            method: 'PATCH',
            headers:{
                Authorization:`Bearer ${token}`,
            },
            body: formData,
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    } catch (error) {
        throw error
    }
}
