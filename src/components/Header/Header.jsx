import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import './Header.css';

export default function Header() {
    return (
        <header>
                <Link to="/">
                    <img src={Logo} className="logo" alt="logo" />
                </Link>
                <nav>
                    <Link className="navMenu" to="/">
                        Accueil
                    </Link>
                    <Link className="navMenu" to="/aboutUs">
                        À propos
                    </Link>
                </nav>
        </header>
    )
}