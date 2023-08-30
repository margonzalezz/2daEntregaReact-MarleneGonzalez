import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                {/* BRAND */}
                <Link to="/" className="navbar-brand border p-3 bg-warning"> Coffe House</Link>
                {/* LINKS */}
                <div className="container-ul d-flex ">
                    <ul className="navbar-nav d-flex color-black">
                        <li className="navbar-item me-4">
                            <NavLink to="/category/coffetime" className= "text-decoration-none text-dark fw-bold"> Desayunos y meriendas </NavLink>
                        </li>
                        
                        <li className="navbar-item me-4">
                            <NavLink to="/category/nuestra_especialidad" className= "text-decoration-none text-dark fw-bold"> Nuestro café de especialidad </NavLink>
                        </li>

                        <li className="navbar-item me-4">
                            <NavLink to="/category/promos" className= "text-decoration-none text-dark fw-bold"> Promociones </NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
        </div>
    </nav>
};

export default Navbar;


