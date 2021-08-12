import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isLoggedOut } from '../../store/action/isLoggedIn'
import './Popover.scss'

const Popover = () => {
 const dispatch = useDispatch();
    return (
        <section className='popover'>
            <ul>
                <li><NavLink to=''>My Account</NavLink></li>
                <li onClick={()=> dispatch(isLoggedOut())}>Logout</li>
            </ul>
        </section>
    )
}

export default Popover
