import React from "react";
import './NavBar.css'
import {HashLink as Link} from 'react-router-hash-link';

function NavBar() {
    return (
        
        <div className="navBar">
            <ul>
                <Link to="#inicio" className="nav-li" smooth>
                <li>Inicio</li>
                </Link>
                <Link to="#categorias" className="nav-li" smooth>
                <li>Categorías</li>
                </Link>
                <Link to="#productos" className="nav-li" smooth>
                <li>Productos</li>
                </Link>
               
            </ul>
            
        </div>
        
    )
}

export default NavBar;