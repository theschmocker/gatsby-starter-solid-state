import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../assets/sass/main.scss';

import NavigationBar from '../components/NavigationBar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Layout extends Component {
  state = {
    isMenuOpen: false,
  };

  constructor(props) {
    super(props);
  }

  openMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
  };

  closeMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { children, data, location } = this.props;
    return (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {location.pathname !== '/' && (
          <NavigationBar
            siteTitle={data.site.siteMetadata.title}
            openMenu={this.openMenu}
          />
        )}
        <div className={this.state.isMenuOpen ? 'is-menu-visible' : ''}>
          <div
            id="page-wrapper"
            onClick={this.state.isMenuOpen ? this.closeMenu : undefined}
          >
            {children({ ...this.props, openMenu: this.openMenu })}
            <Footer />
          </div>
          <Menu closeMenu={this.closeMenu}>
            <Link to="/">Home</Link>
            <Link to="/generic">Generic</Link>
            <Link to="/elements">Elements</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Sign Up</Link>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
