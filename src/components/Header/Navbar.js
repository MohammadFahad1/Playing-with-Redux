import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/use-reducer'>Counter-reducer</NavLink></li>
                <li><NavLink to='/react-redux'>React Redux</NavLink></li>
                <li><NavLink to='/redux-thunk'>Redux Thunk</NavLink></li>
                <li><NavLink to='/redux-toolkit'>Redux Toolkit</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;