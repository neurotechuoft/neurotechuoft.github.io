import React from 'react';
import './App.scss';
import LinksBar from '../links-bar/LinksBar';
import Sponsors from '../sponsors/Sponsors';
import LandingDiv from '../landing-div/LandingDiv';

function App() {
  return (
    <div className="App">
      <LandingDiv></LandingDiv>
      {/*<Sponsors></Sponsors>
      <LinksBar></LinksBar>*/}
    </div>
  );
}

export default App;
