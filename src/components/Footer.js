import React from 'react';

import Copyright from './Copyright';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Footer = () => (
  <section id="footer">
    <div className="inner">
      <h2 className="major">Get in touch</h2>
      <p>
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
        Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas,
        purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
        ac elementum arcu. Quisque placerat auctor laoreet.
      </p>
      <ContactForm />
      <ContactInfo />
      <Copyright />
    </div>
  </section>
);

export default Footer;
