import React from 'react';
import {Link} from 'react-router-dom';

import './Sidebar.scss';

function Sidebar() {
  return(
    <div className="sidebar">
      <p>About</p>
      <p>Getting Started</p>
      <p>Tutorial</p>
      <p>WebSocket API</p>
      <p>generate_uuid</p>
      <p>predict</p>
      <p>train</p>
      <p>Support</p>
    </div>
  )
}

export default Sidebar;
