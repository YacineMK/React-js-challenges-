import React, { useState } from 'react'

function Use() {
    const [yes,yesState] = useState(["thing 1","thing 2"]);
    const func = () => {
        
        const newst = [...yes ,`thing ${yes.length + 1}` ];
        yesState(newst);
    }
    console.log(typeof(yes));

  return (
    <div>
      <button onClick={func}>click me</button>
      {yes.map((thing , index) => (
        <h1 key={index}>{thing}</h1>
      ))}
    </div>
  )
}

export default Use
