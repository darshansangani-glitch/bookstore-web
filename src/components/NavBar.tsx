import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='nav-bar border-0! hover:text-gray-300!'>
            <Link to="/home">Home</Link>
            <Link to='/books'>Books</Link>
            <Link to='/book-requests'>Requests</Link>
        </div>
    )
}