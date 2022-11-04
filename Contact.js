
import React from 'react'
import { Element } from 'react-scroll'
//import {AdUnitsIcon ,Facebook,Instagram,Linkedin} from '@mui/icons-material';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import { IconButton,Facebook,Instagram,Linkedin } from "@mui/material"
import "./Contact.css";
const Contact = () => {
  return (
    <Element className="contact" id="contact">
    <h1>contact</h1>
    <div className='contact_container'>
    <p>
    Email : <span>mohanarajan7490@gmail.com</span>
    </p>
    <p>
    Github Username : <span>mohanarajan1990
    </span>
    </p>
    <div className='contact_icons'>
    <a href='google.com'>
    <AdUnitsIcon>
    <LinkedInIcon />
    </AdUnitsIcon>
    </a>
    <a href='google.com'>
    <AdUnitsIcon>
    < FacebookIcon />
    </AdUnitsIcon>
    </a>
    <a href='google.com'>
    <AdUnitsIcon>
    <InstagramIcon />
    </AdUnitsIcon>
    </a>
    </div>
    </div>
    
    </Element>
  )
}

export default Contact
