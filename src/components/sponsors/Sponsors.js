import React from 'react';
import './Sponsors.scss';

import ibbme_uoft from './../../assets/sponsors/ibbme-uoft.png'
import neurotechx from './../../assets/sponsors/neurotechx.png'
import ece_uoft from './../../assets/sponsors/ece-uoft.png'
import interaxon from './../../assets/sponsors/interaxon.png'
import pizza from './../../assets/sponsors/pizza_pizza.png'
import openbci from './../../assets/sponsors/openbci.png'
import neurosky from './../../assets/sponsors/neurosky.png'
import skule_uoft from './../../assets/sponsors/skule-uoft.png'
import yncn from './../../assets/sponsors/yncn.png'

import sponsorship_pdf from "./../../assets/NeurotechUofT-Sponsorship.pdf"

function Sponsors() {
    return(
        <div className="sponsors">
          <h1>OUR PARTNERS</h1>

            <div className="sponsor-images">

              <a href="https://ibbme.utoronto.ca/">
                <img src={ibbme_uoft} alt="Institute of Biomaterials & Biomedical Engineering UofT" id="ibbme_uoft"/>
              </a>

              <a href="http://neurotechx.com/">
                <img src={neurotechx} alt="NeurotechX" id="neurotechx"/>
              </a>

              <a href="https://www.ece.utoronto.ca/">
                <img src={ece_uoft} alt="Department of Electrical & Computer Engineering UofT" id="ece_uoft"/>
              </a>

              <a href="http://www.choosemuse.com/">
                <img src={interaxon} alt="Interaxon MUSE" id="interaxon"/>
              </a>

              <a href="https://www.pizzapizza.ca/">
                <img src={pizza} alt="PizzaPizza" id="pizza"/>
              </a>

              <a href="http://openbci.com/">
                <img src={openbci} alt="OpenBCI" id="openbci"/>
              </a>

              <a href="http://neurosky.com/">
                <img src={neurosky} alt="NeuroSky" id="neurosky"/>
              </a>

              <a href="http://skule.ca/">
                <img src={skule_uoft} alt="Skule UofT" id="skule_uoft"/>
              </a>

              <a href="https://yourenext.ca/">
                <img src={yncn} alt="YNCN" id="yncn"/>
              </a>

            </div>

          <h3>
            (Interested in a collaboration? <a href={sponsorship_pdf}>
                                              Find out how we can work together here
                                            </a>)
          </h3>

        </div>
    )
}

export default Sponsors;
