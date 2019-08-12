import React from 'react';
import './TeamDiv.scss';

import {Link} from 'react-router-dom';

function TeamDiv() {
  return(
    <div className="team-div">
      <div className="team-banner">
        <h1>TEAM</h1>
        <h3>
          (Want to be a part of our team?
          <Link><b> Apply here :)</b></Link> )
        </h3>
      </div>

    </div>
  )
}

export default TeamDiv;
