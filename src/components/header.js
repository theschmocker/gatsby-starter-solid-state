import React from 'react'

import SiteTitle from './SiteTitle';
import MenuButton from './MenuButton';

const Header = ({ siteTitle, openMenu }) => (
    <header id="header" className="alt">
        <SiteTitle>
            { siteTitle }
        </SiteTitle>
        <MenuButton onClick={openMenu}/>
    </header>
)

export default Header
