import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

export default function Protected() {
    const isAuthenticated = useAppSelector(s => s.auth.status)
    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />}
        </>
    )
}