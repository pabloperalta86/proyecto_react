import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({id, description, price, pictureUrl, stock}) => {
    console.log(pictureUrl)
    const styles = { border: 'green 2px solid', padding: '20px', margin: '20px', width: '200px' }
    return (
        <div style={styles}>
            <Link to={`/items/${id}`}>
                <div>
                    <img src={pictureUrl} alt='imagen del producto'></img>
                    Producto: {description}, Precio: {price}
                </div>
            </Link>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Item;