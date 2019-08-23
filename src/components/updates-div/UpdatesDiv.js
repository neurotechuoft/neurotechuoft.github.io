import React from 'react';
import updatesList from './updatesList';

import '../updates-resources-div/UpdatesResourcesDiv.scss';

function UpdatesDiv() {
  return(
    <div className='updates-resources-div'>

      <div className="updates updates-full">
        {updatesList}
      </div>
    </div>
  )
}

export default UpdatesDiv;
