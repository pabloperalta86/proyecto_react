import ItemList from "./ItemList";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { products } from "../data/products";


const ItemListContainer = ({greeting}) => {

    const [productos, setProducts] = useState([])
    const { categoryId } = useParams()

    const styles = { border: 'green 2px solid', padding: '20px', margin: '20px' }

    useEffect(() => {
        if (categoryId) {
            console.log(products)
            setProducts( products.filter( p => p.title === categoryId))
        } else {
            console.log(products)
            setProducts(products)
        }  
    }, [categoryId])    


    return(
            <div style={styles}>
                <h2>{greeting}</h2>
                <ItemList productos={productos}/>
            </div>
        );
}

export default ItemListContainer;