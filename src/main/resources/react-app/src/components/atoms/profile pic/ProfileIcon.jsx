import ProfileImage from '../../../images/Profileimage.png'

import './style.scss'

const ProfileIcon = () => {
    return (
        <span className="nav__header--profile">
           <img src={ProfileImage} alt="ProfileIcon" /> Vivian Dela Cruz
        </span>
    )
}

export default ProfileIcon
