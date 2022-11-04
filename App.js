import React from 'react'
import Experiencecontainer from './components/Experiencecontainer/Experiencecontainer'
import Header from "./components/Header/Header"
import Skillcontainer from './components/Skillcontainer/Skillcontainer'
import Topcontainer from "./components/Topcontainer/Topcontainer"
import Projectcontainer from './components/projectcontainer/projectcontainer'
import "./App.css";
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Experiencecontainer />
      <Contact />
    </div>
    
    
  )
}

export default App
