import React from 'react';

import SiteTitle from './SiteTitle';
import MenuButton from './MenuButton';

const Header = ({ siteTitle, openMenu, className }) => (
  <header id="header" className={className}>
    <SiteTitle>{siteTitle}</SiteTitle>
    <MenuButton onClick={openMenu} />
  </header>
);

export default Header;
