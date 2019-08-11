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

function Sponsors() {
    return(
        <div className="sponsors">
          <h1>OUR PARTNERS</h1>

            <div className="sponsor-images">
              <img src={ibbme_uoft} alt="Institute of Biomaterials & Biomedical Engineering UofT" id="ibbme_uoft"/>
              <img src={neurotechx} alt="NeurotechX" id="neurotechx"/>
              <img src={ece_uoft} alt="Department of Electrical & Computer Engineering UofT" id="ece_uoft"/>
              <img src={interaxon} alt="Interaxon MUSE" id="interaxon"/>
              <img src={pizza} alt="PizzaPizza" id="pizza"/>
              <img src={openbci} alt="OpenBCI" id="openbci"/>
              <img src={neurosky} alt="NeuroSky" id="neurosky"/>
              <img src={skule_uoft} alt="Skule UofT" id="skule_uoft"/>
              <img src={yncn} alt="YNCN" id="yncn"/>
            </div>

          <h3>
            (Interested in a collaboration? <a href="../../assets/NeurotechUofT-Sponsorship.pdf">
                                              Find out how we can work together here
                                            </a>)
          </h3>

        </div>
    )
}

export default Sponsors;
