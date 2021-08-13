import Search from "../../atoms/buttons/Search Icon/Search"
import Bell from "../../atoms/buttons/Bell Icon/Bell"
import Profile from "../../atoms/buttons/Profile Icon/Profile"

import './style.css';

const HeaderButtons = () => {
    return (
        <div className="header__buttons">
            <Search />
            <Bell />
            <Profile />
        </div>
    )
}

export default HeaderButtons
