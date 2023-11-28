import React from 'react'
import './intro.css';
import bg from '../../full2.jfif';
const Intro = () => {
  return (
    <section id = "intro">
        <div className='section1'>
            <span className='hello'>Hello,</span><br></br>
            <span className='intro'>I am <span className='name'>Yasaswini</span><br></br> Full Stack Developer </span><br></br>
            <span className='para'> I am a skilled full stack developer with experience in creating user friendly web applications using HTML, CSS, JavaScript, React, Node.js, SQL</span><br></br><br></br>
            <button className='hire'>Hire Me</button>
        </div>
        <img src={bg} className='img'/>
    </section>
  )
}

export default Intro