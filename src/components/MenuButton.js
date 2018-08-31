import React from 'react';

const MenuButton = ({ onClick }) => (
    <nav>
        <a 
            href="#menu"
            onClick={onClick}
        >Menu</a>
    </nav>
)

export default MenuButton;
