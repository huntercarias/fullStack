import { Link, NavLink } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Estetica Belle Siluet
                </Link>

            </div>


            <div className="d-flex flex-row-reverse bd-highlight">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/Home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/About"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/Products"
                    >
                        Products
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/Services"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/Contact"
                    >
                        Contact
                    </NavLink>
                </div>



            </div>
        </nav>
    )
}