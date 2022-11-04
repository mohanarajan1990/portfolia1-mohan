import React from 'react'
import { Element } from 'react-scroll'

import Experience from '../Experiencebox/Experience'
import "./Experiencecontainer.css";
const Experiencecontainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">
    <h1>Experience</h1>
    <div className='experiencecontainer_info'>
    <Experience number="+10" title="clients" />
    <Experience number="60" title="projects" />
    <Experience number="6+" title="years teaching" />
    <Experience number="6000" title="students got trained" />

    </div>
    </Element>
  )
}

export default Experiencecontainer
