import React from 'react'
import Collapsable from '../collapsable/Collapsable';

const OPS_APPLY_LINK = "https://forms.zohopublic.com/exec1/form/AdminTeamPositionsW2020/formperma/cwTO1X5jCKyr0Oju_Iz6cCdQ69XAxsZN1tjZOI9WPp8"

const positionsList =
[
  [ // 0
    <h3>Events Associate</h3>,
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 1
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 2
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 3
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 4
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 5
    <h3>Website Developer</h3>,
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 6
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 7
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
      <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 8
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
    <a href={OPS_APPLY_LINK}>Apply</a>
    </div>
  ],
  [ // 9
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
  [ // 10
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
  [ // 11
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
  [ // 12
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
  [ // 13
    <h3>Neuroscience Researcher</h3>,
    <div>
    <p>Identify core neuroscience phenomena to be detected using ML; design and implement experimental protocols to observe such phenomena</p>
    <b>Required skills:</b>
    <ul>
      <li>Finished all core second year neuroscience courses</li>
      <li>Experience reading neuroscience literature</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Previous experience with EEG</li>
    </ul>
    <p>
    <b>Hours per week:</b> 4—5 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 14
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
  [ // 15
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
  [ // 16
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
  [ // 17
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
  [ // 18
    <h3>Biosignals Board Co-Lead</h3>,
    <div>
      <p>
      Lead the design, prototyping, and fabrication of an ultra-low noise biosignals acquisition board.
      </p>
      <ul>
        <li>Experience programming low-level computer hardware and/or embedded systems (ie ECE342 Computer Hardware)</li>
        <li>Knowledgeable in operating systems (ECE344, CSC369, etc)</li>
        <li>OR</li>
        <li>Signal processing experience</li>
        <li>Experience with PCB design</li>
      </ul>
      <b>Nice skills to have:</b>
      <p>
      <b>Hours per week:</b> 8—10 hours
      </p>
      <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 19
    <h3>Embedded Software / Firmware Engineer</h3>,
    <div>
      <p>
      Work with one other programmer to design and program the ADS1299-Raspberry Pi interface. Responsible for coding the main loop on a Raspberry Pi to control and acquire data from an ADS1299 ADC chip through SPI and send it to a GUI for visualization.
      </p>
      <ul>
        <li>Work with CAD Designer to design comfortable headset</li>
        <li>Proficient in C/C++</li>
        <li>Experience developing in a Linux environment</li>
        <li>Experience programming low-level computer hardware and/or embedded systems (ie ECE342 Computer Hardware)</li>
        <li>Knowledgeable in operating systems (ECE344, CSC369, etc)</li>
      </ul>
      <b>Nice skills to have:</b>
      <ul>
        <li>If you're more software oriented: multithreading, interfacing different programming languages (ie C, Python)</li>
        <li>If you're more hardware oriented: scripting experience (make, bash, perl)</li>
        <li>Previous experience with Arduino / Raspberry Pi</li>
      </ul>
      <p>
      <b>Hours per week:</b> 6—7 hours
      </p>
      <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 20
    <h3>DSP Software Engineer</h3>,
    <div>
    <p>
    Program digital signal processing (DSP) (noise filtering, high/low-pass filters, power spectral analysis etc.) functions to process acquired data on-chip.
    </p>
    <ul>
      <li>Proficient in C/C++</li>
      <li>Experience developing in a Linux environment</li>
      <li>Taken courses in signal processing or signals and systems</li>
    </ul>
    <b>Nice skills to have:</b>
    <ul>
      <li>Previous experience working with Raspberry Pi</li>
      <li>Previous DSP programming experience</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—7 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 21
    <h3>PCB Designer</h3>,
    <div>
      <p>
      Help create the hardware schematics and layout for the PCB used to interface the ADS1299 chip with electrodes and connections to the Raspberry Pi. Responsible for housing the ADS1299 chip for low noise embedded applications and testing for signal filtering.
      </p>
      <ul>
        <li>Past experience with PCB design software (Altium, DesignSpark, EAGLE, AutoDesk)</li>
        <li>Knowledgeable with PCB manufacturing techniques</li>
        <li>Past experience soldering and testing low noise embedded circuits</li>
        <li>Taken or is taking courses for analog and digital electronics</li>
      </ul>
      <b>Nice skills to have:</b>
      <ul>
        <li>Previous experience working with Arduino’s or Raspberry Pi’s</li>
        <li>Taken signal analysis courses and familiar with filtering</li>
      </ul>
      <p>
      <b>Hours per week:</b> 6—7 hours
      </p>
      <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 22
    <h3>WallEEG Project Lead</h3>,
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
  [ // 23
    <h3>3D Printing and CAD Designer (WallEEG)</h3>,
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
  [ // 24
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
  [ // 25
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
  [ // 26
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
  [ // 27
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
  [ // 28
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
  [ // 29
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
  [ // 30
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
  [ // 31
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
  [ // 32
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
  [ // 33
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
  [ // 34
    <h3>Not sure, but want to get involved in general?</h3>,
    <div>
    <p>
    No worries, apply anyways! We'll help you figure out what you want to get out of your experience at NeurotechUofT, and help you get there!
    </p>
    <b>Nice skills to have:</b>
    <ul>
      <li>You're willing to give it your best and learn new things!</li>
    </ul>
    <p>
    <b>Hours per week:</b> 6—7 hours
    </p>
    <a href="http://bit.ly/project-team-apps-2019w">Apply</a>
    </div>
  ],
  [ // 35
    <h3>Hackternoons Director</h3>,
    <div>
      <p>
      Create a positive and supportive environment for the whole NeurotechUofT Team to collaborate and innovate.
      Guide newcomers to the right resources and help them learn the basics of Neurotechnology.
      And of course, make plenty of cool friends along the way!
      </p>
      <b>Nice skills to have:</b>
      <ul>
        <li>Willingness to learn</li>
        <li>Strong communication</li>
        <li>Team and time management skills</li>
        <li>Teaching experience</li>
      </ul>
      <p>
        <b>Hours per week:</b> 2-4 hours
      </p>
      <p>
        <b>Potential Demographics:</b> Art/Sci, CS, Engineering
      </p>
      <p>
        <b>Urgency:</b> by September 21st
      </p>
    </div>
  ],
  [ // 36
    <h3>Web Developer</h3>,
    <div>
      <p>
      Be a member of the front end development team, creating porjects by:
      <ul>
        <li>Delivering small & well-understood tasks on a regular (1-2 weeks) basis</li>
        <li>Work closely with other developers (on design or implementations)</li>
        <li>Participate in code reviews</li>
      </ul>
      </p>
      <b>Required Skills:</b>
      <ul>
        <li>Git</li>
        <li>ReactJs (or React Native)</li>
        <li>Javascript (ES6+)</li>
      </ul>
      <b>Nice skills to have:</b>
      <ul>
        <li>Redux</li>
        <li>Typescript</li>
      </ul>
      <p>
        <b>Hours per week:</b> 4-6 hours
      </p>
    </div>
  ]
].map( info => <Collapsable trigger={info[0]} collapsing={info[1]} expandHeight={25} /> )

const projectsList = [
  [
    [
      <div>
        <h2>Neurostack + EEG Research</h2>
        <p>
        Development of brain-wave analysis algorithms, and real-time
        EEG ML cloud services for all our projects.
        </p>
        <p>
        <b>Positions:</b> Neuroscience researcher
        </p>
      </div>
      ],
    [
      <div>
        {/* {positionsList[9]} */}
        {/* {positionsList[10]} */}
        {/* {positionsList[11]} */}
        {/* {positionsList[12]} */}
        {positionsList[13]}
      </div>
    ]
  ],
  [
    [
      <div>
        <h2>Headset and EEG Acquisition</h2>
          <p>Making our own brain waves headset</p>
          <p><b>Positions:</b> Hardware UX, signal acquisition / processing, CAD / 3D printing</p>
      </div>
    ],
    [
      <div>
        {/* {positionsList[14]} */}
        {positionsList[15]}
        {positionsList[16]}
        {positionsList[17]}
      </div>
    ]
  ],
  [
    [
      <div>
        <h2>Biosignals Board</h2>
          <p>Making our own brain wave acquisition board</p>
          <p><b>Positions:</b> Project co-lead, embedded software / firmware, analog / digital signal processing, PCB design</p>
      </div>
    ],
    [
      <div>
        {positionsList[18]}
        {positionsList[19]}
        {positionsList[20]}
        {positionsList[21]}
      </div>
    ]
  ],
  [
    [
      <div>
        <h2>WallEEG</h2>
        <p>Mind-controlled drone and prosthetic arm</p>  
        <p><b>Positions:</b> Control systems, UX</p>
      </div>
    ],
    [
      <div>
        {/* {positionsList[22]} */}
        {/* {positionsList[23]} */}
        {positionsList[24]}
        {/* {positionsList[25]} */}
        {/* {positionsList[26]} */}
        {/* {positionsList[27]} */}
        {/* {positionsList[28]} */}
        {positionsList[29]}
      </div>
    ]
  ],
  [
    [
      <div>
        <h2>MindType</h2>
          <p>Mind-controlled keyboard</p>
          <p><b>Positions:</b> Project lead, UI, UX</p>
      </div>
    ],
    [
      <div>
        {positionsList[30]}
        {/* {positionsList[31]} */}
        {positionsList[32]}
        {positionsList[33]}
      </div>
    ]
  ],
  [
    [
      <div>
        <h2>Front End</h2>
        <p>
          <b>Projects:</b>
          <ul>
            <li>BrainTag:</li>
            <ul>
              <li>A tool for neuroscience researchers</li>
              <li>Real-time graphing, EEG collection and tagging</li>
            </ul>
            <li>MindType:</li>
            <ul>
              <li>A mind-controlled keyboard</li>
              <li>Uses a flashing algorithm & p300 wave detection to type</li>
            </ul>
          </ul>
        </p>
      </div>
    ],
    [
      <div>
        {positionsList[36]}
      </div>
    ]
  ]
].map( info => <Collapsable trigger={info[0]} collapsing={info[1]} expandHeight={350} /> )

// export default positionsList.map( info => <Collapsable trigger={info[0]} collapsing={info[1]}/> )

export {positionsList, projectsList}
