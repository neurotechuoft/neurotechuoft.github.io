import React from 'react';
import './UpdatesResourcesDiv.scss';

import Collapsable from '../collapsable/Collapsable';
import {Link} from 'react-router-dom';

import updatesList from '../updates-div/updatesList';

const resourcesTrigger = (
  <h1>Resources</h1>
)

const resourcesCollapsing = (
  <p>
    (More will be coming soon, as we find new resources.
      If you have any resources you think are useful,
      email us <a href="ask@neurotechuoft.com"> ask@neurotechuoft.com </a>
      and we'll be happy to look at it!)
  </p>
)

const programmingTrigger = (
  <h3>Programming</h3>
)

const programmingCollapsing = (
  <ul>
    <li>Git Version Control: <a href="http://learngitbranching.js.org/">LearnGitBranching</a></li>

    <li>Coding for Beginners: <a href="https://codecombat.com/">CodeCombat</a></li>

    <li>Coding Puzzles (all levels of expertise): <a href="https://open.kattis.com/">Kattis</a></li>

    <li>Android Development: <a href="https://www.thenewboston.com/videos.php?cat=278">TheNewBoston — Android App Development</a></li>

    <li>iOS Development: <a href="https://www.thenewboston.com/videos.php?cat=280">TheNewBoston — iOS App Development with Swift</a></li>
  </ul>
)

const neurotechnologyTrigger = (
  <h3>Neurotechnology</h3>
)

const neurotechnologyCollapsing = (
  <p>
  Intro to BCI Design: <a href="https://sccn.ucsd.edu/wiki/Introduction_To_Modern_Brain-Computer_Interface_Design"> Swartz
  Center for Computational Neuroscience: Introduction To Modern Brain-Computer Interface Design</a>
  </p>
)

function UpdatesResourcesDiv() {

  return(
    <div className='updates-resources-div'>

      <div className="updates">
        <Link to="/updates">Updates</Link>
        {updatesList[0]}
      </div>

      <div className="resources">
        <Collapsable trigger={resourcesTrigger} collapsing={resourcesCollapsing} expandHeight={15} />
        <div className="resource-buttons">
          <a href="https://neurotechx.github.io/studentclubs/competition/">NeuroTechX Student Competition</a>
          <a href="https://prezi.com/user/v1u3a0hqncba/">NeurotechUofT Prezis</a>
          <Collapsable trigger={programmingTrigger} collapsing={programmingCollapsing} expandHeight={0} />
          <Collapsable trigger={neurotechnologyTrigger} collapsing={neurotechnologyCollapsing} expandHeight={10}/>
        </div>
      </div>

    </div>
  )
}

export default UpdatesResourcesDiv;
