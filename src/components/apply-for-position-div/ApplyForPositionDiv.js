import React from 'react';
import {Helmet} from 'react-helmet';

import './ApplyForPositionDiv.scss';

import {positionsList, projectsList} from './collapseList';

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function ApplyForPostionDiv() {

  return(
    <div>
      <div className="apply-for-position-div">
        <Helmet>
          <title>Opportunities | NeurotechUofT</title>
        </Helmet>

        <NavBar/>

        <h1>OPPORTUNITIES</h1>
        <div className="available-positions">

          <div className="executive-positions">
            <h1>Executive Positions</h1>
            <h3>First years and up :)</h3>
            <h3><b>Due:</b> Rolling application</h3>
            <h4>(interviews are first-come first-serve)</h4>
            {positionsList[0]}
            {positionsList[1]}
            {positionsList[2]}
            {positionsList[3]}
            {positionsList[4]}
            {positionsList[5]}
            {positionsList[6]}
            {positionsList[35]}
            <h2>Workshops</h2>
            <p>
            Development of a two-coures series aimed at helping people with
            no experience to learn BCI develpment.
            </p>
            <p>
            <b>Topics:</b> machine learning, neuroscience, physiology, software development,
            cognitive sciences, psychology, analog electronics
            </p>
            {positionsList[7]}
            {positionsList[8]}
          </div>

          <div className="advanced-project-positions">
            <h1>Advanced Project Positions</h1>
            <h3>Second years and up :)</h3>
            <h3><b>Due:</b> Rolling application</h3>
            <h4>(interviews are first-come first-serve)</h4>
            {/* {positionsList[34]}
            {projectsList[0]}
            {projectsList[1]}
            {projectsList[2]}
            {projectsList[3]}
            {projectsList[4]} */}
            {projectsList[5]}
          </div>
        </div>

      </div>

      <LinksBar/>
      
    </div>
    
  )
}

export default ApplyForPostionDiv;
