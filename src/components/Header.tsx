import NavBar from "./NavBar.js";
import lightLogo from '../assets/lightLogo.png'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../redux/hooks.js";
import { logout } from "../redux/features/slice/authSlice.js";
import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
    const navigate = useNavigate();

    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(s => s.auth.status)
    const token = useAppSelector(s => s.auth.token)
    const [user, setUser] = useState({
        name: '',
        role: '',
    })
    const loadUserInfo = async () => {
        try {
            const data = await api.get('/user/info', token ? token : '')
            setUser(data.userInfo)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            loadUserInfo()
        }, 1000)
    }, [])
    return (
        <header className="w-full  fixed!  z-1030!  flex!  justify-between! px-15 py-10 border-b border-gray-400">
            <div className="w-13 flex items-center text-3xl gap-2 font-semibold">
                <img src={lightLogo} alt="Logo" />
                <label htmlFor="Logo"><span className="text-green-500">Book</span>Worm</label>
            </div>
            <NavBar />
            <div className='home-right items-center'>
                <button className={`home-log text-[18px]! font-bold! w-25! rounded-3xl hover:text-[16px]! border-0! ${isAuthenticated ? 'text-white bg-red-400! hover:text-white! hover:bg-red-600' : 'text-black hover:text-white bg-white hover:bg-gray-6'}`} onClick={() => isAuthenticated ? dispatch(logout()) : navigate('/login')}>{isAuthenticated ? `Log Out` : `Sign In`}</button>
                <div className="border border-gray-100 h-10" />
                <FaUserCircle className="text-4xl text-gray-400" />
                <div className="flex flex-col text-slate-400! font-bold text-[20px] leading-5.5 ">
                    <span className="text-white! ">{user.name}</span>
                    <span className="font-mono! text-[14px]!">{user.role}</span>
                </div>
            </div>
        </header>
    )
}