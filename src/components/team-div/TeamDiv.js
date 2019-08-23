import React from 'react';
import './TeamDiv.scss';

import {Link} from 'react-router-dom';

import Taha from '../../assets/team/taha_morshedzadeh.jpg';
import Sayan from '../../assets/team/sayan_faraz.jpg';
import Kota from '../../assets/team/kota_abe.jpg';
import Avatar from '../../assets/team/Profile_avatar_placeholder_large.png';

function TeamDiv() {
  return(
    <div className="team-div">
      <div className="team-banner">
        <h1>TEAM</h1>
        <h3>
          (Want to be a part of our team?
          <Link to="/opportunities"><b> Apply here :)</b></Link> )
        </h3>
      </div>

      <div className="team-photos">

        <div className="profile">
          <h2>Taha Morshedzadeh</h2>
          <h3>Vice-President, Operations</h3>
          <img src={Taha} alt="Taha Morshedzadeh"/>
        </div>

        <div className="profile">
          <h2>Sayan Faraz</h2>
          <h3>President</h3>
          <img src={Sayan} alt="Sayan Faraz"/>
        </div>

        <div className="profile">
          <h2>Musa Talluzi</h2>
          <h3>MindType Co-Lead</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Vandod Farhadi</h2>
          <h3>Workshops Lead</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Ritwij Jamuar</h2>
          <h3>Cortical Apps Lead</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Li Quan Soh</h2>
          <h3>Marketing Director</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Soaad Hossain</h2>
          <h3>Ideas Exchange Director</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Kota Abe</h2>
          <h3>Sponsorship Director</h3>
          <img src={Kota} alt="Kota Abe"/>
        </div>

        <div className="profile">
          <h2>Jai Aggarwal</h2>
          <h3>Sponsorship Director</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

      </div>

    </div>
  )
}

export default TeamDiv;
