import React from 'react';
import {Helmet} from 'react-helmet';

import './InitiativesDiv.scss';

import NinjaEvolution from '../ninja-div/NinjaEvolution';

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function InitiativesDiv() {
  return (
    <div>
      <div className="initiatives-div">
        <Helmet>
          <title>Initiatives | NeurotechUofT</title>
        </Helmet>

        <NavBar/>
        
        <h1>INITIATIVES</h1>
        <NinjaEvolution/>

      </div>

      <LinksBar/>
      
    </div>

  )
}

export default InitiativesDiv;
