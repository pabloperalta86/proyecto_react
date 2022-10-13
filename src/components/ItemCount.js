import { useState, useEffect } from "react"

const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState(0)
    
    const sumaCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad+1);
        }
    }
    const restaCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad-1);
        }
    }

    useEffect( () => {
        console.log('se montó el componente');
    }, [])

    useEffect( () => {
        console.log('se hizo render');
    })

    useEffect( () => {
        console.log('se alteró counter');
    }, [cantidad])
    

    //const carrito = [] 
const agregarCarrito = (event) => {
    console.log(event.target)
    //carrito.push(event.id)
}

    const styles = { border: 'none', width: '75px', margin: 'auto' }
    
    return(
        <div className="btn-group">
            <div className="btn-group">
                <button className="btn bg-accent btn-ghost" onClick={restaCantidad}>-</button>
                <p className="text-center" style={styles}>{cantidad}</p>
                <button className="btn bg-accent btn-ghost" onClick={sumaCantidad}>+</button>
            </div>
            <div className="btn-group">
                <button onClick={agregarCarrito} className="btn bg-accent btn-ghost mx-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Agregar
                </button>
            </div>
        </div>    
    )
}

export default ItemCount;