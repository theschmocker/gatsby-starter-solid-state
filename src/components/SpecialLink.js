import React from 'react';
import Link from 'gatsby-link';

const SpecialLink = ({ children, to }) => (
    <Link 
        to={to} 
        className="special"
    >
        {children}
    </Link>
)

export default SpecialLink;
