import React from 'react';
import './LandingDiv.scss'

import NavBar from './nav-bar/NavBar';

function LandingDiv() {
    return(
        <div className="landing-div">
            <NavBar/>

            <h1 id="landing-header">
              Driving neurotech innovation at the University of Toronto
            </h1>

            <h2 id="landing-subheader">
              Supporting student-run research and development, providing resources for those
              interested in learning about neurotech, and sharing ideas with like-minded individuals
            </h2>

            <button>Join us</button>
        </div>
    )
}

export default LandingDiv;
