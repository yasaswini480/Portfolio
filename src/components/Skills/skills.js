import React from 'react'
import './skills.css'
import ui from '../../ui.jfif'
import bac from '../../bac.jpg'
import code from '../../code.jpg'
import sql from '../../sql.jpg'
import frame from '../../frame.webp'

const Skills = () => {
  return (
    <section id='skills' >
        <div className='what'>What I do</div>
        <h4 className='para1'>I am a skilled and passionate web designer with experience in creating visually appealing <br></br> and user-friendly websites. I am proficient in HTML, CSS, JavaScript, as well as knowledge <br></br> in React, Node.js, Express.js and SQL</h4>
        <div className='list'>
            <div className='list1'>
                <img src= {ui}></img>
                <div className='listtext'>
                    <h2>UI/UX Design</h2>
                    <p>Creating front end applications using HTML, CSS, JavaScript, Bootstrap, React</p>
                </div>
            </div>
            <div className='list1'>
                <img src= {bac}></img>
                <div className='listtext'>
                    <h2>Backend Design</h2>
                    <p>Creating back end applications using Node.js, Express.js, SpringBoot</p>
                </div>
            </div>
            <div className='list1'>
                <img src= {code}></img>
                <div className='listtext'>
                    <h2>Programming Languages </h2>
                    <p>Good at developing code in Java, Python, C</p>
                </div>
            </div>
            <div className='list1'>
                <img src= {sql}></img>
                <div className='listtext'>
                    <h2>Databases  </h2>
                    <p>MySQL, MongoDB</p>
                </div>
            </div>
            <div className='list1'>
                <img src= {frame}></img>
                <div className='listtext'>
                    <h2>Frameworks & Tools  </h2>
                    <p>Apache Spark, Git, Linux</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills