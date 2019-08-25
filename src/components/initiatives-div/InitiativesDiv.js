import React from 'react';
import {Helmet} from 'react-helmet';

import './InitiativesDiv.scss';

import NinjaEvolution from '../ninja-div/NinjaEvolution';

function InitiativesDiv() {
  return (
    <div className="initiatives-div">
      <Helmet>
        <title>Initiatives | NeurotechUofT</title>
      </Helmet>
      <h1>INITIATIVES</h1>
      <NinjaEvolution/>
    </div>
  )
}

export default InitiativesDiv;
