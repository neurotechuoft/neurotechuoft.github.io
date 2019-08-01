import React from 'react';
import './Logo.scss';

function NavButton(props) {
  return(
    <div className="navButton">
        <a href={props.link}>{props.buttonName}</a>
    </div>
  )
}

export default NavButton;
