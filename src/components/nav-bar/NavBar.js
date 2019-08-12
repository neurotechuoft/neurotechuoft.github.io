import React from 'react';
import './NavBar.scss';

import {Link} from 'react-router-dom';

import ntuoft_dark from '../../assets/neurotechuoft_dark.png'

function NavBar() {
    return(
      <div className="navbar">

        <img src={ntuoft_dark} alt="NeurotechUofT Logo"/>

        <Link to="/" exact>
          <h1>HOME</h1>
        </Link>

        <Link>
          <h1>TEAM</h1>
        </Link>

        <Link to="/initiatives">
          <h1>INITIATIVES</h1>
        </Link>

        <Link>
        <h1>EVENTS</h1>
        </Link>

        <Link>
        <h1>FAQ</h1>
        </Link>

      </div>
    )
}

export default NavBar;
