import React, { Component } from 'react';

const Banner = React.forwardRef((props, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <h2>This is Solid State</h2>
      <p>
        Another free + fully responsive site template by{' '}
        <a href="http://html5up.net">HTML5 UP</a>
      </p>
    </div>
  </section>
));

export default Banner;
