import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import logo from '../logo.svg';

const NavBar = () => {
    return (
        <div className="navbar bg-accent">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-l">
                    <img src={logo} alt='imagen' width='60px'/>
                    React Market
                </Link>
            </div>
            <div className="flex-2">
                <Link to='/category/almacen' className="btn btn-ghost normal-case text-l">Almacen</Link>
                <Link to='/category/limpieza' className="btn btn-ghost normal-case text-l">Limpieza</Link>
                <Link to='/category/verduleria' className="btn btn-ghost normal-case text-l">Verduleria</Link>
            </div>
            <div className="flex-none">
                <CartWidget></CartWidget>
            </div>
        </div>
    )
}

export default NavBar;