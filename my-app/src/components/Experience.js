import React from "react";
import resume from "/Users/abbysmith/Development/code/portfolio/my-app/src/components/resume.pdf"

const Experience = () => {

    const handleResumeDownload = () => {
        // Programmatically trigger the download action
        const link = document.createElement("a");
        link.href = resume;
        link.download = "resume.pdf";
        link.click();
    };

    return(
        <div id = "experience" className="experience">
            <div className="d-flex justify-content-center align-items-center">
                <h1>Experience</h1> 
            </div>
            <div className="resume-container">
                    <button className="resume-btn" onClick={handleResumeDownload}>Resume</button>
                </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2007-2011</h3>
                        <p>Attended Radford University and obtained a BS in mathematics. Graduated second in the program.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2011-2022</h3>
                        <p>Taught secondary math in Pulaski County Public Schools (VA) and JeffCo Public Schools (CO).</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2022-2023</h3>
                        <p>Wrote and edited digital curriculum for asynchronous learning.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2023</h3>
                        <p>Attended and graduated from Flatiron School, a 15 Week intensive Full-Stack Software Engineering program.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience