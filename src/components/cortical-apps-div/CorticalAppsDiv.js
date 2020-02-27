import React from 'react';
import {Helmet} from 'react-helmet';

import './CorticalAppsDiv.scss';

import corticalapps from '../../assets/ntuoft-cortical-apps-cover.png'
import ninja from '../../assets/journey-of-member/ninja.png'
import slack from '../../assets/slack-selected-assets/slack_monochrome_white.png'

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function CorticalAppsDiv() {
  return(
    <div>
      
      <NavBar/>

      <div className="cortical-apps-div">
        <Helmet>
          <title>Cortical Apps | NeurotechUofT</title>
        </Helmet>
        
        <img src={corticalapps} alt="NeurotechUofT Cortical Apps Cover"/>
        <h1>Make an epic neurotech idea, and bring it to life</h1>

        <div className="idea-making">
          <h1>PART 1: IDEA MAKING</h1>
          <p>
          Meet fellow neurotech enthusiasts, make teams of 3-4, and come up with an
          awesome neurotech project! Our challenge to you is to come up with a simple,
          yet meaningful (to you :) ) idea that can be completed in a semester. Our
          mentors will be there to help you with the tech and neuro stuff, so let
          your imaginations fly!
          </p>
        </div>

        <div className="steps-to-idea">
          <div>
            <h2>Step 1: Think of an idea</h2>
            <p>Saturday Feb 10, 5--8PM: OISE 3311</p>
            <p>Sunday Feb 11, 5--8PM: OISE 5150</p>

            <h2>Step 2: Get advice from mentors</h2>
            <p>Tuesday Feb 13, 6--9PM: BF 315</p>

            <h2>Step 3: Pitch time!</h2>
            <p>Sunday Feb 18, 3--5PM: OISE 3311</p>
          </div>

          <div>
            <h1>Simple.</h1>
            <h2>Follow your passions.</h2>
            <h2>It does <b>not</b> have to be 'useful'!</h2>
            <h2>A team of 3 can finish project in a semester</h2>
          </div>
        </div>

        <div className="brain-hacking">
          <h1>PART 2: BRAIN HACKING</h1>
          <p>
          Congrats, you have an epic idea! Make it come to life in a semester with
          your team :D . We'll meet up every week to hack away at our ideas.
          More info coming soon.
          </p>
        </div>

        <div className="dev-time">
          <div>
            <h1>~5 hours dev time per week</h1>
            <h2>Weekly 2 hour hack session</h2>
            <h2>2-4 hours of your own time</h2>
          </div>

          <img src={ninja} alt="Neurotech Ninja"/>
        </div>

        <div className="cortical-div-btns">

            <a href="http://bit.ly/cortical-apps-participate">Join</a>

            <a href="https://1drv.ms/w/s!AsCan96xnCd9xRVaqkqkyujNXzFR">Participation Details</a>

            <a href="https://join.slack.com/t/ntuoft-cortical-apps/shared_invite/enQtMzEyNzk2ODQzNjY0LWVhMGI2YTJkN2ExMWEyZTEzZGU4MzY0MjRjOWE3YmI3MzEzMGUzNjU2NGU4MGFlYWMzYWY2MGQ0OGM4YjBkYjM">
              <img src={slack} alt="Slack"/>
            </a>

        </div>

      </div>

      <LinksBar/>

    </div>
    
  )
}

export default CorticalAppsDiv;
