import NavBar from "./NavBar.js";
import lightLogo from '../assets/lightLogo.png'
import {useNavigate} from 'react-router-dom'
import users from '../assets/user.png'

export default function Header(){
    const loginNavigate = useNavigate()
    function handleLogin(){
        loginNavigate('/login');
    }

    return(
        <header className="w-full  fixed! top-0! right-0 left-0 z-1030!">
            <div className="w-13 flex items-center text-2xl gap-2 font-semibold">
                <img src={lightLogo} alt="Logo" />
                <label htmlFor="Logo"><span className="text-green-500">Book</span>Worm</label>
            </div>
            <NavBar />
            <div className='home-right'>
                <button className="home-log" onClick={handleLogin}>Sign In</button>
                <img src={users} alt="" />
            </div>
        </header>
    )
}