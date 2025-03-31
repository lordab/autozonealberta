import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

const Navbar = (children, ...props) => {
    return (
        <>
        <nav>
            <div className='heading'>
                <h2>Autozone Alberta</h2>
            </div>
            <div>
            <ul className='navlinks'>
            <li>
                <NavLink className='nav-items' to ='/' href='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='nav-items' to='/Contact' href='/contact'>Contact</NavLink>
            </li>
            </ul>
            </div>
            <div className='hamburger-icon'>
            <FaBars />
            </div>
        </nav>
        </>
    )
}
export default Navbar;