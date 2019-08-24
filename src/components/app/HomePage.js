import React from 'react';
import {Helmet} from 'react-helmet';

import Sponsors from '../sponsors/Sponsors';
import LandingDiv from '../landing-div/LandingDiv';
import NinjaDiv from '../ninja-div/NinjaDiv';
import JoinUsDiv from '../joinus-div/JoinUsDiv';
import CurrProjDiv from '../currproj-div/CurrProjDiv';
import OpportunitiesDiv from '../opportunities-div/OpportunitiesDiv';
import UpdatesResourcesDiv from '../updates-resources-div/UpdatesResourcesDiv';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>NeurotechUofT</title>
      </Helmet>

      <LandingDiv/>
      <NinjaDiv/>
      <JoinUsDiv/>
      <CurrProjDiv/>
      <OpportunitiesDiv/>
      <UpdatesResourcesDiv/>
      <Sponsors/>
    </div>
  );
}

export default HomePage;
