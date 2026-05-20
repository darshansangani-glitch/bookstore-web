import { Link } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";

export default function NavBar() {
    return (
        <div className='flex gap-15 text-[16px] '>
            <Link className='' to="/home">HOME</Link>
            <Link className='' to='/books'>SHOP</Link>
            <Link className='' to='#'>ABOUT</Link>
            <Link className='' to='#'>CONTACT US</Link>
            <Link className=' ' to='#'><IoReorderThree fontSize={25} className='font-light' /></Link>
        </div>
    )
}