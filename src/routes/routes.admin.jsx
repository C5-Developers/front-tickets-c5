import { AdminLayout } from "../layouts"
import { HomeAdmin, UsersAdmin, TicketsAdmin, SeguimientosAdmin } from "../pages/Admin";

const routesAdmin = [
    {
        path: "/",
        layout: AdminLayout,
        component:HomeAdmin
    },
    {
        path: "/admin/tickets",
        layout: AdminLayout,
        component:TicketsAdmin
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component:UsersAdmin
    },
    {
        path: "/admin/seguimientos",
        layout: AdminLayout,
        component:SeguimientosAdmin
    },
]

export default routesAdmin;