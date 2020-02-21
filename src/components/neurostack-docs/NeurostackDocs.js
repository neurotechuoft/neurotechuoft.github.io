import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import './NeurostackDocs.scss';
import Sidebar from './Sidebar';

function NeurostackDocs() {
  return(
    <div className="neurostack-docs">
      <Helmet>
        <title>Neurostack Docs</title>
      </Helmet>

      <Sidebar/>
      <div className="ns-docs-main">

        <div className="ns-docs-intro">
          <h1>Welcome to Neurostack!</h1>
          <p>Neurostack is an open-source real-time EEG processing service on the cloud.</p>
        </div>

        <div className="ns-docs-getting-started">
          <h2>Getting Started</h2>
        </div>

      </div>
    </div>
  )
}

export default NeurostackDocs;
