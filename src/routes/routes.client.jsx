import { ClientLayout } from "../layouts"
import { Error404 } from "../pages";
import { Home, TicketsClient } from "../pages/Client";

const routesClient = [
    {
        path:"/",
        layout:ClientLayout,
        component:Home
    },
    {   
        path:"*",
        layout:ClientLayout,
        component:Error404
    },
    {
        path: "/tickets",
        layout: ClientLayout,
        component:TicketsClient
    },
]

export default routesClient;