import React from 'react';
import './Sponsors.scss';

import ece_uoft from './../../assets/sponsors/ece-uoft.png'
import ibbme_uoft from './../../assets/sponsors/ibbme-uoft.png'
import interaxon from './../../assets/sponsors/interaxon.png'
import neurosky from './../../assets/sponsors/neurosky.png'
import neurotechx from './../../assets/sponsors/neurotechx.png'
import openbci from './../../assets/sponsors/openbci.png'
import skule_uoft from './../../assets/sponsors/skule-uoft.png'
import yncn from './../../assets/sponsors/yncn.png'

function Sponsors() {
    return(
        // <!--~~~~~~~~~~~~~~~~~~~~~~~~PARTNERS~~~~~~~~~~~~~~~~~~~~~~~~-->
        <div className="Sponsors">
            <h1 class="text-center title-padding">OUR PARTNERS</h1>
            <div class="row align-items-center">
                {/* <!-- IBBME --> */}
                <div class="col-md-1 col-sm-1 col-xs-5"></div>
                <div class="col-md-4 col-sm-4 col-xs-5">
                    <a href="https://ibbme.utoronto.ca/">
                        <img src={ibbme_uoft} class="img-fluid sponsor-img" alt="IBBME @UofT"></img>
                    </a>
                </div>

                {/* <!-- NeurotechX --> */}
                <div class="col-md-2 col-sm-2 col-xs-5">
                    <a href="http://neurotechx.com/">
                        <img src={neurotechx} class="img-fluid sponsor-img" alt="NeurotechX"></img>
                    </a>
                </div>
    
                {/* <!-- ECE --> */}
                <div class="col-md-4 col-sm-4 col-xs-5">
                    <a href="https://www.ece.utoronto.ca">
                        <img src={ece_uoft} class="img-fluid sponsor-img" alt="ECE @UofT"></img>
                    </a>
                </div>
            </div>
            <div class="row row-align-cols-center">
                <div class="col-md-3 col-sm-1 col-xs-5"></div>

                {/* <!-- InteraXon --> */}
                <div class="col-md-3 col-sm-3 col-xs-5">
                    <a href="http://www.choosemuse.com/">
                        <img src={interaxon} class="img-fluid sponsor-img" alt="InteraXon"></img>
                    </a>
                </div>
    
                {/* <!-- OpenBCI --> */}
                <div class="col-md-3 col-sm-3 col-xs-5">
                    <a href="http://openbci.com/">
                        <img src={openbci} class="img-fluid sponsor-img" alt="OpenBCI"></img>
                    </a>
                </div>
            </div>
            <div class="row row-align-cols-center">
                <div class="col-md-3 col-sm-3 col-xs-5"></div>
                {/* <!-- NeuroSky --> */}
                <div class="col-md-2 col-sm-2 col-xs-5">
                    <a href="http://neurosky.com/">
                        <img src={neurosky} class="img-fluid sponsor-img" alt="NeuroSky"></img>
                    </a>
                </div>
                {/* <!-- Skule --> */}
                <div class="col-md-2 col-sm-2 col-xs-5">
                    <a href="http://skule.ca">
                        <img src={skule_uoft} class="img-fluid sponsor-img" alt="Skule @UofT"></img>
                    </a>
                </div>
    
                {/* <!-- YNCN --> */}
                <div class="col-md-2 col-sm-2 col-xs-5">
                    <a href="https://yourenext.ca/">
                        <img src={yncn} class="img-fluid sponsor-img" alt="Your Next Career Network"></img>
                    </a>
                </div>
            </div>
    
            {/* <br>&nbsp;</br> */}
            
            <div class="row align-items-center">
                <div class="col-md-12 col-sm-12">
                    <h3 class="text-center">Interested in a collaboration?</h3>
                    <h3><a href="../../assets/NeurotechUofT-Sponsorship.pdf">
                            Find out how we can work together here
                        </a></h3>
                </div>
                
            </div>
        </div>
    )
}

export default Sponsors;
