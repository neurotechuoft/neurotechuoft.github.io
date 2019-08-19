import React from 'react';
import './UpdatesResourcesDiv.scss';

import Collapsable from '../collapsable/Collapsable';

import man_thinking_hard from '../../assets/event-imgs/man_thinking_hard.jpg';
import happy_women from '../../assets/event-imgs/happy_women.jpg';
import serious_brain_presentation from '../../assets/event-imgs/serious_brain_presentation.jpg';

import {Link} from 'react-router-dom';

function UpdatesResourcesDiv() {

  const updatesTrigger = (
    <h3> March 6, 2018 </h3>
  )

  const updatesBody = (
    <div>
      <h4>TL;DR:</h4>
      <p>- <a href="http://bit.ly/ntuoft-nominate-exec">Nominate yourself</a> for Vice President, Operations by April 13th!</p>
      <p>- <a href="http://bit.ly/admin-team-apps-2018">Exec positions are out</a> and due April 13th! Project positions coming out soon :)</p>
      <p>- <a href="https://www.youtube.com/watch?v=Hnu5h7NjMVc">We submitted our work so far with MindType</a> to the NTX Student Clubs Competition!</p>
      <p>- Let's celebrate an epic year over some food and drinks; tentatively on April 28th 8:00pm!</p>
    </div>
  )

  const updatesCollapsing = (
    <div className="updates-collapsing">
      <p>Hey neurotech ninjas!</p>

      <p>
      First of all, thank you very much for making this year our most
      awesome year yet! Some super-cool things we did:
      </p>

      <ul>
        <li>
        Listened to Chris Aimone, the CTO of InteraXon talk about his
        incredible journey in making InteraXon at our Neuro Pathways:
        Bootstrap Your Neurotech Career event!
        </li>

        <li>
        Tried making a <a href="https://www.youtube.com/watch?v=Hnu5h7NjMVc">mind-controlled keyboard</a>, and
        a <a href="https://github.com/neurotechuoft/Biosignals-Board">Rasberry Pi-based biosignals board</a> for
        the <a href="https://neurotechx.github.io/studentclubs/competition/">NTX Student Clubs Competition</a> (and
        won an EMOTIV Epoc for the participation prize :D)
        </li>

        <li>
        Learned about neuroeconomics with Dr. Ryan Webb at our
        NeurotechUofT Presents: Neuroeconomics event!
        </li>

        <li>
        Our <Link to="/initiatives">Tadpoles</Link> made their first EMG-based neurotech
        devices from scratch, with a side of Flappy Bird!
        </li>

        <li>
        Launched our <Link to="/cortical-apps">Cortical Apps project incubator</Link>
        </li>

        <li>
        Made our own EEG headset :D
        </li>
      </ul>

      <img className="thinking-man" src={man_thinking_hard} alt="A man thinks very passionately"/>
      <img src={happy_women} alt="Two happy women beam joyful smiles"/>
      <img src={serious_brain_presentation} alt="a man on stage conducts a narrates a serious presenation about the brain"/>

      <p>
      All this calls for a celebration! We're going to go for food and drinks
      to wash exam season away; right now we're thinking of going on April 28th
      at 8:00pm, but we'll update you with more details as we get them!
      </p>

      <p>
      We're also preparing NeurotechUofT to be ready to make stuff for
      the summer term! Some cool things we want to do:
      </p>

      <ul>
        <li>
        Set up a controlled experiment protocol to get motor imagery algs to work for MindType
        </li>

        <li>
        Start working on brainOS, a mind-controlled augmented reality OS :D
        </li>

        <li>
        Print high-quality PCBs to reduce noise in our biosignals board
        </li>

        <li>
        Solidify beginner neurotech workshops; make advanced workshops with
        How to Hack the Brain, with Coffee!
        </li>

        <li>
        (Anything else you guys want to do! Let us know :) )
        </li>
      </ul>

      <p>
      To do that, we're revamping our exec and project teams! We're
      <a href="http://bit.ly/ntuoft-nominate-exec"> accepting nominations for Vice President, Operations, </a>
      and have <a href="http://bit.ly/admin-team-apps-2018"> applications open for other exec roles! </a>
      These are due on April 13th at 11:59pm, so apply soon :O Project applications will come really soon :), so stay tuned!
      </p>

      <p>
      That's all for now; once again thank you for supporting us on our
      incredible journey in becoming epic neurotech ninjas! Get some rest,
      sleep well, and good luck on your exams!
      </p>

      <p>Cheers,</p>
      <p>Sayan Faraz</p>
      <p>NeurotechUofT</p>
      <br></br>
    </div>
  )

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

  return(
    <div className='updates-resources-div'>

      <div className="updates">
        <Link to="/updates">Updates</Link>
        <Collapsable trigger={updatesTrigger} body={updatesBody} collapsing={updatesCollapsing}/>
      </div>

      <div className="resources">
        <Collapsable trigger={resourcesTrigger} collapsing={resourcesCollapsing}/>
        <div className="resource-buttons">
          <a href="https://neurotechx.github.io/studentclubs/competition/">NeuroTechX Student Competition</a>
          <a href="https://prezi.com/user/v1u3a0hqncba/">NeurotechUofT Prezis</a>
          <Collapsable trigger={programmingTrigger} collapsing={programmingCollapsing}/>
          <Collapsable trigger={neurotechnologyTrigger} collapsing={neurotechnologyCollapsing}/>
        </div>
      </div>

    </div>
  )
}

export default UpdatesResourcesDiv;
