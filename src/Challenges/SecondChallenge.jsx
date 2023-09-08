import React from 'react'
import './Second.css';
import aribab from './Images/airbnb 1.svg';
import images from './Images/airbnb2.svg';
import Card from './Card.jsx';

//note you van change image src as u like 

function SecondChallenge() {
    
  return (
    <div className='herosection'>
       <nav>
         <img alt='1' src={aribab}/>  
       </nav>
       <div className='cont'>
           <img alt='2' src={images} className='exper'/>
           <div className='text'>
              <h1>Online Experiences</h1>
              <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
           </div>
           <Card 
              img ='./Images/exper.svg'
              imgtwo ='./Images/Star.svg'
              text = 'Life lessons with Katie Zaferes'
           />
           <Card 
              img ='./Images/exper.svg'
              imgtwo ='./Images/Star.svg'
              text = 'Group Mountain Biking'
           />
           <Card 
              img ='./Images/exper.svg'
              imgtwo ='./Images/Star.svg'
              text = 'Learn wedding photography'
           />
       </div>
    </div>
  )
}

export default SecondChallenge
