import {useState} from 'react';
import { useAuth } from '.';
import {getTicketsAdminApi, getTicketsApi, addTicketApi, updateTicketApi, deleteTicketApi,assignTicketApi, getSeguimientosTicketsApi} from '../api/ticket';

export function useTicket(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [tickets, setTickets] = useState(null);
    const { auth } = useAuth();

    const getTicketsAdmin = async () => {


        try {
            setLoading(true);
            const response = await getTicketsAdminApi(auth.token);
            setLoading(false);
            setTickets(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const getTickets = async () => {


        try {
            setLoading(true);
            const response = await getTicketsApi(auth.me.id, auth.token);
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
            await addTicketApi(data, auth.token, auth.me.id );
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

    const assignTicket = async (id,data) => {

        try {
            setLoading(true);
            await assignTicketApi(id, data, auth.token );
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

    const getSeguimientoTickets = async () => {


        try {
            setLoading(true);
            const response = await getSeguimientosTicketsApi(auth.me.id, auth.token);
            setLoading(false);
            setTickets(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    


    return {
        loading,
        error,
        tickets,
        getTicketsAdmin,
        getTickets,
        addTicket,
        updateTicket,
        deleteTicket,
        assignTicket,
        getSeguimientoTickets,
    }
}