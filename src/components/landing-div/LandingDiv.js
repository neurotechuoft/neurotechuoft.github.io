import React from 'react';
import './LandingDiv.scss'

import {Link} from 'react-router-dom';

function LandingDiv() {
    return(
        <div className="landing-div">

            <h1 id="landing-header">
              Driving neurotech innovation at the University of Toronto
            </h1>

            <h2 id="landing-subheader">
              Supporting student-run research and development, providing resources for those
              interested in learning about neurotech, and sharing ideas with like-minded individuals
            </h2>

            <Link to="/join">Join us</Link>
        </div>
    )
}

export default LandingDiv;
