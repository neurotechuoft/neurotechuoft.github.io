import React from 'react';
import {Helmet} from 'react-helmet';

import './WorkshopsDiv.scss';

function WorkshopsDiv() {
  return(
    <div className="workshops-div">
      <Helmet>
        <title>Workshops | NeurotechUofT</title>
      </Helmet>
      <h1>Workshops</h1>
      <p>
      Begin your journey by making your first neurotech app! Learn to build your
      first circuits, program your first Arduinos, and learn the fundamentals of
      BCI design. <b>Our next round of workshops starts in January 2019</b>,
      so make sure to keep an eye out for them!
      </p>
    </div>
  )
}

export default WorkshopsDiv;
