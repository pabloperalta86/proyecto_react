import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = ({productos}) => {
    const [items, setItems] = useState([])
    useEffect( ()=>{
        getProducts().then( res => {
            setItems( res )
        })
        .catch( err => {
            console.log('err: ' + err);
        })
    }, [productos])

    const getProducts = () => {
        return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 300)
        })
    }

    return (
        <div>
            <div className="flex flex-wrap">
                { items.map( item => <Item key={item.id} {...item} /> ) }
            </div>
        </div>
    )
}

export default ItemList;