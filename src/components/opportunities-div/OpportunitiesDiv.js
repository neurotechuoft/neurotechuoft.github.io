import React from 'react';
import './OpportunitiesDiv.scss';

import {Link} from 'react-router-dom';

function OpportunitiesDiv() {
  return(
    <div className="opportunities-div">
      <h1>Opportunities</h1>
      <div className="positions">
        <h3>Outreach Associate</h3>
        <h3>Workshops Director</h3>
        <h3>Edge Computing Engineer (WallEEG)</h3>
        <h3>Vlog Editor</h3>
        <h3>Cloud Machine Learning Reasercher</h3>
        <h3>VR / AR Developer (WallEEG)</h3>
        <h3 className="last-position">UX Designer (Headset)</h3>
      </div>
      <Link to="/opportunities">Apply for a position</Link>
    </div>

  )
}

export default OpportunitiesDiv;
