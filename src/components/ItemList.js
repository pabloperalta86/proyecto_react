import { useEffect, useState } from "react"
import Item from "./Item"


const ItemList = ({productos}) => {

    const [items, setItems] = useState([])

    useEffect( ()=>{
        setItems( productos )
    }, [productos])

    return (
        <div>
            <div className="flex flex-wrap">
                { items.map( item => <Item key={item.id} {...item} /> ) }
            </div>
        </div>
    )
}

export default ItemList;