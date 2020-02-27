import React from 'react';

import HelloDiv from '../hello-div/HelloDiv';
import JoinUsDiv from '../joinus-div/JoinUsDiv';
import NinjaDiv from '../ninja-div/NinjaDiv';
import OpportunitiesDiv from '../opportunities-div/OpportunitiesDiv';

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

import { Helmet } from 'react-helmet';

function JoinPage() {
  return (
    <div>
      <Helmet>
        <title>Join | NeurotechUofT</title>
      </Helmet>

      <NavBar/>
      
      <HelloDiv/>
      <JoinUsDiv/>
      <NinjaDiv/>
      <OpportunitiesDiv/>

      <LinksBar/>

    </div>
  );
}

export default JoinPage;
