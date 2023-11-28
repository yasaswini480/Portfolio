import React from 'react'
import './projects.css'
import chat from '../../chat.png'
import port from '../../port.png'
import emp1 from '../../emp1.webp'
import cart from '../../cart.png'
import data from '../../data.webp'

const Projects = () => {
  return (
    <div id='projects'>
        <h1>PROJECTS</h1>
        <div className='list1'>
            <img src= {chat}></img>
            <div className='listtext'>
                <h2>Kore.AI  </h2>
                <p>Designing and building chatbots using NLP and ML</p>
            </div>
        </div>
        <div className='list1'>
            <img src= {port}></img>
            <div className='listtext'>
                <h2>Personal Portfolio Website  </h2>
                <p>Built a user friendly website to communicate my expertise and experience</p>
            </div>
        </div>
        <div className='list1'>
            <img src= {emp1}></img>
            <div className='listtext'>
                <h2>Employee Management System</h2>
                <p>Created a full stack web application to store and retrieve the employee data using SpringBoot, REST API, React Hooks</p>
            </div>
        </div>
        <div className='list1'>
            <img src= {cart}></img>
            <div className='listtext'>
                <h2>E-commerce Website</h2>
                <p>Designed a website to browse the products and optimized the checkout process</p>
            </div>
        </div>
        <div className='list1'>
            <img src= {data}></img>
            <div className='listtext'>
                <h2>Uber Database Design</h2>
                <p>Created a relational database and performed transactions using SQL queries</p>
            </div>
        </div>
    </div>
  )
}

export default Projects