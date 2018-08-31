import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../assets/sass/main.scss';

import Header from '../components/header';
import Menu from '../components/Menu';

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
    const { children, data, match } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {match.path !== '/' &&
          match.isExact && (
            <Header
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
          </div>
          <Menu closeMenu={this.closeMenu}>
            <Link to="/">Home</Link>
          </Menu>
        </div>
      </div>
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
