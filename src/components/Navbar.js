import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="brand-logo">Home</Link>
                    <Link to="/ship"> Shop </Link>
                    <Link to="/cart">My CART</Link>
                    <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                </div>
            </nav>  
    )
}

export default Navbar;