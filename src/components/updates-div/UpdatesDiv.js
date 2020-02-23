import React from 'react';
import {Helmet} from 'react-helmet';

import updatesList from './updatesList';

import '../updates-resources-div/UpdatesResourcesDiv.scss';

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function UpdatesDiv() {
  return(
    <div className='updates-resources-div'>
      <Helmet>
        <title>Updates | NeurotechUofT</title>
      </Helmet>

      <NavBar/>

      <div className="updates updates-full">
        {updatesList}
      </div>

      <LinksBar/>

    </div>
  )
}

export default UpdatesDiv;
