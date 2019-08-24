import React from 'react';

import HelloDiv from '../hello-div/HelloDiv';
import JoinUsDiv from '../joinus-div/JoinUsDiv';
import NinjaDiv from '../ninja-div/NinjaDiv';
import OpportunitiesDiv from '../opportunities-div/OpportunitiesDiv';

import { Helmet } from 'react-helmet';

function JoinPage() {
  return (
    <div>
      <Helmet>
        <title>Join | NeurotechUofT</title>
      </Helmet>
      
      <HelloDiv/>
      <JoinUsDiv/>
      <NinjaDiv/>
      <OpportunitiesDiv/>
    </div>
  );
}

export default JoinPage;
