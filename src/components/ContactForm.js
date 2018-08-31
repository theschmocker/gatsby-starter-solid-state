import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
