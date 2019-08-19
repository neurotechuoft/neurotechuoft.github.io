import React from 'react';
import './FAQDiv.scss';

import Collapsable from '../collapsable/Collapsable';

const q0trigger = (
  <h3>What is NeurotechUofT? What do you do?</h3>
)

const q0collapsing = (
  <p>
  NeurotechUofT is the first undergraduate student club at the University of
  Toronto devoted to driving undergraduate neurotechnology innovation.
  <b>We work on neurotech research and development projects suggested and lead by
  the members of our club.</b> To do this, we provide both the tech to complete
  these projects and workshops to help you become the ultimate neurotech ninja
  and contribute to neurotech projects!
  </p>
)

const q1trigger = (
  <h3>What is neurotechnology?</h3>
)

const q1collapsing = (
  <p>
  In the field of neurotech, we look into how the brain works, and how
  technology can work with in conjunction with the brain. It often uses
  brain-computer interfaces to have minds and machines work together.
  </p>
)

const q2trigger = (
  <h3>What is a brain computer interface (BCI)? How do they work?</h3>
)

const q2collapsing = (
  <p>
  A BCI is a system that lets your brain communicate and work with a computer!
  The difference is that the BCI tries to 'read your mind', instead of you
  telling it what your emotions or thoughts are. There are three steps. Step one
  is to obtain and 'clean' your brain signals (and other biosignals, such as eye
  movement, heart rate, etc). Next, the BCI interprets the information, and
  finally does some sort of action according to your brain state. The main
  difference is that whatever action the BCI does FEEDS BACK to the brain!
  This can be through any sensory feelings like sight and touch, or even
  directly affecting brain function! Applications of BCIs range from mind-controlling
  prosthetics to chips embedded inside your brain to detect and stop seizures.
  </p>
)

const q3trigger = (
  <h3>What type of projects do you work on?</h3>
)

const q3collapsing = (
  <p>
  Our first project is making a mind-controlled bot! (It isn't quite as hard as
  you might imagine it to be; we're mostly using other people's code :P).
  We're also participating in a Canada-wide neurotechnology competition in
  Montreal where we have to a) make a biosignals board and b) make our own
  neurotech application! We also have a bunch of neurological and cognitive
  science studies being planned out for the future, so stay tuned!
  </p>
)

const q4trigger = (
  <h3> I'm in first year and I don't know much about neuroscience and/or computer science.
  Can I still join, and what would I be doing?</h3>
)

const q4collapsing = (
  <p>
  Of course you can join! That being said, you will be expected to do quite a
  bit of self-learning (and this isn't just limited to first years). If you
  have a bit of experience coding, or are teaching yourself how to code, you
  can contribute to our source code for projects such as our mind-controlled
  bot. If you have a background in the sciences, you'll be able to help us
  find key literature and methods to guide our projects. Whatever your
  background is, it is very helpful to familiarize yourself with the other
  aspects of neurotechnology so that you understand how everything works
  together. To help you with this, we host many workshops to help you learn
  the various concepts in neurotechnology!
  </p>
)

function FAQDiv() {
  return(
    <div className="faq-div">
      <h1>FAQ</h1>

      <div className="questions">
        <Collapsable trigger={q0trigger} collapsing={q0collapsing}/>
        <Collapsable trigger={q1trigger} collapsing={q1collapsing}/>
        <Collapsable trigger={q2trigger} collapsing={q2collapsing}/>
        <Collapsable trigger={q3trigger} collapsing={q3collapsing}/>
        <Collapsable trigger={q4trigger} collapsing={q4collapsing}/>
      </div>
    </div>
  )
}

export default FAQDiv;
