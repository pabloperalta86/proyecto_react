import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 bg-accent">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-l">Supermercados React</a>
            </div>
            <div className="flex-2">
                <a className="btn btn-ghost normal-case text-l">Ofertas</a>
                <a className="btn btn-ghost normal-case text-l">Almacen</a>
                <a className="btn btn-ghost normal-case text-l">Limpieza</a>
                <a className="btn btn-ghost normal-case text-l">Verduleria</a>
            </div>
            <div className="flex-none">
                <CartWidget></CartWidget>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
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