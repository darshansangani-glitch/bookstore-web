import NavBar from "./NavBar.js";
import {  useNavigate } from 'react-router-dom'
import { useAppSelector } from "../redux/hooks.js";
import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import { useLocation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    console.log(pathname)
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
        <>
            {/* <header className="w-full  fixed!  z-1030!  flex!  justify-between! px-15 py-10 border-b border-gray-400">
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
        </header> */}
            <header className="bg-[#F3F2EC]! flex justify-center! py-10 sticky! overflow-hidden top-0 z-1030!  ">
                <div className="w-355 flex justify-between text-black p-5 items-center">
                    <div className="">
                        <button className="font-light cursor-pointer text-5xl font-unicase text-black [line-spacing: -2%]!" onClick={() => pathname == '/home' ? window.scrollTo(0, 0) : navigate('/home')}><span className="text-black font-bold">Book</span>Worm</button>
                    </div>
                    <div className="font-plus p-5"> <NavBar /> </div>
                </div>

            </header>
        </>
    )
}