import { AdminLayout } from "../layouts"
import { HomeAdmin, UsersAdmin, TicketsAdmin } from "../pages/Admin";

const routesAdmin = [
    {
        path: "/",
        layout: AdminLayout,
        component:HomeAdmin
    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component:UsersAdmin
    },
    {
        path: "/admin/tickets",
        layout: AdminLayout,
        component:TicketsAdmin
    },
]

export default routesAdmin;