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
        }
        const response = await fetch(url,params);
        const result = await response.json();
        return result; 
    }catch(error){
        throw error;
    }
}