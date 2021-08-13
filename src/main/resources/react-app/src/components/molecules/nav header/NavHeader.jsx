import Profile from '../../atoms/profile pic/ProfileIcon'
import Rectangle from '../../atoms/rectangle/Rectangle'

import './style.scss'

const NavHeader = () => {
    return (
        <header className="nav__header">
            <Profile /> <Rectangle />
        </header>
    )
}

export default NavHeader
