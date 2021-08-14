import './style.scss';
const SaveProductButton = ({type, value}) => {
    return (
        <button className="product__submit" type={type}>{value}</button>
    )
}

export default SaveProductButton
