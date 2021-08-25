import './style.scss';
const SaveProductButton = ({type, value, className}) => {
    return (
        <button className={`product__submit ${(className !== null) ? className : ' '}`} type={type}>{value}</button>
    )
}

export default SaveProductButton
