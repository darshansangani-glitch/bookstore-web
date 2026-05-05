import { Link } from 'react-router-dom'
import { IoReorderThree } from "react-icons/io5";

// export default function NavBar() {
//     return (
//         <div className='flex gap-10 font-semibold font-[poppins] text-2xl border-0! '>
//             <Link className='hover:text-gray-400' to="/home">Home</Link>
//             <Link className='hover:text-gray-400' to='/books'>Books</Link>
//             <Link className='hover:text-gray-400' to='/book-requests'>Requests</Link>
//         </div>
//     )
// }



export default function NavBar() {
    return (
        <div className='flex gap-15 text-[16px] '>
            <Link className='' to="/home">HOME</Link>
            <Link className='' to='/books'>SHOP</Link>
            <Link className='' to='#'>ABOUT</Link>
            <Link className='' to='#'>CONTACT US</Link>
            <Link className=' ' to='#'><IoReorderThree fontSize={25} className='font-light!' /></Link>
        </div>
    )
}