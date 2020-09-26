import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/">Home</NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/login">Login</NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>
                </ul>
            </div>
        </nav>
    )
}
