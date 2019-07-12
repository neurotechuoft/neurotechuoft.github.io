import React from 'react';
import './LinksBar.scss';

function LinksBar() {
  return (
    <div className="LinksBar">
        <div class="row center-block">
            <div class="col-md-2 col-sm-2 text-center">
                <button class="btn btn-link contact-bar-btn" disabled="disabled">NeurotechUofT</button>
            </div>

            <div class="col-md-2 col-sm-2"></div>

            <div class="col-md-2 col-sm-2 text-center">
                <a href="https://www.facebook.com/groups/neurotechUofT/" role="button" class="btn btn-link contact-bar-btn ">facebook</a>
            </div>

            <div class="col-md-2 col-sm-2 text-center">
                <a href="https://twitter.com/neurotechuoft" role="button" class="btn btn-link contact-bar-btn" href="our-team.html">twitter</a>
            </div>

            <div class="col-md-2 col-sm-2 text-center">
                <a href="mailto:ask@neurotechuoft.com" role="button" class="btn btn-link contact-bar-btn">e-mail</a>
            </div>

            <div class="col-md-2 col-sm-2 text-center">
                <a href="https://github.com/neurotechuoft" role="button" class="btn btn-link contact-bar-btn">github</a>
            </div>
        </div>
    </div>
  );
}

export default LinksBar;
