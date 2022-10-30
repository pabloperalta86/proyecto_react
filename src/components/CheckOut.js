import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { collection, getFirestore, addDoc } from "firebase/firestore"

const CheckOut = () => {

    const addOrder = async (order) => {
        const db = getFirestore();
        const docSnap = await addDoc(collection(db, "orders"), order)
        return docSnap.id
    }    
    const { cartItems, cartLength, clearCart, getTotal } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

    const orderDate = new Date().toLocaleDateString()

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        })
    }

    return (
        <>
            <div className="flex justify-center items-center mx-auto xl:max-w-7xl mx-6 xl:mx-auto">
                <div className="flex w-full flex-col justify-center items-center">
                    <h1 className=" self-start mb-6">Checkout</h1>
                    <div className="flex w-full flex-col lg:flex-row justify-start items-start">
                        <div className="flex flex-col self-start w-full md:w-1/2 mr-6">
                            <h2>Resúmen</h2>
                            <div className="flex flex-col border border-gray-200 p-4 mt-6">
                                <div className="flex flex-row justify-between ">
                                    <p>Cantidad de items:</p>
                                    <p>{cartLength()}</p>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className="flex flex-row justify-between font-semibold mt-10 ">
                                    <p>Total:</p>
                                    <p>{getTotal()}</p>
                                </div>
                            </div>
                            <Link to='/cart' className=" flex flex-row items-center mt-3 lowercase">
                                Volver al carrito
                            </Link>
                        </div>
                        <div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">
                            <form className="space-y-6">
                                <h2>Detalles de facturación</h2>
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                />
                            </form>

                            {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                ? (
                                    <input 
                                        onClick={() => { orderHandler(); setShowModal(true) }} 
                                        className=" focus:outline-none text-white bg-accent focus:ring-transparent w-full text-center py-3 cursor-pointer mt-6"
                                        type="submit" 
                                        value="Proceder al pago" 
                                    />
                                ) : (
                                    <input 
                                    className=" focus:outline-none text-white bg-gray-400 focus:ring-transparent w-full text-center py-3 mt-6"
                                        type="submit" 
                                        value="Proceder al pago" 
                                        disabled 
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-accent`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2 className="text-center md:w-9/12 lg:w-7/12">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className="mt-6 text-center md:w-9/12 lg:w-7/12">Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Muchas gracias por su compra. Lo esperamos pronto Supermecados React.</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={clearCart} className=" focus:outline-none text-white bg-accent focus:ring-transparent w-40 text-center py-3 cursor-pointer">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut