import React from 'react';
import './App.scss';

import LinksBar from '../links-bar/LinksBar';
import Sponsors from '../sponsors/Sponsors';
import LandingDiv from '../landing-div/LandingDiv';
import NinjaDiv from '../ninja-div/NinjaDiv';
import JoinUsDiv from '../joinus-div/JoinUsDiv';
import CurrProjDiv from '../currproj-div/CurrProjDiv';
import OpportunitiesDiv from '../opportunities-div/OpportunitiesDiv';

function App() {
  return (
    <div className="App">
      <LandingDiv/>
      <NinjaDiv/>
      <JoinUsDiv/>
      <CurrProjDiv/>
      <OpportunitiesDiv/>
      <Sponsors/>
      <LinksBar/>
    </div>
  );
}

export default App;
