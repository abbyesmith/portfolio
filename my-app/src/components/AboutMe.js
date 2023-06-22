import React from 'react'
import AbbyVernal from '../AbbyVernal.jpeg'

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className = "profile-img" src={AbbyVernal} alt="Abby Smith at Vernal Falls"/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='about-header'>About Me</h1>
                    <p>Hello! I'm Abby, a software engineer who is passionate about problem-solving and using logic to create innovative solutions. With a strong background in JavaScript, React, Python, Flask, HTML, and CSS, I thrive on developing intuitive and user-friendly applications.</p>
                    <p>My journey into software engineering took a unique path. Before transitioning into the tech industry, I spent eleven years as a secondary math teacher, where I honed my communication and collaboration skills. Guiding and inspiring students to think critically and apply their knowledge in real-world scenarios became my forte. Whether it was leveraging trigonometry to enhance accessibility features in our school or utilizing geometry concepts to design and building custom cabinetry for Habitat for Humanity, I always encouraged my students to embrace creativity and problem-solving.</p>
                    <p>Through my experience as an educator, I gained invaluable leadership and communication skills, as well as a fresh perspective on approaching challenges. I bring this adaptability and resilience to my work as a software engineer, where I embrace detailed and focused problem-solving while maintaining a patient, collaborative, and empathetic approach as a team member.</p>
                    <p>When I'm not immersed in coding, I love exploring my culinary skills by trying out new recipes. Additionally, I find joy in attending live theater performances and immersing myself in the beauty of the great outdoors.</p>
                    <p>I'm excited to continue my journey as a software engineer, combining my technical expertise, problem-solving mindset, and passion for creating meaningful solutions to contribute to the success of your projects. Let's collaborate and make an impact together!</p>

                </div>

            </div>
            
        </div>
    )
}

export default AboutMe