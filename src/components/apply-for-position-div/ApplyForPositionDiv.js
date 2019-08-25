import React from 'react';
import {Helmet} from 'react-helmet';

import './ApplyForPositionDiv.scss';

import collapseList from './collapseList';

function ApplyForPostionDiv() {

  return(
    <div className="apply-for-position-div">
      <Helmet>
        <title>Opportunities | NeurotechUofT</title>
      </Helmet>

      <h1>OPPORTUNITIES</h1>
      <div className="available-positions">

        <div className="executive-positions">
          <h1>Executive Positions</h1>
          <h3>First years and up :)</h3>
          <h3><b>Due:</b> ongoing</h3>
          <h4>(rolling interviews)</h4>
          {collapseList[0]}
          {collapseList[1]}
          {collapseList[2]}
          {collapseList[3]}
          {collapseList[4]}
          {collapseList[5]}
          {collapseList[6]}
          <h2>Workshops</h2>
          <p>
          Development of a two-coures series aimed at helping people with
          no experience to learn BCI develpment.
          </p>
          <p>
          <b>Topics:</b> neuroscience, physiology, software development,
          cognitive sciences, psychology, analog electronics
          </p>
          {collapseList[7]}
          {collapseList[8]}
        </div>

        <div className="advanced-project-positions">
          <h1>Advanced Project Positions</h1>
          <h3>First years and up :)</h3>
          <h3><b>Due:</b> ongoing</h3>
          <h4>(rolling interviews)</h4>
          <h2>Neurostack + EEG Research</h2>
          <p>
          Development of brain-wave analysis algorithms, and real-time
          EEG ML cloud services for all our projects.
          </p>
          <p>
          We are looking for one technical co-lead, and one neuroscience / physiology co-lead.
          </p>
          {collapseList[9]}
          {collapseList[10]}
          {collapseList[11]}
          {collapseList[12]}
          <h2>Headset and EEG Acquisition</h2>
          <p>Making our own EEG headset</p>
          {collapseList[13]}
          {collapseList[14]}
          {collapseList[15]}
          {collapseList[16]}
          <h2>WallEEG</h2>
          <p>Mind-controlled drone and prosthetic arm</p>
          {collapseList[17]}
          {collapseList[18]}
          {collapseList[19]}
          {collapseList[20]}
          {collapseList[21]}
          {collapseList[22]}
          {collapseList[23]}
          {collapseList[24]}
          <h2>MindType</h2>
          <p>Mind-controlled keyboard</p>
          {collapseList[25]}
          {collapseList[26]}
          {collapseList[27]}
          {collapseList[28]}
        </div>

      </div>
    </div>
  )
}

export default ApplyForPostionDiv;
