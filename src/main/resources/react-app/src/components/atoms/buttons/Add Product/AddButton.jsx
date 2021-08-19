import { useLocation } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './style.scss';

const AddButton = ({value, className}) => {
    const location = useLocation();
    const showModal = () => {
        if(location.pathname === "/categories"){
            document.querySelector(".modal--form").classList.add('modal--form--show');
        }else if(location.pathname === "/products"){
            document.querySelector(".modal--form--product").classList.add('modal--form--product--show');
        }
    }
    return (
        <span onClick={showModal} className={`content__btn ${className}`}>
            <AddCircleOutlineIcon /> {value}
        </span>
    )
}

export default AddButton
