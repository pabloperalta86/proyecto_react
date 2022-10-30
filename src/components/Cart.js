import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const Cart = () => {

    const {cartItems, removeItem, clearCart, cartLength, getSubtotal, getTotal} = useContext(CartContext)

    return (
        <>
            {cartLength() === 0 ? (

                <div className="flex min-h-screen -mb-48 flex flex-col">
                    <div className="m-auto mt-64">
                        <p >Tu carrito está vacío. Agregá algún producto para poder continuar.</p>
                        <Link to='/' className=" flex flex-row items-center mt-3">
                            volver al inicio
                        </Link>
                    </div>
                </div>

            ) : (

                <div className="mx-6">
                    <div className="flex flex-col justify-between w-full lg:max-w-7xl xl:m-auto">

                        <h1 className=" self-center mb-6">Carrito</h1>

                        <table className="inline-block overflow-x-auto whitespace-nowrap">
                            
                            <thead className="h-10 text-center">
                                <tr className="border-gray-200 border-b">
                                    <th className=" text-left pl-4">Producto</th>
                                    <th className=" px-6 lg:px-16 xl:px-32">Precio</th>
                                    <th className=" px-6 md:px-2 lg:px-8 xl:px-12">Cantidad</th>
                                    <th className=" px-6 md:px-2 lg:px-16 xl:px-28">Subtotal</th>
                                    <th />
                                </tr>
                            </thead>

                            <tbody className="w-full text-center">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-gray-200 border-b">
                                        <th className="flex flex-row justify-left items-center pr-40 md:pr-0">
                                            <img className="p-4 h-20" src={item.pictureUrl} alt={item.description} />
                                            <div className="flex flex-col text-left">
                                                <p>{item.description}</p>
                                            </div>
                                        </th>
                                        <th>{item.price}</th>
                                        <th>{item.quantity}</th>
                                        <th>{getSubtotal(item.price, item.quantity)}</th>
                                        <th className="px-4 lg:pl-2 xl:pl-24">
                                            <button onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-400 hover:text-gray-600 cursor-pointer bg-accent">X</button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex flex-col md:flex-row justify-between mt-6 mb-5 mx-4">
                            <button onClick={clearCart} className=' flex flex-row items-center self-start mb-4'>
                                Vaciar Carrito
                            </button>
                            <div className="flex flex-col self-end w-full md:w-2/5">
                                <div className="flex flex-row justify-between ">
                                    <p>Cantidad de items:</p>
                                    <p>{cartLength()}</p>
                                </div>
                                <div className="flex flex-row justify-between font-semibold ">
                                    <p>Total:</p>
                                    <p>{getTotal()}</p>
                                </div>
                                <Link to='/checkout' className=" bg-accent w-full text-center py-3 mt-3">Finalizar Compra</Link>
                                <Link to='/' className=" flex flex-row items-center mt-2">
                                    Seguir comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
}

export default Cart;