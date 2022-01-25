import {useState} from 'react';
import { useAuth } from '.';
import {getTicketsApi, addTicketApi, updateTicketApi, deleteTicketApi} from '../api/ticket';

export function useTicket(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tickets, setTickets] = useState(null);
    const { auth } = useAuth();

    const getTickets = async () => {
        try {
            setLoading(true);
            const response = await getTicketsApi();
            setLoading(false);
            setTickets(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const addTicket = async (data) => {

        try {
            setLoading(true);
            await addTicketApi(data, auth.token );
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const updateTicket = async (id,data) => {

        try {
            setLoading(true);
            await updateTicketApi(id, data, auth.token );
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            setError(error);
        }

    }

    const deleteTicket = async (id) =>{
        try {
            setLoading(true);
            await deleteTicketApi(id, auth.token);
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }


    return {
        loading,
        error,
        tickets,
        getTickets,
        addTicket,
        updateTicket,
        deleteTicket
    }
}