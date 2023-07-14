import React from 'react'
import AbbyVernal from '../images/AbbyVernal.jpeg'

const AboutMe = () => {
    return (
        <div id = "about" className="container py-5">
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className = "profile-img" src={AbbyVernal} alt="Abby Smith at Vernal Falls"/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-header'>About Me</h1>
                        <p>Hello! I'm Abby, a software engineer passionate about problem-solving and creating innovative solutions. With expertise in JavaScript, React, Python, Flask, HTML, and CSS, I develop intuitive and user-friendly applications.</p>
                        <p>Before transitioning to software engineering, I spent eleven years as a secondary math teacher, fostering critical thinking and creativity in my students. I bring my adaptability, resilience, and strong communication skills to my work as a software engineer.</p>
                        <p>When I'm not coding, I enjoy exploring new recipes in the kitchen and attending live theater performances. I'm also a proud cat lover, cherishing the company of my two feline companions.</p>
                        <p>Let's collaborate and make an impact together as I continue my journey as a software engineer!</p>
                </div>

            </div>
            
        </div>
    )
}

export default AboutMe