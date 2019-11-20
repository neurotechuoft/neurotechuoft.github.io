import React from 'react';
import Collapsable from '../collapsable/Collapsable';
import { Link } from 'react-router-dom';

import man_thinking_hard from '../../assets/event-imgs/man_thinking_hard.jpg';
import happy_women from '../../assets/event-imgs/happy_women.jpg';
import serious_brain_presentation from '../../assets/event-imgs/serious_brain_presentation.jpg';

import constitution from "../../assets/NeurotechUofTConstitutionProposal.pdf";

const updatesList =
[
  [
    <h3> March 6, 2018 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- <a href="http://bit.ly/ntuoft-nominate-exec">Nominate yourself</a> for Vice President, Operations by April 13th!</p>
      <p>- <a href="http://bit.ly/admin-team-apps-2018">Exec positions are out</a> and due April 13th! Project positions coming out soon :)</p>
      <p>- <a href="https://www.youtube.com/watch?v=Hnu5h7NjMVc">We submitted our work so far with MindType</a> to the NTX Student Clubs Competition!</p>
      <p>- Let's celebrate an epic year over some food and drinks; tentatively on April 28th 8:00pm!</p>
    </div>,
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
  ],
  [
    <h3> February 3, 2018 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- Epic things happening with our projects and admin team</p>
      <p>- <a href={constitution}>Constitution proposal</a>: using UofT's CCR as our admin team's accountability platform</p>
      <p>- We're launching our new project incubator, <a href="https://www.facebook.com/events/377333412728082/">Cortical Apps</a> :D</p>
      <p>- <a href="https://www.facebook.com/events/545653732461108">General Meeting</a> this Monday (Feb 3rd) 6:00pm--8:00pm at ES4000!</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hey Neurotechers!!!</p>
      <p>We hope you had an awesome break, and an epic beginning of the Winter Semester!</p>
      <p>What we've been up to:</p>

      <ul>
        <li>Our <b>projects</b> are well on their way! We've expanded our project
        teams, and gearing things up for the NeurotechX Student Clubs Competition.</li>

        <li>We're learning about <b>hardware in our workshops!</b> The participants are
        almost ready to make their first neurotech device :D</li>

        <li>We're launching our <b>new project incubator</b>, <a href="https://www.facebook.com/events/377333412728082/">Cortical Apps!</a> Make
        a team and an epic idea, and bring it to life over the next semester!</li>

        <li>We're working to <b>make our admin team more efficient and accountable.</b>
        Our new <a href={constitution}>constitution proposal</a> will formalize our new accountability
        structure, which is based on UofT's CCR program.</li>
      </ul>

      <p>Find out more at our upcoming <a href="https://www.facebook.com/events/545653732461108">General Meeting</a>
      this Monday Feb. 5th from 6:00pm--8:00pm at ES4000, and hang out with your fellow neurotech ninjas
      over some snacks! We will vote on our constitution proposal as well.</p>

      <p>We hope to see you all soon!</p>

      <p>Until next time,</p>

      <p>The NeurotechUofT Team</p>
      <br></br>
    </div>
  ],
  [
    <h3> August 6, 2017 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- There has been lots of progress for Phase 1 and 2 (Mindtype)</p>
      <p>- Machine learning workshops have started!</p>
      <p>- The prototype for the first EMG workshop project has been planned and the design process has started</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hey guys,</p>

      <p>This week, all teams have been putting in work for their respective projects.
      The user interface has been completed for the P300 Speller and the Phase 1 team
      is continuing to work on classification with the addition of configuring the docker.
      Phase 2's progress has been steady; the data extraction and Fast Fourier Transform
      algorithms have been implemented. The next step will be polishing the training
      algorithm as well as acquiring better test data. Phase 3 has yet to be worked on.</p>

      <p>Workshops have recently commenced and the current focus is on Machine Learning.
      These are meant to help people learn and get hands on experience in a relaxed,
      fun environment. A project (using EMG) has already been planned and the prototype
      has been designed. There will be many other projects to come with the
      start of this school year!</p>

      <p>Until next time,</p>

      <p>The NeurotechUofT Team</p>
      <br></br>
    </div>
  ],
  [
    <h3> July 24, 2017 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- The entire Mindtype project structure and timeline was readjusted</p>
      <p>- We Will begin to start project videos</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hello again everyone!</p>

      <p>Since last time, we’ve been making changes to projects, planning and workspace.
      Mindtype will now be restructured into three phases, two of which are the
      P300 Speller and Binary Motor Classification. This will allow work to be
      done simultaneously on 3 different (but overlapping) projects, from which
      we will choose one to submit for the NeurotechX Student Clubs Competition.</p>

      <p>As of now, the Biosignals board team has begun finalizing the design of the
      PCB board and are aiming to combine the digital and software components of
      the project. We are currently aiming to gain access to more lab spaces and
      equipment from the engineering department.</p>

      <p>The process of creating our project videos has begun! We will be covering both
      the main projects (used in the NeurotechX Student Clubs Competition) and many
      other aspects of what progress we’ve reached this year. We’ve also started
      planning out what NeurotechUofT is going to do for the 2017-2018 year, so
      make sure to check us out at the Clubs Fair in the Fall!</p>

      <p>Until next time,</p>

      <p>The NeurotechUofT Team</p>
      <br></br>
    </div>
  ],
  [
    <h3> July 2, 2017 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- We presented the completed/working components of our Mindtype project at BrainBrowse on June 30</p>
      <p>- We are still currently working on both Mindtype and Biosignals Board</p>
      <p>- There will be a finalized project plan for EmotionLearn by Mid-July</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hey guys!</p>

      <p>We've ended last week presenting MindType at the BrainBrowse event with demos.
      MingZhi also presented her demo visualizing the brain’s activity in correspondence
      with EEG signal amplitudes during seizures. BrainBrowse (run in collaboration
      with NeurotechX and Toronto Hacker Club) aimed to increase high school
      students’ exposure to neurotechnology and neuroscience.</p>

      <p>All MindType and Biosignals Board project members have been and will
      continue working on their respective projects for the upcoming NeurotechX
      Student Clubs Competition. Mikael got our EEG Hat to work and stream data.
      The MindType team successfully implemented a multithreaded architecture,
      and are working to improve the LDA classifier’s accuracy. The Biosignals
      Board team booted up the ADS chip, and are working primarily with the
      OpenBCI to test their code.</p>

      <p>Plans are also underway for our second project, EmotionLearn. EmotionLearn
      is our long term project designed to use physiological effects of emotions
      and mind states (with corresponding EEG data) to improve learning processes
      for people with learning disabilities (such as ADHD).</p>

      <p>Additional note: We’re arranging a rock climbing excursion late July, so stay tuned!!!</p>

      <p>See you all next time!</p>

      <p>The NeurotechUofT Team</p>
      <br></br>
    </div>
  ],
  [
    <h3> March 12, 2017 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- Thank you to everyone who attended the NeurotechUofT Fair this past reading week!</p>
      <p>- The Biosignals Board team is back to work on the hardware challenge for the NeurotechX Student Competition</p>
      <p>- WallEEG: Using PyQt for GUI; started working on source localization</p>
      <p>- Our new tutorial series called How to Hack the Brain, with Coffee has been up and running for
      the past two weeks (see the Events page for time and location details)</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hello readers!</p>

      <p>We here at NeurotechUofT would like to extend a huge thank you to all of
      the attendees who made it to our fair this past reading week! It was a ton
      of fun to learn more about current innovations in neurotech through discussion
      and lectures from experts in the field. The club's ongoing projects are a
      perfect opportunity for further learning if any of you wish to do some more neuro-hacking.</p>

      <p>The Biosignals Board team is back to work on the hardware challenge for the
      NeurotechX Student Competition. The guidelines for this year's competition
      have been released and the project design is being developed further in
      preparation for it. The plan is to have the VitReous and WallEEG teams work
      out the non-hardware aspects of the project so that once the distinct parts
      are complete and bug-free, they can be merged, comprehensive tests can be
      made, and - time permitting - advanced features can be added.</p>

      <p>As for the Wall-EEG project, the team has decided on using a full Python
      implementation, with PyQt for the GUI. They have started working on source
      localizaton and understanding the LORETA algorithm, which will allow us
      to pinpoint signals from the premotor cortex. The next steps are to write
      a NumPy implementation of LORETA and further understand the machine learning
      aspect of the project.</p>

      <p>NeurotechUofT has recently launched a new tutorial series we call
      <Link to="">"How to Hack the Brain, with Coffee"</Link>.
      At our weekly meetups, we aim to explore how to pick up and analyze brain
      activity as measured by EEG signals - in short, how to hack your brain.
      For information regarding meeting time and location (and in case you have
      missed the first few meetings), click the link above! All of the material
      covered at each session is posted there.</p>

      <p>Until next time,</p>

      <p>Lidia Injac</p>
      <br></br>
    </div>
  ],
  [
    <h3> January 24, 2017 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- We will be presenting the VitReous project at the WeAreWearables conference on January 25th</p>
      <p>- There is an upcoming field trip to the IBBME Medical Imaging Lab on February 2nd</p>
      <p>- Our first neurotech conference will be held on February 23rd</p>
      <p>- We'll first be doing a trial run with a land-based bot before working on the aerial drone</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hello everyone!</p>

      <p>It has been a while since our last update, and with the arrival of 2017 comes
      a new and eventful term for us here at NeurotechUofT. There is a lot to share,
      so keep reading to get the latest team news!</p>

      <p>One event is rapidly approaching this week: the WeAreWearables conference
      held at the MaRS Discover District Centre! This Wednesday, January 25th, we
      will be there to present the VitReous project that was first introduced by
      our team at NeurotechX Student Demo Day this past November. This will be our
      first time attending and will mark the first year of many more to come! We
      can't wait to mix and mingle with other tech enthusiasts and see the newest
      state-of-the-art wearables projects.</p>

      <p>Next comes a field trip on Thursday, February 2nd to the IBBME Medical Imaging
      Lab which is also located in the MaRS Centre. This lab visit is meant to
      introduce the NeurotechUofT team to current neuroscience research as well
      as to develop the team's knowledge of medical imaging technology – a vital
      tool in research and development in the neuroscience field.</p>

      <p>We will be hosting a neurotech conference on Thursday, February 23rd, during
      reading week, at which we will have booths and showcases displaying current
      neurotech projects as well as professors giving talks about neuroscience research
      and the status of the neurotech industry. This will be followed by a breakout
      session, during which we will have discussions with invited researchers and
      companies. We hope to see you there!</p>

      <p>As promised, we have news to share about our WallEEG project! Before starting
      to develop the aerial drone, our software and hardware teams are going to do
      a trial run of the project on a land-based bot. We have recently acquired
      one such bot and our work meetings will be starting next weekend. Once we
      have developed a functioning bot with a secure connection to Emotiv, we will
      begin working on connecting Emotiv to an aerial drone.</p>

      <p>Finally, we are recruiting new team members to fill some executive/administrative
      team positions. The recruitment form will be shared on this website and our
      Facebook page shortly, so if you are interested, we encourage you to apply!
      We are looking forward to meeting all of our new members!</p>

      <p>Thanks for staying tuned!</p>

      <p>Lidia Injac</p>
      <br></br>
    </div>
  ],
  [
    <h3> December 1, 2016 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- Two weekends ago we travelled to Montreal to attend Neurotech Demo Day:
      The Student Edition and had a blast! Now that the biosignals board project
      has come to a close, we are starting developments on WallEEG: a mind-controlled drone.</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hello everyone!</p>

      <p>Two weekends ago our hardware team travelled to Montreal to attend NeurotechX
      Demo Day: The Student Edition. They had the long-awaited opportunity to showcase
      the biosignals board project and the VitReous project that had been under
      construction since the start of this academic year. It was a ton of fun to
      mix and mingle with other neurotechnology developers and enthusiasts and to
      learn more about the various projects occurring at other universities.
      Congratulations to ETS and McGill for their respective wins in parts 1 and
      2 of the competition, and many thanks to NeurotechX, Neuroforce, Dejardins,
      Hexoskin, Muse, OpenBCI and NeuroSky for making this happen!</p>

      <p> Now that NeurotechX Demo Day has come and passed, work is set to begin on
      another project planned for the rest of the school year: WallEEG, a
      mind-controlled drone! More information about this will be shared as progress is made.</p>

      <p>Thanks for keeping up with us!</p>

      <p>Lidia Injac</p>

      <p>P.S. If you would like to see some photos from the competition, check out our Twitter!</p>
      <br></br>
    </div>
  ],
  [
    <h3> November 9, 2016 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- Planning is underway for a mini project that will be the foundation for upcoming workshops</p>
      <p>- The biosignals board team is working on establishing a secure connection between the TGAM chip and Arduino</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hi all,</p>

      <p>With the closing of another week come exciting updates from the hardware
      and workshops teams at NeurotechUofT!</p>

      <p>Developments are underway for the technical workshops coming up next term.
      These workshops will be structured around work on a mini project that will
      record muscle signals from one individual and apply them to another individual
      as a way to mirror muscle movements. At the moment, the team is sourcing materials
      and designing the schematics of the circuit board that will be needed for this
      mini project. In November, testing will begin.</p>

      <p>The hardware team has also been working hard on the biosignals board project that
      will be challenged in the NeurotechX competition. The circuit diagram that outlines
      the chip's connection to Arduino is now complete and the circuit itself has been
      connected. Debugging is the task at hand before dry electrodes can be attached
      and the chip to Arduino connection is finalized.</p>

      <p>Thanks for reading!</p>

      <p>Regards,</p>

      <p>Lidia Injac</p>
      <br></br>
    </div>
  ],
  [
    <h3> September 4, 2016 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>-Started the Mindfulness Study (biofeedback-based meditation)</p>
      <p>-WallEEG: noise coming from electrodes; still problems with signal processing algs</p>
    </div>,
      <div className="updates-collapsing">
      <p>Hello there! The team has started the Mindfulness Study - a research endeavour
      that observes different meditation techniques and documents the corresponding
      biofeedback of study participants. The aim of this study is to create and
      optimize a program that will allow a user to progress into a meditative state.
      Brainwave data, blood oxygenation levels, etc. are used to form a picture of
      individual's mental state, which helps the user meditate better.</p>

      <p>The Wall-EEG mind controlled bot is able to obtain and graph signals from the
      OpenBCI but noise is still an issue. It has been noticed that the source of
      the noise is improper electrode-to-skin contact. Furthermore, the OpenBCI
      GUI processes much better than our team's code. What remains to be done is
      studying the OpenBCI GUI to find out what processing techniques are used
      before we start working to improve our own code. We are almost done choosing
      a technique, and are in the process of testing it in real time.</p>

      <p>Thanks for reading!</p>

      <p>Regards,</p>

      <p>Lidia Injac</p>
      <br></br>
    </div>
  ],
  [
    <h3> July 28, 2016 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>-We have a Slack!</p>
      <p>-We have a software team for WallEEG Mind-Controlled Bot!</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hey everyone! Thanks for everyone who came out to our software scrum!
      The WallEEG project is well on its way, and we're working on putting
      all the pieces together. We're also forming our team to make a
      biosignals board for NeurotechX's Student Competition. Finally,
      we are collaborating with NeurotechTO on a software project of our own!</p>

      <p>On the administrative side, our team's hard at work to build industry
      partnerships so that we can see all the cool neurotech innovations
      happening in the real world. The hardware we bought last semester
      is finally trickling in, and we're really excited to use all of it!</p>

      <p>NEXT STEPS:</p>

      <p>-finish putting the pieces of the bot together!</p>

      <p>-find a cool project to work on for NeurotechX's competition</p>

      <p>That's all for now; stay tuned!</p>

      <p>Regards,</p>

      <p>Sayan Faraz</p>
      <br></br>
    </div>
  ],
  [
    <h3> March 30, 2016 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>-Bot Meeting 2: we tried modifying our Python script to run on Mac with mixed results; we're going to try again on Linux</p>
      <p>-We received a 32-bit 8-channel OpenBCI board! :O (Courtesy of <a href="http://www.openbci.com/">OpenBCI</a>, those guys are absolutely amazing ♥)</p>
      <p>-thinking of having study/chill sessions in April so we can learn from each other and help each other out; comment your thoughts beloow :D</p>
    </div>,
    <div className="updates-collapsing">
      <p>Hey everyone! Hope you had a great time at BOT MEETING #2!! With all the last
      submissions and exams crawling around the corner, we'd like to appreciate your
      effort in joining us for this event. In case you weren't able to make it,
      here are the highlights!</p>

      <p>We're still having issues getting data from the Muse into our Python script;
      Sayan couldn't install Linux on his laptop for some weird reason. Luckily
      a member's Mac came to the rescue and so we tried rewriting our code for
      Mac but problems came along the way when installing the OSC library.
      On the bright side we discussed what we should buy for our box of things,
      but don't worry, we'll keep you posted on that! We also realized that it
      would be a great idea to start programming the bot to move on the controller's
      eye blinks before working on concentration/calmness. (This is because muscle
      signals are very large, and can easily be picked up without doing any signal processing).</p>

      <p>Also, amazing news! <a href="http://www.openbci.com/">OpenBCI</a> is loaning us the 32-bit 8-channel version of the
      Ganglion board!! It's a research grade board that can take EEG, EMG, ECG, and
      other signals and output it in a format that programs can read. We're going to
      be using this, and a full EEG headset to mind-control our bot. (Cool. )</p>

      <p>We're also thinking about having study/chill sessions during our meeting times
      for April (because we know you're all busy with exams). The idea would be that
      since a lot of us are taking courses that relate to neurotechnology, we
      could study and perhaps learn from each other. We could also help each
      other out on concepts we're stuck in! What do you all think? Comment on
      the Facebook group!</p>

      <p>PS: Really sorry for the lack of updates between December and now; we
      were going through lots of administrative stuff and trying to get
      funding and trying to expand our admin team. Between last December
      and now, we've held workshops on EEG, signal processing, and neurology,
      and we're well on our way to make our BCI bot! We also hosted a field
      trip and had presentations and discussion with one of <a href="http://eplink.ca/">EpLink's</a>
      labs (Thanks EpLink :D). We got to meet their team and learn about
      the work they are doing. We got a booth at the UTSU Winter Clubs Fair
      and had an amazing turnout there. Super excited for what's to come!</p>

      <p>NEXT STEPS:</p>

      <p>-installing Ubuntu (an open source software platform that can run on any device)
      so that our Python script can pick up data from the Muse and analyze it</p>

      <p>That's all for now! Good luck on exams!!</p>

      <p>Best,</p>

      <p>Amal Hirole</p>
      <br></br>
    </div>
  ],
  [
    <h3> December 26, 2015 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>-Congrats on finishing the semester, and hope you really enjoy your break! :D</p>
      <p>-Moving conversations to Gitter: please make a GitHub account: and join our Gitter :D</p>
      <p>-then click 'Join Room' on the rooms you want to join (please join the General room for admin updates</p>
      <p>-Chill and A-Muse Night on Jan. 8 from 6pm—9pm! Board games, tea, Mediterranean sweets, and meditation with the Muse!</p>
      <p>-Posted programming resources on the Programming Crash Course event page</p>
      <p>-If you have an idea for a BCI project you'd like us to do next semester,
      please fill out this short application: and send it to <a href="neurotechuoft@outlook.com">neurotechuoft@outlook.com</a></p>
    </div>,
    <div className="updates-collapsing">
      <p>First of all, congratulations to everyone for finishing another semester
      of university! I hope exams went well for all of you, and that you have an awesome break.</p>

      <p>Since our last update, we've done some awesome things! We had a field trip to NeurotechTO's Developing EEG Technologies Meetup, where we learned a bit about the physiological side of BCI and had a great discussion about what we want to achieve with BCI. We also had our Programming Crash Course yesterday, where we learnt the basics of programming and had some really good pizza (thanks to Pizza Pizza! :D). We're also officially a UTSU Club, and we're making lots of progress in securing funds for the projects we have in mind for next semester.</p>

      <p>(Small reminder: we will be using Gitter officially starting January 11th, so get an account and join our room!)</p>

      <p>We have another field trip coming up! The Chill and A-Muse Night will be
      a relaxing way to celebrate finishing Fall semester, and a nice way to start
      the Winter semester. The event will take place at Bampot Bohemian House of
      Tea, and will feature lots of soothing teas, delicious Mediterranean snacks,
      board games, and (very) comfy pillows! We'll also have our two Muse EEG
      sets so you can meditate with the Muse Calm app. The event will cost $15
      per person. Please <a href="https://www.facebook.com/events/149546102079404/">RSVP here</a> by January 7th (say 'Going' if you can go
      / 'Can't Go' if you can't go):</p>

      <p>For those of you who came to the Programming Crash Course, we hope you had
      fun! <a href="https://prezi.com/m2xn-7jiplxl/programming-crash-course/">Here is the Prezi and exercises we completed.</a> PM me on Facebook or
      Gitter for suggestions for future events like this. Again, programming
      isn't something you can learn in one day; it is something that must be
      practiced over a long time. I posted some resources on the <a href="https://www.facebook.com/events/1176994042329393/">Programming
      Crash Course event page.</a></p>

      <p>In our last meeting, we discussed some of the projects we could develop,
      and decided that we would start off by making a simple app that graphs EEG
      signals from the Muse. We decided that we could think of more advanced
      projects in the future. However, these projects will cost money (and lots
      of it), and it would be very nice if we could get some of the money for
      these projects from UTSU and other sources. Therefore, we're working on
      planning this year's budget, which is necessary for fund applications
      (and for good administration!). For this, we need to know how much our
      projects will cost, and therefore what projects we will do. If you have an
      idea you want to do, please write a small description like this and send
      it to <a href="neurotechuoft@outlook.com">neurotechuoft@outlook.com</a>.
      Thanks so much!</p>

      <p>That's all for today; hope you all enjoy your break!</p>

      <p>Cheers,</p>

      <p>Sayan Faraz</p>
      <br></br>
    </div>
  ],
  [
    <h3> December 1, 2015 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>- Field trip to <a href="https://www.facebook.com/events/878305782288334/">NeurotechTO's Developing EEG Technologies Meetup</a> :D</p>
      <p>- Moving conversations to Gitter: please make a GitHub account: and join our <a href="https://gitter.im/neurotechuoft?utm_source=share-link&utm_medium=link&utm_campaign=share-link">Gliter</a> :D</p>
      <p>- then click 'Join Room' on the rooms you want to join (please join the General room for admin updates</p>
      <p>-Meeting notes from Nov 30 are posted on the NeurotechUofT OneNote :D</p>
      <p>-We will have a Programming Crash Course soon! Date and location TBD</p>
    </div>,
    <div className="updates-collapsing">
      <p>We had our second meeting last Monday! Thank you to all of you who came out;
      we had a great discussion about what projects we want to start off with,
      and about how to move forward with the group. Check the NeurotechUofT
      OneNote for meeting notes as usual.</p>

      <p>We're also having a field trip on Thursday! We will go to NeurotechTO's
      Developing EEG Technologies Meetup, where we will learn about developing
      BCI's and meet lots of cool people! We will meet at St. George Station,
      Southbound Platform at 6:00pm, and leave at 6:10pm sharp, and make our way
      together to the meetup. If you want to go there by yourself, here is the
      address and map (but it's more fun going as a group! :D) :</p>

      <p>ADDRESS: 106 Front Street East, Suite 200</p>

      <p>MAP: <a href="https://goo.gl/maps/5MTB6tsNq8s">https://goo.gl/maps/5MTB6tsNq8s</a></p>

      <p>MORE INFO: <a href="http://www.meetup.com/NeuroTechTO/events/226777115/">http://www.meetup.com/NeuroTechTO/events/226777115/</a></p>

      <p>For those of you who have never programmed before, or want to review the
      basics of programming, we will have a Programming Crash Course on Monday
      December 7, 2015 from 6:00pm to 8:00pm. We will be touching upon the material
      that is found in a first year Intro to Programming course (ie: CSC108).
      The notes will be posted online, but we will be going over examples as a
      group and in pairs, so you'll learn better if you come!</p>

      <p>NOTE: The only way you can master coding is to PRACTICE. We are doing this
      so that you have a head start with the concepts, so that you can practice
      over the break in time for next semester when we start working on some basic
      projects. We will be posting great resources on our website and on
      this group for your use.</p>

      <p>Facebook has served us decently nicely as a messaging platform, but in the
      future we want to facilitate conversations for idea generation and helping
      each other out with projects In general, for strengthening our community
      in general, and for making the execution of this group easier. For these
      reasons, we will be using Gitter as our primary tool for online conversation!</p>

      <p>Gitter is an online messaging app which is a part of a larger service called
      GitHub. We will be using GitHub a lot when we start creating projects,
      because it is a very useful way of keeping track of how your software
      changes, and very useful for team software development. (Also, most
      software employers want to look at your GitHub to see what type of code
      you've written, so it's a nice way to showcase your work!) Gitter will be
      useful to us because we can have topic-specific rooms (ie: general, random,
      ideas, etc) to organize our conversation. To join Gitter, first create a
      GitHub account, then take a look at
      <a href="https://gitter.im/neurotechuoft?utm_source=share-link&utm_medium=link&utm_campaign=share-link">NeurotechUofT's Gliter</a>
      and join the rooms you want :D . Please join the General room, as we will post all
      updates and administrative messages there.</p>

      <p>This is all for now, but we will be posting a lot more about some of the
      things that were mentioned in our last meeting, and about what's coming up next semester.</p>

      <p>Cheers,</p>

      <p>Sayan Faraz</p>
      <br></br>
    </div>
  ],
  [
    <h3> November 11, 2015 </h3>,
    <div>
      <h4>TL;DR:</h4>
      <p>-check out our long-term and short-term goals!</p>
      <p>-our first meeting's this Monday! (the 16th) Stay tuned for more details!</p>
      <p>-what we've done: recognition from Ulife, website online, detailed plan for the next month-ish (with help from NeurotechTO)</p>
      <p>-what we're going to do: obtain a Muse from InteraXon for hack night, get bank account, start funding applications</p>
      <p>-if you want to help out with running NeurotechUofT, fill out this short form :D Your help is very much appreciated!</p>
    </div>,
    <div className="updates-collapsing">
      <p>It's great to see so many people enthusiastic about the field of neurotech!
      Thank you all for joining us in our mission to create a lively neurotech community at U of T.</p>

      <p>Also, thank you all to those who responded to the question about what you
      want to achieve from participating in NeurotechUofT. I read the responses,
      and used my visions, as well as the visions expressed in the survey, to
      create long-term and short-term goals for NeurotechUofT. They are stated,
      and explained in the this document! :D</p>

      <p>So far, we've achieved recognition from Ulife, touched base with NeurotechTO
      (our parent organization in Toronto with the shared goal of creating a
      neurotech community in Toronto), and have some neat stuff planned for
      the future. We also have a website up! (yay :D). Over the next week, we
      want to open a bank account to a) reduce the chance of a conflict-of-interest
      situation, and b) to fulfill the requirements needed to apply for UTSU recognition
      (and funding). We're also going to look into and apply for funding sources.
      We're shaping up to have a meeting this Monday (the 16th), so stay tuned
      for more details!</p>

      <p>One last thing: there's a lot of behind-the-scenes work that's essential to
      keep NeurotechUofT alive and thriving. This includes web development, fund
      acquisition, organizing workshops, and more. If you're interested in helping
      out, give us your name, and answer a few questions in this short form! :D It's
      a great way to gain hands-on experience with operating an organization, and
      will help you refine your management, administrative, and leadership skills.
      Your contributions will help NeurotechUofT achieve its goals, and will help
      create a strong neurotechnology community at U of T. (And you can even add
      your experience to your resume!)</p>

      <p>Cheers,</p>

      <p>Sayan Faraz</p>
      <br></br>
    </div>
  ]

]

export default updatesList.map( info => <Collapsable trigger={info[0]} body={info[1]} collapsing={info[2]} expandHeight={10}/> )
