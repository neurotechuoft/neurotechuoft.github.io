import React from 'react';
import './NavBar.scss';

import ntuoft_dark from '../../../assets/neurotechuoft_dark.png'

function NavBar() {
    return(
        <div className="navbar">

          <img src={ntuoft_dark} alt="NeurotechUofT Logo"/>

          <button>HOME</button>
          <button>TEAM</button>
          <button>INITIATIVES</button>
          <button>EVENTS</button>
          <button>FAQ</button>

        </div>
    )
}

export default NavBar;
