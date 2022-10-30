import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const Loading = () => {
    return (
        <strong className='m-8'>Loading ...</strong>
    )
}

const Item = ( {item} ) => {
    const { addItem } = useContext(CartContext);

    const addToCart = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="container grid grid-cols-7 grid-rows-1 m-10">
            <div className="col-span-1"></div>
            <div className="container col-span-5 grid grid-cols-8 grid-rows-8 card-bordered bg-base-100 shadow-xl">
                <div className="col-span-3 row-span-1"></div>   
                <div className="col-span-5 row-span-5">
                    <h2 className="card-title">{ item.description }</h2>
                    <p className="my-5 mr-2 text-left">{ item.detail }</p>
                </div>
                <div className="col-span-3 row-span-5 content-center bg-base-100">
                    <figure className="content-center">
                        <img src={item.pictureUrl} alt='imagen del producto'/>
                    </figure>
                </div> 
                <div className="col-span-5 row-span-1">
                        <p className="my-5 mr-2 text-left">STOCK: { item.stock }</p>
                </div>                
                
                <div className="col-span-3 row-span-1">
                    <h3 className='text-2xl'>Precio: { item.price }</h3>
                </div>  
                <div className="justify-items-center col-span-5 my-2 row-span-1">
                    <ItemCount addToCart={addToCart} stock={item.stock}/>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    )
}

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [loading, setloading] = useState(true)
    const [item, setItem] = useState({})

    const getProduct = () => {
        const db = getFirestore();
        const productsCollection = collection(db, 'items');
        getDocs( productsCollection ).then( res => {
            const productsData = res.docs.map( d => ({...d.data()}) );
            setItem(productsData.filter( p => p.id === Number(itemId))[0]);
        });
    }
    
    useEffect(() => {
        getProduct();
        setloading(false);
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            { loading ? <Loading/> : <Item item={item}/> }
        </>
    )
}

export default ItemDetailContainer;