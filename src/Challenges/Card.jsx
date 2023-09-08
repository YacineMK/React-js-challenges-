import React from 'react'
import './Second.css'
//props its just name

function Card(props) {
  return (
     <div className='datapart'>
         <div id='card'>
             <img alt='3' src={props.hi}/>
                 <div className='stats'>
                        <img alt='4' src={props.imgtwo} />
                        <span>5.0</span>
                        <span>(6) -</span>
                        <span>USA</span> 
                 </div>
                 <p>{props.text}</p>
                 <p><span className='prix'>From $136  </span>/ person</p>
         </div>
     </div>
  )
}

export default Card
