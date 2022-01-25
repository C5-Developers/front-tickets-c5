import { BASE_API } from '../utils/constants'

export async function getTicketsApi(){
    try {
        const url = `${BASE_API}/api/tickets/`;
        const response = await fetch(url);
        const result = await response.json()
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addTicketApi(data, token){
    try{
        const url = `${BASE_API}/api/tickets/`;
        const params = {
            method: 'POST',
            headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(data),
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    }catch(error){
        throw error;
    }
}

export async function updateTicketApi(id, data, token ){

    console.log(id);
    try {
        const url = `${BASE_API}/api/tickets/${id}/`;
        const params = {
            method: 'PATCH',
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data),
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