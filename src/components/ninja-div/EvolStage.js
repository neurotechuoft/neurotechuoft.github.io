import React from 'react';

function EvolStage(props) {
  return(
    <div className={props.className}>
      <img src={props.content.img} alt={props.content.alt}/>
      <h1>{props.content.level}</h1>
      <h3>{props.content.knowledge}</h3>
      <button>{props.content.btntext}</button>
      {props.children}
    </div>
  )
}

export default EvolStage;
