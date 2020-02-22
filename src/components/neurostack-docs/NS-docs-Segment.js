import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokaiSublime} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './NS-docs-Segment.scss';

class Segment extends Component {
  
  constructor(props){
    super(props);
    this.title = this.props.data.title;
    this.description = this.props.data.description;
    this.example = this.props.data.example;
    this.parameters = this.props.data.parameters;
    this.returns = this.props.data.returns;
  }

  render(){
    return(
      <div className="ns-docs-segment-main">
          <h3>{this.title}</h3>
          <p>{this.description}</p>

          <SyntaxHighlighter className="code" language="python" style={monokaiSublime}>
            {this.example}
          </SyntaxHighlighter>

          <p>Parameters:</p>
          {this.generateArgs(this.parameters)}

          <p>Returns:</p>
          {this.generateArgs(this.returns)}

      </div>
    );
  }

  generateArgs(args){
    var components = []

    var keys = Object.keys(args);

    for(var i = 0; i < keys.length; i++){
      var text = args[keys[i]];
      text = text.split("|")

      if(keys[i] == "None"){
        components.push(
          <div className="arg">
            None
          </div>
        )
      }

      else{
        components.push(
          <div className="arg">
            <bold>{keys[i]}</bold> <snippet>{text[0]}</snippet>: {text[1]}
          </div>
        )
      }
    }

    return components;
  }

}

export default Segment;
