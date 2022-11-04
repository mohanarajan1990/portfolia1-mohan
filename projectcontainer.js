import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../projects/projects'
import "./projectcontainer.css"
const Projectcontainer = () => {
  const projects = [
    {
      img: "mobile.jpg",
      title: "Amazon prize card",
      desc: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",

    },
    {
      img: "http://127.0.0.1:5555/mobile.jpg",
      title: "Amazon prize card",
      descs: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",
    },
    {
      img: "http://127.0.0.1:5555/mobile.jpg",
      
      title: "Amazon prize card",
      desc: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",

    },
    {
      img: "http://127.0.0.1:5555/mobile.jpg",
      title: "Amazon prize card",
      desc: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",
    },

    {
      img: "http://127.0.0.1:5555/mobile.jpg",
      title: "Amazon prize card",
      docs: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",

    },
    {
      img: "http://127.0.0.1:5555/mobile.jpg",
      title: "Amazon prize card",
      docs: "It is a good project about mobile in amazon prize card",
      link: "www.google.com",
    },
  ]

  return (
    <Element id="projects" className="projectcontainer" >
      <h1>projects</h1>
      <p>
        Here are some projects which i done for making lives of people easy.
      </p>
      <div className='projectcontainer_projects'>
        {projects.map((project, index) =>

          <Projects key={index} movie={project} />
        )}
      </div>
    </Element>
  )
}

export default Projectcontainer
