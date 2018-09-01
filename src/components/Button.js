import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

function classNames(props) {
  return Object.keys(props)
    .filter(prop => props[prop] === true)
    .join(' ');
}
/*
 * Standard button component.
 * If a "to" prop is provided, it is rendered as a Link, styled as a button
 * Otherwise, render an actual button component
 *
 * Modifier classes from the CSS are used by passing attribute flags.
 * Ex: <Button primary>Primary Button</Button>
 */

const Button = ({ to, className, onClick, children, ...props }) => {
  if (to) {
    return (
      <Link to={to} className={`${className || ''} button ${classNames(props)}`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${className || ''} button ${classNames(props)}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  fit: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
