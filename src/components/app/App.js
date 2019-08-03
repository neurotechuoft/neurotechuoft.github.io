import React from 'react';
import './App.scss';

import LinksBar from '../links-bar/LinksBar';
import Sponsors from '../sponsors/Sponsors';
import LandingDiv from '../landing-div/LandingDiv';
import NinjaDiv from '../ninja-div/NinjaDiv';
import JoinUsDiv from '../joinus-div/JoinUsDiv';
import CurrProjDiv from '../currproj-div/CurrProjDiv';

function App() {
  return (
    <div className="App">
      <LandingDiv/>
      <NinjaDiv/>
      <JoinUsDiv/>
      <CurrProjDiv/>
      {/*<Sponsors></Sponsors>*/}
      <LinksBar></LinksBar>
    </div>
  );
}

export default App;
