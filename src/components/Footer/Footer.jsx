import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import logoFooter from '../../assets/LOGO-footer.png'

export default function Footer() {
  return (
    <footer className="footer__container">
      <Link to="/">
        <img src={logoFooter} alt="Kasa Logo Footer" />
      </Link>
      <p>© 2021 Kasa. Tous droits réservés</p>
    </footer>
  )
}

