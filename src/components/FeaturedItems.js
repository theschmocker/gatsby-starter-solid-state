import React from 'react';

// Children must be article components for styling
const FeaturedItems = ({ children }) => (
  <section className="features">{children}</section>
);

export default FeaturedItems;
