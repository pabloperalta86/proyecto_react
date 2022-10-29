import ItemList from "./ItemList";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {

    const [productos, setProducts] = useState([])
    const { categoryId } = useParams()

    const styles = { border: 'gray 2px solid', padding: '20px', margin: '20px' }

    const getProducts = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'items')
        getDocs( productsCollection ).then( res => {
            const productsData = res.docs.map( d => ({id: d.id, ...d.data()}) )
            if (categoryId) {
                setProducts(productsData.filter( p => p.title === categoryId))
            } else {
                setProducts(productsData)
            }  
        })
    }

    useEffect(() => {
        getProducts();
    }, [categoryId]) // eslint-disable-line react-hooks/exhaustive-deps

    let h2 = categoryId ? categoryId : 'Todos';

    return(
            <div style={styles}>
                <h2 >{greeting} {h2}</h2>
                <ItemList productos={productos}/>
            </div>
        );
}

export default ItemListContainer;