import React from 'react';

import EvolStage from './EvolStage';

import tadpole from '../../assets/journey-of-member/tadpole.png'
import padawan from '../../assets/journey-of-member/padawan.png'
import ninja from '../../assets/journey-of-member/ninja.png'

function NinjaEvolution() {
  return(
    <div className="evolution">

      <EvolStage content={CONTENT[0]} className="evolstage tadpole">
        {CONTENT[0].description}
      </EvolStage>

      <EvolStage content={CONTENT[1]}  className="evolstage padawan">
        {CONTENT[1].description}
      </EvolStage>

      <EvolStage content={CONTENT[2]}  className="evolstage ninja">
        {CONTENT[2].description}
      </EvolStage>

    </div>
  )
}

const CONTENT = [

  {img:tadpole, className:"journey-img", alt:"Neurotech Ninja Tadpole", level:"Tadpole", knowledge:"Knowledge: 1st year —", btntext:"Workshops",
description: <p>Begin your journey by making your first neurotech app! Learn to build your first circuits,
program your first Arduinos, and learn the fundamentals of BCI design. <b>Our next round of workshops starts
in January 2019</b>, so make sure to keep an eye out for them!</p>},

{img:padawan, className:"journey-img", alt:"Neurotech Ninja Padawan", level:"Padawan", knowledge:"Knowledge: 2nd year —", btntext:"Cortical Apps",
description: <p>Start applying your neurotech skills to real projects! Work on feature development
for existing projects, or make your own with our <button><b>Cortical Apps Project Incubator</b></button>.</p>},

{img:ninja, className:"journey-img", alt:"Neurotech Ninja Ninja", level:"Ninja", knowledge:"Knowledge: 3rd year —", btntext:"Advacned Projects",
description: <p>Work on our most advanced research and product development initiatives,
and join our competition teams! Find out about our advanced projects <button><b>here</b></button>.</p>}

]

export default NinjaEvolution;
