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
    
    const styles = { border: 'none', width: '75px' }
    
    return(

        <div className="btn-group flex flex-auto">
            <button className="btn bg-accent btn-ghost" onClick={restaCantidad}>-</button>
            <input className="text-center input" type="text" value={cantidad} style={styles}/>
            <button className="btn bg-accent btn-ghost" onClick={sumaCantidad}>+</button>
        </div>
    )
}

export default ItemCount;