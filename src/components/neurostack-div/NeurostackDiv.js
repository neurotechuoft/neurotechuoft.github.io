import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import './NeurostackDiv.scss';

import innovationplan from '../../assets/NTUofT-Innovation-Plan.png'

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function NeurostackDiv() {
  return(
    <div className="neurostack-div">
      <Helmet>
        <title>Neurostack | NeurotechUofT</title>
      </Helmet>

      <NavBar/>
      
      <img src={innovationplan} alt="NeurotechUofT Cortical Apps Cover"/>
      <p>
          NeurotechUofT is currently working on Neurostack, an open-source real-time
          EEG processing service on the cloud. The goal behind Neurostack is to develop
          a tool that allows users to easily create neurotech applications, by taking
          and processing data from EEG headsets. In the past year, we created the
          infrastructure behind Neurostack, added a service that detected P300 brain
          waves, and added support for the Muse headset. We are currently working on
          supporting OpenBCI devices, and detecting two other types of brain waves:
          motor cortex alpha and motor imagery. Since several other projects from
          NeurotechUofT require real-time EEG processing, we have been and will
          continue to work with other teams to integrate Neurostack into their
          projects.
      </p>

        <a href="https://github.com/neurotechuoft/Neurostack">
            Follow this link to the Neurostack github, documentation and API :)
        </a>
        <Link to="/neurostack/docs">View Docs here</Link>

        <LinksBar/>

    </div>
  )
}

export default NeurostackDiv;
