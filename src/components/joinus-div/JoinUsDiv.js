import React from 'react';
import './JoinUsDiv.scss'

function JoinUsDiv() {
  return(
    <div className="joinus-div">
      <h1>Join Us!</h1>
      <div className="steps-to-join">
        <div className="step step1">
          <h2>Step 1</h2>
          <button>Tell us who you are :)</button>
        </div>
        <div className="step step2">
          <h2>Step 2</h2>
          <button>Join our community!</button>
        </div>
        <div className="step step3">
          <h2>Step 3</h2>
          <button>Read a comic :D</button>
        </div>
      </div>
      <h3>(Help drive undergrad neurotech innovation by joining one of our teams :D)</h3>
    </div>
  )
}

export default JoinUsDiv;
