import React from 'react';
import './LinksBar.scss';

import {Link} from 'react-router-dom';

function LinksBar() {
  return (
    <div className="linksbar">

      <Link to="/" exact>NeurotechUofT</Link>

      <a href="https://www.facebook.com/groups/neurotechUofT/">facebook</a>
      <a href="https://twitter.com/neurotechuoft">twitter</a>
      <a href="mailto:ask@neurotechuoft.com">e-mail</a>
      <a href="https://github.com/neurotechuoft">github</a>

    </div>
  );
}

export default LinksBar;
