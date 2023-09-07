import React from 'react'
import Logo from './Images/logo192.png';
import secLogo from './Images/reactjs-icon 2.svg';
import './First.css';

function FirstChallenge() {
  return (
    <div className='container'>
      <nav>
         <div className='logo'><img alt='logo' src={Logo} /><h1>ReactFacts</h1></div>
         <h1 className='project'>React Course - Project1</h1>
      </nav>
      <div className='listcontainer'>
        <div className='Text'>
        <h3>Fun facts about react</h3>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        <img alt='react' src={secLogo} className='hand'/>
      </div>
    </div>
  )
}

export default FirstChallenge
