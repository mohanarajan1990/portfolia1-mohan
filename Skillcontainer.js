import React from 'react'
import {Element} from "react-scroll"
import skilling from "../../assets/skillss.jpg"
import LinearProgress from "@mui/material/LinearProgress"
import "./Skillcontainer.css";
const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
    <div className='skillcontainer_image'>
    <img src={skilling} alt=""/> 
    </div>
    <div className='skillcontainer_text'>
    <h1>SKILLSET</h1>
    <div className='skillcontainer_skillset'>
    </div>
    <div>
    <h5>REACT</h5>
    <div className='skillcontainer-slider skillcontainer-slider1'>
    <LinearProgress varient="determinant" value={90} />
    </div>
    <div className='skillcontainer-skillset'>
    <h5>NODEJS</h5>
    <div className='skillcontainer-slider skillcontainer-slider2'>
    <LinearProgress variant='determinant' value={80} />
    </div>
    </div>
    <div className='skillcontainer-skillset'>
    <h5>REACTNATIVE</h5>
    <div className='skillcontainer-slider skillcontainer-slider3'>
    <LinearProgress variant='determinant' value={60} />
    </div>
    </div>
    <h5>REACTJS</h5>
    <div className='skillcontainer-slider skillcontainer-slider4'>
    <LinearProgress variant='determinant' value={65} />
    <div className='skillcontainer-slider skillcontainer-slider'>
    <LinearProgress variant='determinant' value={50} />
    </div>
    </div>
    <h5>AWS</h5>
    <div className='skillcontainer-slider skillcontainer-slider5'>
    <LinearProgress variant='determinant' value={70} />
    </div>
    </div>
    </div>
    </Element>
  )
}

export default Skillcontainer
