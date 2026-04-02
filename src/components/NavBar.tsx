import {Link} from 'react-router-dom'


export default function NavBar(){
    return (
        <div className='nav-bar'>
            <Link to="/home">Home</Link>
            <Link to='/books'>Books</Link>
            <Link to='/book-requests'>Requests</Link>
        </div>
    )
}