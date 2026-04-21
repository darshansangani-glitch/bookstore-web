import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='flex gap-10 font-semibold font-[poppins] text-2xl border-0! '>
            <Link className='hover:text-gray-400' to="/home">Home</Link>
            <Link className='hover:text-gray-400' to='/books'>Books</Link>
            <Link className='hover:text-gray-400' to='/book-requests'>Requests</Link>
        </div>
    )
}