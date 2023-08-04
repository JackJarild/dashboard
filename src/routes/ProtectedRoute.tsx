import { useUser } from "@/lib/auth"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
    const user = useUser()
    console.log('ProtectedRoute user', user)

    // if (!user || !user.data) {
    //     return <Navigate to='/login' />
    // }
    // if(user.isLoading) {
    //     return <div>Loading</div>
    // }

    return user.data ? <Outlet /> : <Navigate to='/login' />
}