import React from 'react';
import {Helmet} from 'react-helmet';

import updatesList from './updatesList';

import '../updates-resources-div/UpdatesResourcesDiv.scss';

function UpdatesDiv() {
  return(
    <div className='updates-resources-div'>
      <Helmet>
        <title>Updates | NeurotechUofT</title>
      </Helmet>

      <div className="updates updates-full">
        {updatesList}
      </div>
    </div>
  )
}

export default UpdatesDiv;
