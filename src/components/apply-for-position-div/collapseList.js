import React from 'react'
import Collapsable from '../collapsable/Collapsable';

const positionsList =
[
  [
    <h3>Ideas Exchange Associate</h3>,
    <div>
      <p>
      Introduce our members to the best faculty and industry professionals
      in Toronto, and kindle the next great idea! Execute eye-opening conferences,
      expos, and fireside chats about the latest advancements in neurotech,
      neurotech ethics, and more.
      </p>
      <p>
      <b>Nice skills to have:</b> Creativity, punctuality, attention to detail,
      inclusivity, kindness, understanding of basic business and marketing concepts
      </p>
      <p>
      <b>Hours per week:</b> 5—6 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Branding Director</h3>,
    <div>
      <p>
      Keep our branding stylish, aesthetically pleasing, and friendly :D
      Maintain and improve our branding assets, and provide artistic
      direction for our marketing material.
      </p>
      <p>
      <b>Nice skills to have:</b> Illustrator, InDesign
      </p>
      <p>
      <b>Hours per week:</b> 6—8 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Outreach Associate</h3>,
    <div>
      <p>
      Help us create a welcoming online undergrad neurotech community,
      and create innovative on-ground and social media outreach campaigns!
      </p>
      <p>
      <b>Nice skills to have:</b> Understanding of community building,
      PR, social media, etc; strong time management skills
      </p>
      <p>
      <b>Hours per week:</b> 4—5 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Cortical Apps Co-Director</h3>,
    <div>
      <p>
      Run our Cortical Apps Project Incubator! Guide teams of four through
      the process of creating their own neurotech app.
       </p>
      <p>
      <b>Nice skills to have:</b> Project management, understanding of
      community building, familiarity with tech
      </p>
      <p>
      <b>Hours per week:</b> 5—6 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Vlog Editor</h3>,
    <div>
      <p>
      Capture our best moments and memories through vlogs! Shoot, edit,
      and compile short vlogs about our journey in exploring mind-controlled
      tech for our Facebook page and our YouTube channel!
      </p>
      <p>
      <b>Nice skills to have:</b> Premiere Pro + After Effects/ equivalent; experience taking videos
      </p>
      <p>
      <b>Hours per week:</b> 4—5 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Web Developer</h3>,
    <div>
      <p>
      Make an epic interactive website for NeurotechUofT, and make various
      web apps for our initiatives, such as interactive neurotech tutorials
      and a signout system for our equipment!
      </p>
      <p>
      <b>Required skills:</b> HTML/CSS, being able to learn fast
      </p>
      <p>
      <b>Nice skills to have:</b> TypeScript / JavaScript / Python (Flask, Django, etc)
      </p>
      <p>
      <b>Hours per week:</b> 4—5 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Talent Director</h3>,
    <div>
      <p>
      Understand NeurotechUofT's goals, and recruit the talent needed to
      achieve them! Help interested and committed members achieve their goals
      by matching them to exec and project positions they will be interested
      in. Conduct behavioural interviews for exec and admin positions.
      </p>
      <p>
      <b>Nice skills to have:</b> Attention to detail, understanding people,
      creativity, understanding of leadership.
      </p>
      <p>
      <b>Hours per week:</b> 4—8 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Workshops Director</h3>,
    <div>
      <p>
      Lead the design and execution of workshops helping beginners
      learn both basic and advanced brain computer interface development
      </p>
      <ul>
        <li>Lead the design of workshops curriculum with consultation of tech leads</li>
        <li>Lead the creation and improvement of workshops</li>
        <li>Lead execution of workshop series</li>
      </ul>
      <b>Required skills:</b>
      <ul>
        <li>Completed at least 2nd year of one of the disciplines mentioned</li>
      </ul>
      <b>Nice skills to have:</b>
      <ul>
        <li>Prior experience with workshop delivery / teaching</li>
        <li>Prior experience with BCI</li>
      </ul>
      <p>
      <b>Hours per week:</b> 6—8 hours
      </p>
      <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Workshops Mentor</h3>,
    <div>
    <ul>
      <li>
      Help design subject-specific content for workshops helping beginners
      learn the basics of brain computer interface development (ie if your
      expertise is in neuroscience, you will help design neuroscience workshops)
      </li>
      <li>
      Help facilitate workshops through delivering lessons and providing
      guidance and mentorship to participants
      </li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Completed at least 2nd year of one of the disciplines mentioned</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with workshop delivery / teaching</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/admin-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>EEG Research Co-Lead</h3>,
    <div>
    <p>Lead NeurotechUofT EEG research efforts and iterative development of Neurostack</p>
    <ul>
      <li>Liaison with exec team about progress, resources needed</li>
      <li>Liason with other project leads about specific EEG phenomena exploration required for other projects</li>
      <li>Ensure timely progress of project</li>
      <li>Provide overall design direction</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with machine learning, software architectures AND/OR 3rd year neuroscience</li>
      <li>Prior leadership experience</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with BCIs</li>
      <li>Prior experience with leading design teams</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—8 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Cloud Machine Learning Researcher</h3>,
    <div>
    <p>
    Develop experimental machine learning techniques for different brainwave
    phenomena in collaboration with Experimental team, and develop real-time cloud ML services
    </p>
    <b>Required skills:</b>
    <ul>
      <li>Finished all core second year CS courses</li>
      <li>Python</li>
      <li>Git</li>
      <li>Third year statistics or machine learning course / experience</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Back-end experience</li>
      <li>Basic neuroscience</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Cloud Services Engineer</h3>,
    <div>
    <p>Develop and optimize real-time cloud ML services and benchmarking libraries.</p>
    <b>Required skills:</b>
    <ul>
      <li>Finished all core second year CS courses</li>
      <li>Python</li>
      <li>Git</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Back-end experience</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Cloud DevOps Engineer</h3>,
    <div>
    <p>Design and implement EEG ML pipeline and deployment stack.</p>
    <b>Required skills:</b>
    <ul>
      <li>Finished all core second year CS courses</li>
      <li>Python</li>
      <li>Git</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Back-end experience</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Headset Project Lead</h3>,
    <div>
    <p>Lead the design of a easy-to-use, modular, comfortable, and fashionable EEG headset</p>
    <ul>
      <li>Ensure headset is easy to use, modular, and comfortable</li>
      <li>Ensure headset is able to pick up accurate EEG signals</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with analog circuits</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Project management experience</li>
      <li>Has taken core MechEng / ECE courses</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—8 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>3D Printing and CAD Designer (Headset)</h3>,
    <div>
    <p>
    Design, fabricate, and test the chassis for a comfortable,
    easy-to-use EEG headset with UX Designer.
    </p>
    <ul>
      <li>Design CAD models of modular parts for an EEG headset with</li>
      <li>Conduct stress analysis of modular parts to reduce force load on head</li>
      <li>3D-print parts for headset</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with CAD software, 3D printing</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core MechEng courses</li>
      <li>Prior experience in designing modular parts</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Signals Acquisition Engineer (Headset)</h3>,
    <div>
    <p>
    Create electrode setup for EEG headset, focusing on signal quality and comfort.
    </p>
    <ul>
      <li>Record data of experiments and select proper settings to reduce noise in the signal</li>
      <li>Conduct FFT on raw EEG signals</li>
      <li>Design signal filters either on software or hardware</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior programming experience</li>
      <li>Knowledge of Fourier transform, signal processing filters</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core Electrical Engineering courses</li>
      <li>Taken any DSP or signal processing courses</li>
      <li>Being able to program microcontrollers for signal processings</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>UX Designer (Headset)</h3>,
    <div>
    <p>
    Use iterative design to create a comfortable, easy to use EEG headset for research.
    </p>
    <ul>
      <li>Work with CAD Designer to design comfortable headset</li>
      <li>Conduct experiments to analyze usabiity of headset</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken a course on human factors (ie CSCS318, MIE240, etc)</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Wall EEG Project Lead</h3>,
    <div>
    <p>
    Lead development of biomechanics projects such as a mind controlled drone and mind controlled prosthetic arm
    </p>
    <ul>
      <li>Liaison with exec team about progress, resources needed</li>
      <li>Ensure timely progress of project</li>
      <li>Provide overall design direction</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with robotics AND/OR advanced neuroscience</li>
      <li>Prior leadership experience</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core ECE, MechEng courses OR advanced neuro and physio courses</li>
      <li>Prior experience with leading design teams</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—8 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>3D Printing and CAD Designer (Headset)</h3>,
    <div>
    <p>
    Design, fabricate, and test the chassis for a mind-controlled quidditch
    robot and other biomechanics projects.
    </p>
    <ul>
      <li>Design CAD models for drone and throwing structure in coordination with mechanical engineer</li>
      <li>3D print or machine parts for drone / arm</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with CAD software, 3D printing</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core MechEng courses</li>
      <li>Prior experience with robotics</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Control Systems Designer</h3>,
    <div>
    <p>
    Program control system for prosthetic arm
    </p>
    <ul>
      <li>Use existing mind-control APIs with prediction to ensure smooth motions</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Finished core second year CS courses / equivalents</li>
      <li>Understanding of control systems (PID, etc)</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with robotics</li>
      <li>Prior experience with ROS</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Mechatronics Engineer</h3>,
    <div>
    <p>
    Design systems to output force for mind-controlled quidditch robot and other biomechanics projects
    </p>
    <ul>
      <li>Use existing mind-control APIs with prediction to ensure smooth motions</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Finished core second year CS courses / equivalents</li>
      <li>Understanding of control systems (PID, etc)</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with robotics</li>
      <li>Prior experience with ROS</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Communications Engineer</h3>,
    <div>
    <p>
    Design and implement a real-time communications system for brain wave
    streaming, video feed, and drone control for a mind-controlled quidditch robot.
    </p>
    <ul>
      <li>Design architecture for real-time data streaming between multiple devices</li>
      <li>Implement software architecture for data streaming</li>
      <li>Develop hardware systems for data streaming</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with robotics</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core ECE courses</li>
      <li>Prior experience with real-time programming</li>
      <li>Prior experience with communications systems (radio, WiFi, etc)</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>Edge Computing Engineer</h3>,
    <div>
    <p>
    Design and develop hardware systems for real-time edge computing on IoT devices.
    </p>
    <ul>
      <li>Design / curate appropriate edge computing solution</li>
      <li>Work with Neurostack team to deploy Neurostack onto edge device</li>
      <li>Ensure real-time performance of edge computing device</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with IoT devices (Raspberry Pi, etc)</li>
      <li>Prior experience with programming</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with computer hardware</li>
      <li>Prior experience with cloud / edge computing</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>VR / AR Developer</h3>,
    <div>
    <p>
    Develop VR / AR interface for mind-controlled quidditch robots with UX Designer (WallEEG).
    </p>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with programming</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Prior experience with VR / AR programming</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>UX Designer (WallEEG)</h3>,
    <div>
    <p>
    Use iterative design to create a low-cognitive load VR / AR user
    experience to play mind-controlled quidditch.
    </p>
    <ul>
      <li>Work with full team to understand requirements of VR / AR front end to play mind-controlled quidditch</li>
      <li>Design VR / AR front end for playing mind-controlled quidditch</li>
      <li>Conduct experiments to analyze usabiity and cognitive load of VR / AR front end</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken a course on human factors (ie CSCS318, MIE240, etc)</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>MindType Project Lead</h3>,
    <div>
    <p>
    Lead iterative development of MindType, our mind-controlled keyboard
    </p>
    <ul>
      <li>Liaison with exec team about progress, resources needed</li>
      <li>Ensure timely progress of project</li>
      <li>Provide overall design direction</li>
    </ul>
    <b>Required skills:</b>
    <ul>
      <li>Prior experience with designing software architectures</li>
      <li>Prior leadership experience</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken core 2nd year CS / equivalent courses</li>
      <li>Some experience with UX</li>
      <li>Prior experience with leading design teams</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—8 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>React Developer</h3>,
    <div>
    <p>
    Develop front end in React, React Native, and Electron for MindType
     (mind-controlled keyboard) and BrainTag (EEG collection, tagging and analysis toolbox)
    </p>
    <b>Nice skills to have:</b>
    <ul>
      <li>Finished all core second year CS courses</li>
      <li>React</li>
      <li>Git</li>
      <li>Experience with Electron</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>UI Designer</h3>,
    <div>
    <p>
    Design UI for projects like MindType (mind-controlled keyboard) and BrainTag
    (EEG collection, tagging and analysis toolbox)
    </p>
    <b>Required skills:</b>
    <ul>
      <li>Experience with graphic design, UI design</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [
    <h3>UX Designer (MindType)</h3>,
    <div>
    <p>
    Use iterative design to design an easy-to-use, fast mind-controlled keyboard.
    </p>
    <ul>
      <li>Work with UI Designer and rest of MindType team to improve experience of using keyboard</li>
      <li>Conduct experiments to analyze usabiity of MindType</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Has taken a course on human factors (ie CSCS318, MIE240, etc)</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
]

export default positionsList.map( info => <Collapsable trigger={info[0]} collapsing={info[1]}/> )
