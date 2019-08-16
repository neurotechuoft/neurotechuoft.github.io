import React from 'react';
import './CurrProjDiv.scss';

function CurrProjDiv() {
  return(
    <div className="curr-proj-div">
      <h1>Current Projects</h1>

      <div className="projects">
        <div className="proj">
          <a href="https://github.com/neurotechuoft/MindType">MindType</a>
          <p>
            A mind-controlled keyboard! Current mind-controlled keyboards require
            multiple operations to select a character. We propose the usage of an
            imagined sign language to select characters. This way, characters can be
            selected in one operation, making mind-typing much faster for people with
            neuromuscular degeneration.
          </p>
        </div>

        <div className="proj">
          <a href="https://github.com/neurotechuoft/Wall-EEG">WallEEG</a>
          <p>
            A mind-controlled quidditch robot! This project proves the interdisciplinary
            nature of neurotechnology, and consists of concepts from electrical engineering,
            computer science, mathematics, and neuroscience. This will be our submission
            of Part 2 of the NeuroTechX Student Competition.
          </p>
        </div>

        <div className="proj">
          <a href="https://www.youtube.com/watch?v=OJdKAIgMKiA">Headset</a>
          <p>
            Our own EEG headset! We're trying to make a headset for the OpenBCI
            board that is comfortale for wearers and easy to use for researchers
            with good signal quality.
          </p>
        </div>
      </div>

    </div>
  )
}

export default CurrProjDiv;
