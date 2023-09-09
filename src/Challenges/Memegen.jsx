import React from 'react'
import memeface from './Images/Troll Face.svg';
import './Meme.css';

function Memegen() {
  return (
    <div>
      <nav>
        <img alt='1' src={memeface}/> <h1>MemeGenerator</h1>
      </nav>
      <form>
          <div>
          <input type='text' placeholder='tap text'/>
          <input type='text' placeholder='tap text'/>
          </div>
          <button>submit</button>
      </form>
    </div>
  )
}

export default Memegen
