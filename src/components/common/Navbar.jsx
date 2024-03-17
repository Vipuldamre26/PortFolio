import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink className='navlink' to={'/'}>About</NavLink>
                </li>
                <li>
                    <NavLink className='navlink' to={'/certificate'}>Certificates</NavLink>
                </li>
                <li>
                    <NavLink className='navlink' to={'/project'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink className='navlink' to={'/more'}>More</NavLink>
                </li>
                <li>
                    <NavLink className='navlink' to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default Navbar;