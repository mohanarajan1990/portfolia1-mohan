import React, { useState } from 'react'
import "./projects.css";
const Projects =({movie: { img,title,desc,link }}) => {
    const [show, setshow] = useState(false);
  return (
    <a href={link}>
    
    <div className="project_content" onMouseEnter={()=>setshow(true)} 
    onMouseLeave={()=>setshow(false)}>
     { show ? 
        <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        </div>
    
    :<img src={require(`../projectcontainer/mobile.jpg`)} alt=""/>
     }
        

       
        
      
    </div>
    </a>
  )
}

export default Projects
