import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

export default function Protected() {
    const isAuthenticated = useAppSelector(s => s.auth.status)
    // const token = useAppSelector(s=>s.auth.token)
    // const decodedPayload = jwtDecode(token ?? "") as CustomJwtPayload;
    // const userRole = decodedPayload.role;
    return (
        <>
            {isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />}
        </>
    )
}