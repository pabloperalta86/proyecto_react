import { Link } from "react-router-dom";

const Item = ({id, description, price, pictureUrl, stock}) => {
    console.log(pictureUrl)
    const styles = { border: 'gray 1px solid', padding: '20px', margin: '20px', width: '200px'}
    return (
        <div className='ppp shadow-lg shadow-current' style={styles}>
            <Link to={`/items/${id}`}>
                <div>
                    <img src={pictureUrl} alt='imagen del producto'></img>
                    Producto: {description}, Precio: {price}
                </div>
            </Link>
        </div>
    )
}

export default Item;