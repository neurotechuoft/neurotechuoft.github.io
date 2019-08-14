import React from 'react';
import './JoinUsDiv.scss'

import {Link} from 'react-router-dom';

function JoinUsDiv() {
  return(
    <div className="joinus-div">
      <h1>Join Us!</h1>

      <div className="steps-to-join">

        <div className="step step1">
          <h2>Step 1</h2>
          <a href="https://neurotechuoft.typeform.com/to/kj0egv">Tell us who you are :)</a>
        </div>

        <div className="step step2">
          <h2>Step 2</h2>
          <a href="https://www.facebook.com/groups/neurotechUofT/">Join our community!</a>
        </div>

        <div className="step step3">
          <h2>Step 3</h2>
          <a href="https://waitbutwhy.com/2017/04/neuralink.html">Read a comic :D</a>
        </div>

      </div>

      <Link className="drive-undergrad-research">(Help drive undergrad neurotech innovation by joining one of our teams :D)</Link>

    </div>
  )
}

export default JoinUsDiv;
