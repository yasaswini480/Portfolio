import React from 'react'
import './works.css';
import work1 from '../../work1.png'

const Works = () => {
  return (
    <div id='works'>
        <h1>WORKS</h1>
        <div className='list1'>
        <img src= {work1}></img>
                
            <div className='listtext'>
                <h2>Bare Logic Solutions, Hyderabad  </h2>
                <p>Software Developer </p>
            </div>
        </div>
        <div className='list1'>
        <img src= {work1}></img>
        
            <div className='listtext'>
                <h2>Ryna Technologies, Hyderabad </h2>
                <p>Front End Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Works