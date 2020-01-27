import React from 'react';
import './TeamDiv.scss';

import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

import Taha from '../../assets/team/taha_morshedzadeh.jpg';
import Sayan from '../../assets/team/sayan_faraz.jpg';
import Karl from '../../assets/team/karl_cui.jpg';
import Lauren from '../../assets/team/lauren_levy.jpg';
import Lucy from '../../assets/team/lucy_ma.jpg';
import Tarriq from '../../assets/team/tarriq_purivatra.jpg';
import Reza from '../../assets/team/reza_mohammadi.jpg';
import Bing from '../../assets/team/bing_li.jpg';
import Melanie from '../../assets/team/melanie_davie.jpg';
import Nora from '../../assets/team/nora_lehmann.jpg';
import Yosi from '../../assets/team/yosi_hatekar.jpg';
import Sai from '../../assets/team/saideep_kumar.jpg';
import Soaad from '../../assets/team/soaad_hossain.jpg';
import Amelia from '../../assets/team/amelia_zhang.jpg';

import Avatar from '../../assets/team/Profile_avatar_placeholder_large.png';

function TeamDiv() {
  return(
    <div className="team-div">
      <Helmet>
        <title>Our Team | NeurotechUofT</title>
      </Helmet>
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
          <h3>Co-President, Operations</h3>
          <img src={Taha} alt="Taha Morshedzadeh"/>
        </div>

        <div className="profile">
          <h2>Sayan Faraz</h2>
          <h3>Co-President, Innovation</h3>
          <img src={Sayan} alt="Sayan Faraz"/>
        </div>

        <div className="profile">
          <h2>Karl Cui</h2>
          <h3>EEG Research Co-Lead</h3>
          <img src={Karl} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Lauren Levy</h2>
          <h3>EEG Research Co-Lead</h3>
          <img src={Lauren} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Lucy Ma</h2>
          <h3>Headset Lead</h3>
          <img src={Lucy} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Tarriq Purivatra</h2>
          <h3>Biomechanics Lead</h3>
          <img src={Tarriq} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Reza Mohammadi</h2>
          <h3>Biosignals Board Co-Lead</h3>
          <img src={Reza} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Bing Li</h2>
          <h3>Biosignals Board Co-Lead</h3>
          <img src={Bing} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Melanie Davie</h2>
          <h3>Workshops Co-Director</h3>
          <img src={Melanie} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Nora Lehmann</h2>
          <h3>Workshops Co-Director</h3>
          <img src={Nora} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Parry Chan</h2>
          <h3>Innovation Co-Director</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Matthew Lee</h2>
          <h3>Innovation Co-Director</h3>
          <img src={Avatar} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Yosi Hatekar</h2>
          <h3>HackTernoons Director</h3>
          <img src={Yosi} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Sai Kumar</h2>
          <h3>Marketing Director</h3>
          <img src={Sai} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Soaad Hossain</h2>
          <h3>Ideas Exchange Director</h3>
          <img src={Soaad} alt="Photo coming soon"/>
        </div>

        <div className="profile">
          <h2>Amelia Zhang</h2>
          <h3>Sponsorship Director</h3>
          <img src={Amelia} alt="Photo coming soon"/>
        </div>

      </div>

    </div>
  )
}

export default TeamDiv;
