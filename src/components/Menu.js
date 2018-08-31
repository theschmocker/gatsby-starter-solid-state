import React from 'react';
import Link from 'gatsby-link'

const Menu = ({ children, closeMenu }) => ( 
    <nav id="menu" onClick={closeMenu}>
        <div className="inner">
            <h2>Menu</h2>
            <ul className="links">
                {React.Children.map(children, link => <li onClick={closeMenu}>{link}</li>)}
            </ul>
            <a 
                href="#close-menu" 
                className="close"
                onClick={closeMenu}
            ></a>
        </div>
    </nav>
)

export default Menu;
