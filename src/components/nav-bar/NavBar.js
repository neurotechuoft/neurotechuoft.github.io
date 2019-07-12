import React from 'react'
import './NavBar.scss';

import ntuoft_dark from './../../assets/neurotechuoft_dark.png'

function NavBar() {
    return(
        <div className="NavBar">
            <div class="row">
                {/* <!-- Logo --> */}
                <div class="col-md-2 col-sm-2">
                    <img src={ntuoft_dark} class="img-fluid center-block nav_bar_logo" alt="NeurotechUofT Logo"></img>
                </div>

                {/* <!-- Nav Buttons --> */}
                <div class="col-md-2 col-sm-2 text-center">
                    <a href="index.html" role="button" class="btn btn-link nav-bar-btn ">HOME</a>
                </div>

                <div class="col-md-2 col-sm-2 text-center">
                    <a href="our-team.html" role="button" class="btn btn-link nav-bar-btn" href="our-team.html">TEAM</a>
                </div>

                <div class="col-md-2 col-sm-2 text-center">
                    <a href="initiatives.html" role="button" class="btn btn-link nav-bar-btn">INITIATIVES</a>
                </div>

                <div class="col-md-2 col-sm-2 text-center">
                    <a href="events.html" role="button" class="btn btn-link nav-bar-btn">EVENTS</a>
                </div>

                <div class="col-md-2 col-sm-2 text-center">
                    <a href="faq.html" role="button" class="btn btn-link nav-bar-btn">FAQ</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;