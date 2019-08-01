import React from 'react';
import './LandingDiv.scss'

import NavBar from '../nav-bar/NavBar';
import Header from './Header';
import Subheader from './Subheader';
import Button from './Button';

function LandingDiv() {
    return(
        <div className="landing-div">
            <NavBar/>
            <Header/>
            <Subheader/>
            <Button/>
        </div>
    )
}

export default LandingDiv;
