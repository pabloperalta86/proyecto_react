import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const Loading = () => {
    return (
        <strong className='m-8'>loading ...</strong>
    )
}
const styles = { border: 'green 2px solid', padding: '20px', margin: '20px', width: '500px' }
const Item = ( {item} ) => {
    return (
        <div className="flex w-screen justify-center">
            <div className="card-bordered flex w-2/3 bg-base-100 shadow-xl">
                <div className="card w-1/2 bg-base-100">
                    <figure><img src={item.pictureUrl} alt='imagen del producto' width='450px'/></figure>
                </div>    
                <div className="flex card-body w-1/2">
                    <h2 className="card-title">{ item.description }</h2>
                    <p>{ item.detail }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ItemDetailContainer = () => {
    const { id: itemId } = useParams()
    const [loading, setloading] = useState(true)
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then( response => {
            setItem( response )
            setloading(false)
        })
    }, [])

    const getItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve( products.find( p => p.id === Number(itemId) ) )
        }, 300);
    })}

    return (
        <>
            { loading ? <Loading/> : <Item item={item}/> }
        </>
    )
}

export default ItemDetailContainer;