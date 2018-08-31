import React from 'react';
import Link from 'gatsby-link'

const SiteTitle = ({ children }) => ( 
    <h1>
        <Link
            to="/"
        >
            {children}
        </Link>
    </h1>
)

export default SiteTitle;
