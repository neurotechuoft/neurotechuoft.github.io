import React from 'react';
import {Link} from 'react-router-dom';

import tadpole from '../../assets/journey-of-member/tadpole.png'
import padawan from '../../assets/journey-of-member/padawan.png'
import ninja from '../../assets/journey-of-member/ninja.png'

function NinjaEvolution() {
  return(
    <div className="evolution">

      <div className="evolstage tadpole">
        <img src={tadpole} alt="Neurotech Tadpole"/>
        <h1>{"Tadpole"}</h1>
        <h3>{"Knowledge: 1st year —"}</h3>
        <div className="ninja-btn">
          <Link to="/workshops" className="ninja-btn-link">Workshops</Link>
        </div>
        <p>
        Begin your journey by making your first neurotech app! Learn to build your
        first circuits, program your first Arduinos, and learn the fundamentals of
        BCI design. <b>Our next round of workshops starts in January 2019</b>,
        so make sure to keep an eye out for them!
        </p>
      </div>

      <div className="evolstage padawan">
        <img src={padawan} alt="Neurotech Padawan"/>
        <h1>{"Padawan"}</h1>
        <h3>{"Knowledge: 2nd year —"}</h3>
        <div className="ninja-btn">
          <Link className="ninja-btn-link">Cortical Apps</Link>
        </div>
        <p>
        Start applying your neurotech skills to real projects! Work on feature development
        for existing projects, or make your own with our Cortical Apps Project Incubator.
        </p>
      </div>

      <div className="evolstage ninja">
        <img src={ninja} alt="Neurotech Ninja"/>
        <h1>{"Ninja"}</h1>
        <h3>{"Knowledge: 3rd year —"}</h3>
        <div className="ninja-btn">
          <Link className="ninja-btn-link">Advanced Projects</Link>
        </div>
        <p>
        Work on our most advanced research and product development initiatives,
        and join our competition teams!
        </p>
      </div>

    </div>
  )
}

export default NinjaEvolution;
