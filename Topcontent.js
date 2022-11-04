import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css";

const Topcontent = () => {
  return (
    <div className="topcontent">
    <div className="topcontent_container">
    <h1>Mr.MOHANARAJAN</h1>
    <p>A Proffesional Web and App Developer</p>
    <a href="https://docs.google.com/document/d/1bq-kRVGcSsutFVnPS0Yq_AGx27rFJRerawWwHV2YHqU/edit" target={"_blank"} rel="noreferrer"
    >
    <button className='topcontent_downloadButton'>Download Cv</button>
    </a>
    <Link to="projects" smooth={true} duration={500}>
    <button className='topcontent_WorkButton'>My Work</button>
    </Link>
    </div>
      
    </div>
  )
}

export default Topcontent
