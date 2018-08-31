import React from 'react';
import Link from 'gatsby-link';

// TODO: use proptypes and set a default for to
const SpecialLink = ({ children, to }) => (
  <Link to={to || '/'} className="special">
    {children}
  </Link>
);

export default SpecialLink;
