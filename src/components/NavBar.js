import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 bg-accent">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-l">Supermercados React</Link>
            </div>
            <div className="flex-2">
                <Link to='/category/almacen' className="btn btn-ghost normal-case text-l">Almacen</Link>
                <Link to='/category/limpieza' className="btn btn-ghost normal-case text-l">Limpieza</Link>
                <Link to='/category/verduleria' className="btn btn-ghost normal-case text-l">Verduleria</Link>
            </div>
            <div className="flex-none">
                <CartWidget></CartWidget>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='imagen'/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge">Crear</span>
                            </a>
                        </li>
                        <li><a>Salir</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;