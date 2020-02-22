import React from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';

import './Sidebar.scss';

function Sidebar() {
  return(
    <div className="ns-docs-sidebar">

      <Link to="/">
        <img className="ns-docs-logo" src={require("../../assets/neurotechuoft_dark.png")}/>
      </Link>

      <Scroll activeClass="active" to="ns-docs-intro" offset={-52} spy={true} smooth={true} duration={500}>
        <p>About</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-getting-started" offset={-30} spy={true} smooth={true} duration={500}>
        <p>Getting Started</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-tutorial" offset={-30} spy={true} smooth={true} duration={500}>
        <p>Tutorial</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-websocketAPI" offset={-30} spy={true} smooth={true} duration={500}>
        <p>WebSocket API</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-generate_UUID" offset={-10} spy={true} smooth={true} duration={500}>
        <p>generate_uuid</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-predict" offset={-10} spy={true} smooth={true} duration={500}>
        <p>predict</p>
      </Scroll>
      <Scroll activeClass="active" to="ns-docs-train" offset={-10} spy={true} smooth={true} duration={500}>
        <p>train</p>
      </Scroll>

    </div>
  )
}

export default Sidebar;
