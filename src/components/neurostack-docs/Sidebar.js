import React, { Component } from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';

import './Sidebar.scss';

class Sidebar extends Component {

  constructor(){
    super();
    this.state = {
      open: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(){
    this.setState((prev) => ({
      open: !prev.open
    }));
    console.log('toggled');
  }

  render(){
    return(
      <div className="ns-docs-sidebar" onClick={() => this.toggleDrawer()}>

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

        <div className="ns-docs-sidebar-slide">
          <Scroll activeClass="active" to="ns-docs-generate_UUID" offset={-10} spy={true} smooth={true} duration={500}>
            <p>&bull; generate_uuid</p>
          </Scroll>
          <Scroll activeClass="active" to="ns-docs-predict" offset={-10} spy={true} smooth={true} duration={500}>
            <p>&bull; predict</p>
          </Scroll>
          <Scroll activeClass="active" to="ns-docs-train" offset={-10} spy={true} smooth={true} duration={500}>
            <p>&bull; train</p>
          </Scroll>

        </div>

        <a href = "https://github.com/neurotechuoft/Neurostack">
          <p>View Source</p>
        </a>

      </div>
    )
  }
}

export default Sidebar;
