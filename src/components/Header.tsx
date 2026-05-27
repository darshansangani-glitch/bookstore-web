import NavBar from "./NavBar.js";
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from "../redux/hooks.js";
import { useState } from "react";
import { api } from "../utils/api.js";
import { useLocation } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
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
    // useEffect(() => {
    //     setTimeout(() => {
    //         loadUserInfo()
    //     }, 1000)
    // }, [])


    return (
        <header className="bg-[#F3F2EC]! flex justify-center! py-10">
            <div className="2xl:w-355 lg:w-285 md:w-235 w-full flex justify-between text-black p-5 items-center">
                <div className="">
                    <button className="font-light cursor-pointer text-5xl font-unicase text-black" onClick={() => pathname === '/home' ? window.scrollTo(0, 0) : navigate('/home')}><span className="text-black font-bold">Book</span>Worm</button>
                </div>
                <div className="font-plus p-5"> <NavBar /> </div>
            </div>
        </header>
    )
}