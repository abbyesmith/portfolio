import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import  "react-responsive-carousel/lib/styles/carousel.min.css"
import david from "../images/David.jpeg"
import taylor from "../images/Taylor.png"
import ben from "../images/Ben.png"
import matthew from "../images/Matthew.jpg"
import judy from "../images/Judy.png"
import matt from "../images/Matt.png"

const RecommedationsCarousel = () => {
    return (
        <Carousel 
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >
            
            <>
                <img src={david} alt="David Doan"/>
                <div className='myCarousel'>
                    <h3>David Doan</h3>
                    <p>Abby was one of the most hard working developer I've seen. There was no challenge she did not face head on, always striving to learn and grow as a software engineer. She is a quick learner and a phenomenal team member, she is a fantastic Javascript developer and any company would be lucky to have her!</p>
                    <p><i>Instructor, Flatiron School</i></p>
                </div>
                
            </>
            <>
                <img src={taylor} alt="Taylor Newman"/>
                <div className='myCarousel'>
                    <h3>Taylor Newman</h3>
                    <p>Abby has a knack for innovation and leads the way in solving complex challenges. Her technological literacy is top notch and her passion shows in her constant learning of new tools and skillsets. Any team will find her a valuable asset to the task of coding and web development and design.</p>
                </div>    
            </>
            <>
                <img src={matthew} alt="Matthew Clark"/>
                <div className='myCarousel'>
                    <h3>Matthew Clark</h3>
                    <p>As a programmer, learner, and team member, Abby always proves to be innovative, creative, and supportive. Anyone with the chance to work with her will only benefit from her presence of mind, and willingness to step up. I’d work with her in a heartbeat on any project that gave that opportunity. </p>
                </div>
            </>
            <>
                <img src={judy} alt="Judy Simms"/>
                <div className='myCarousel'>
                    <h3>Judy Simms</h3>
                    <p>Abby Smith is a gracious community builder. She casually includes all, never begrudges those who don’t want to join, and brings people together who would not normally become a community. I watched her build community in a high school tech class she volunteered for and among adults throughout the school with easy charm.</p>
                </div>
            </>
            <>
                <img src={ben} alt="Ben Tryon"/>
                <div className='myCarousel'>
                    <h3>Ben Tryon</h3>
                    <p>Abby has a thorough understanding of React.js, Python and SQLAlchemy. She helped problem solve table-relationship bugs and event handling in a full stack application that pivoted numerous times. </p>        
                </div>
            </>
            <>
                <img src={matt} alt="Matt Daniels"/>
                <div className='myCarousel'>
                    <h3>Matt Daniels</h3>
                    <p>She puts in all the right ingredients, mixes it to what seems like perfection, then adds that extra special magical touch that you didn't realize was missing or needed until she made it happen. </p>
                </div>
            </>
        </Carousel>
    )
}

export default RecommedationsCarousel