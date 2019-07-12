import React from 'react';
import './LandingDiv.scss'

import NavBar from '../nav-bar/NavBar';

function LandingDiv() {
    return(
        <div className="LandingDiv">
            <NavBar></NavBar>
            {/* <!--Description--> */}
            <div class="row text-center landing-text"> 
            {/* <!--header--> */}
                Driving neurotech innovation at the University of Toronto
            </div>
            <div class="row text-center landing-subtext"> 
            {/* <!--subtext--> */}
                Supporting student-run research and development, providing resources for those interested in learning about neurotech, and sharing ideas with like-minded individuals
            </div>

            <div class="row landing-btn-div">
                <a class="btn btn-primary landing-btn justify-content-center" href="join.html" role="button">Join us</a>
            </div>
        </div>
    )
}

export default LandingDiv;