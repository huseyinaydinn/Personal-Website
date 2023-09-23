import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRef } from 'react';

function Navbar() {

    /* menu responsive settings */
    const ref = useRef(null);
    const navToggle = () => {
        const navMenu = ref.current
        navMenu.classList.add('show-menu')
    }
    const navClose = () => {
        const navMenu = ref.current
        navMenu.classList.remove('show-menu')
    }

    /* blur header settings */
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header')
        scrollY >= 50
            ? header.classList.add('blur-header')
            : header.classList.remove('blur-header');
    })



    return (
        <header className="header" id="header">
            <nav className="nav container">
                <NavLink to="/" className="nav_logo">
                    Hüseyin <span>Aydın</span>
                </NavLink>

                <div className="nav_menu" id="nav-menu" ref={ref}>
                    <ul className="nav_list" onClick={navClose}>
                        <li className="nav_item">
                            <NavLink to="/" className="nav_link">Home</NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink to="/about" className="nav_link">About Me</NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink to="/projects" className="nav_link">Projects</NavLink>
                        </li>

                        <li className="nav_item">
                            <NavLink to="/contact" className="nav_link">Contact</NavLink>
                        </li>

                    </ul>

                    {/* <!--Menu Close button --> */}
                    <div className="nav_close" id="nav-close" onClick={navClose}>
                        <AiOutlineClose />
                    </div>
                </div>

                {/* <!--Menu Toggle button --> */}
                <div className="nav_toggle" id="nav-toggle" onClick={navToggle}>
                    <AiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar