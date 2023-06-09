import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={handleMenuClose}>
                    RWS | Race - Work - Stay
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                    onClick={handleMenuClose}
                >
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li> */}
                    </ul>
                    {props.isAuth ? (
                        <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    HomePage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    Profile
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <span
                                    onClick={props.handleLogout}
                                    className="nav-link logout-link"
                                >
                                    Logout
                                </span>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">
                                    Create Account
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
