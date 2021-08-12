import '../preset.scss';
import '../style.scss';
import './header.scss';
import { HeaderTop } from './HeaderTop/HeaderTop';
import {Nav} from '../Nav/Nav';
import CompanyLogo from '../Comp-Logo/Logo';

const Header = (key) => {
    return(
        <header key={key} className='header'>
            <div className='wrapper'>
                <HeaderTop/>
                <CompanyLogo />
                <Nav />
            </div>
        </header>
    )
}

export default Header;