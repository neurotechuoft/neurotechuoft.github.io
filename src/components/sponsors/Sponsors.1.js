import React from 'react';
import {Row, Col, Image} from 'react-bootstrap'
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
            <Row id="sponsors">
                {/* <br>&nbsp;</br> */}
                <h1 align="center">OUR PARTNERS</h1>
                {/* <br>&nbsp;</br> */}
                <Row class="row-align-cols-center">
                    {/* <!-- IBBME --> */}
                    <Col md={4} sm={4} xs={5}>
                        <a href="https://ibbme.utoronto.ca/">
                            <Image src={ibbme_uoft} class="sponsor-img center-block" alt="IBBME @UofT"></Image>
                        </a>
                    </Col>

                    {/* <!-- NeurotechX --> */}
                    <Col md={2} sm={2} xs={5}>
                        <a href="http://neurotechx.com/">
                            <img src={neurotechx} class="sponsor-img img img-responsive center-block" alt="NeurotechX"></img>
                        </a>
                    </Col>

                    {/* <!-- ECE --> */}
                    <Col md={4} sm={4} xs={5}>
                        <a href="https://www.ece.utoronto.ca">
                            <img src={ece_uoft} class="sponsor-img img img-responsive center-block" alt="ECE @UofT"></img>
                        </a>
                    </Col>
                </Row>
                <Row class="row-align-cols-center">
                    {/* <!-- University of Toronto --> */}
        
                    {/* <!-- InteraXon --> */}
                    <Col md={3} sm={3} xs={5}>
                        <a href="http://www.choosemuse.com/">
                            <img src={interaxon} class="sponsor-img img img-responsive center-block" alt="InteraXon"></img>
                        </a>
                    </Col>

                    {/* <!-- OpenBCI --> */}
                    <Col md={3} sm={3} xs={5}>
                        <a href="http://openbci.com/">
                            <img src={openbci} class="img img-responsive center-block" alt="OpenBCI"></img>
                        </a>
                    </Col>
                </Row>
                <Row class="row-align-cols-center">
                    {/* <!-- NeuroSky --> */}
                    <Col md={2} sm={2} xs={5}>
                        <a href="http://neurosky.com/">
                            <img src={neurosky} class="img img-responsive center-block" alt="NeuroSky"></img>
                        </a>
                    </Col>
                    {/* <!-- Skule --> */}
                    <Col md={2} sm={2} xs={5}>
                        <a href="http://skule.ca">
                            <img src={skule_uoft} class="sponsor-img img img-responsive center-block" alt="Skule @UofT"></img>
                        </a>
                    </Col>

                    {/* <!-- YNCN --> */}
                    <Col md={2} sm={2} xs={5}>
                        <a href="https://yourenext.ca/">
                            <img src={yncn} class="img img-responsive center-block" alt="Your Next Career Network"></img>
                        </a>
                    </Col>
                </Row>

                {/* <br>&nbsp;</br> */}

                <Row class="text-center">
                    <h3>(Interested in a collaboration?
                        <a href="../../assets/NeurotechUofT-Sponsorship.pdf">
                            Find out how we can work together here
                        </a>)
                    </h3>
                </Row>
            </Row>
        </div>
    )
}

export default Sponsors;
