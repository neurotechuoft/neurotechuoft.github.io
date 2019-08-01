import React from 'react';
import './NavBar.scss';

import Logo from './Logo';
import NavButton from './NavButton';

function NavBar() {
    return(
        <div className="navbar">

          <Logo/>

          <NavButton link="index.html" buttonName="HOME"/>
          <NavButton link="our-team.html" buttonName="TEAM"/>
          <NavButton link="initiatives.html" buttonName="INITIATIVES"/>
          <NavButton link="events.html" buttonName="EVENTS"/>
          <NavButton link="faq.html" buttonName="FAQ"/>
          
        </div>
    )
}

export default NavBar;
