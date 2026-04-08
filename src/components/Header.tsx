import NavBar from "./NavBar.js";
import lightLogo from '../assets/lightLogo.png'
import { useNavigate } from 'react-router-dom'
import users from '../assets/user.png'
import { useAppDispatch, useAppSelector } from "../redux/hooks.js";
import { logout } from "../redux/features/slice/authSlice.js";

export default function Header() {
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(s => s.auth.status)

    return (
        <header className="w-full  fixed! top-0! right-0 left-0 z-1030! p-2">
            <div className="w-13 flex items-center text-2xl gap-2 font-semibold">
                <img src={lightLogo} alt="Logo" />
                <label htmlFor="Logo"><span className="text-green-500">Book</span>Worm</label>
            </div>
            <NavBar />
            <div className='home-right '>
                <button className="home-log bg-gray-300! text-[18px]! font-bold! w-25! hover:rounded-3xl! text-black! hover:text-[16px]! border-0!" onClick={() => isAuthenticated ? dispatch(logout()) : navigate('/login')}>{isAuthenticated ? `Log Out` : `Sign In`}</button>
                <img src={users} alt="" />
            </div>
        </header>
    )
}