import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useTicket } from '../../../../hooks';

export default function DataTableTicket() {

    // const { tickets, updateTicket, onDeleteTicket } = props;
    const { loading, tickets, getTickets, deleteTicket } = useTicket();
    const [refetch, setRefetch] = useState(false);

    useEffect(()=>getTickets(),[refetch]);

    console.log(tickets)
    

    const columns = [
        {
            name: 'Id',
            selector: 'id',
        },
        {
            name: 'Titulo',
            selector: 'title',
        },
        {
            name: 'Area',
            selector: 'owner',
        },
        {
            name: 'Asignado',
            selector: 'assigned_to',
        },
        {
            name: 'Estado',
            selector: 'status',
        },
    ]

    // const data = [
    //     {
    //         id: 1,
    //         title: 'Beetlejuice',
    //         year: '1988',
    //     },
    //     {
    //         id: 2,
    //         title: 'Ghostbusters',
    //         year: '1984',
    //     },
    // ]

    // console.log(data)
    return (
        
        <>
            <DataTable 
            columns={ columns } 
            data={ tickets } 
            title="tickets"
            />
        </>
    )
}
