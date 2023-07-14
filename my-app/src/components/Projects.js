import React, { useState } from 'react';
import graphr from '../images/Graphr.png';
import graphrDemo from '../images/GraphrDemo.mp4';
import pythonQuest from '../images/Quest.png';
import pythonQuestDemo from '../images/QuestDemo.mp4';
import review from '../images/Review.png';
import reviewDemo from '../images/ReviewDemo.mp4';
import portfolioSite from '../images/PortfolioScreenshot.png';
import info from '../images/infomationIcon.png';
import Modal from 'react-modal';

const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        let content = null;
        if (project === 'graphr') {
        content = (
            <div className='popupbox'>
                <h1>Graphr (2023)</h1>
                <iframe className = "project-demo-video" src={graphrDemo} frameborder="0" allowfullscreen>Demo</iframe>
                <p>
                    This is a student-facing app designed to help students digitally complete their traditional graphing homework.
                </p>
                <b>Skills Used:</b>
                <ul>
                    <li>Utilized JavaScript, React, Python, Flask and ChartJS to create an interactive graphing application</li>
                    <li>Stores user data with SQLAlchemy</li>
                    <li>Users creates accounts with encrypted password with Bcrypt as outlined in this <a href="https://dev.to/abbyesmith/password-hashing-using-bcrypt-in-python-2i08" className="hyperlink">blog post</a></li>
                    <li>EmailJS is integrated to allow students to contact their instructor without leaving the site</li>
                </ul>
                <b>GitHub:</b>{' '}
                <a className="hyperlink" onClick={() => window.open('https://github.com/abbyesmith/graphr_3.0')}>
                    https://github.com/abbyesmith/graphr_3.0
                </a>
            </div>
        );
        } else if (project === 'pythonQuest') {
        content = (
            <div className='popupbox'>
                <h1>Quest for the Holy Grail (2023)</h1>
                <iframe className = "project-demo-video" src={pythonQuestDemo} frameborder="0" allowfullscreen>Demo</iframe>
                <p>CLI game that sends users on three challenges to win a seat at King Arthor’s Round Table</p>
                <b>Skills Used:</b>
                <ul>
                    <li>Stored data using SQLAlchemy tables to show all users who successfully completed the game and their score</li>
                    <li>Utilized Python to create an interactive command line</li>
                    <li>Included sound and color to the CLI to enhance usability and created a <a href="https://dev.to/abbyesmith/jazz-up-a-cli-project-with-color-and-sound-moj" className="hyperlink">blog post</a> to share with the community</li>
                    <li>Routes are used to increase usability of the app</li>
                    <li>Implemented a user login and password system</li>
                </ul>
                <b>GitHub:</b>{' '}
                <a className="hyperlink" onClick={() => window.open('https://github.com/abbyesmith/phase3_quest')}>
                https://github.com/abbyesmith/phase3_quest
                </a>
            </div>
        );
        } else if (project === 'review') {
            content = (
                <div className='popupbox'>
                    <h1>Algebra Review Class Site (2023)</h1>
                    <iframe className = "project-demo-video" src={reviewDemo} frameborder="0" allowfullscreen>Demo</iframe>
                    <p>High school algebra review website with resources available for students to review, monitor their progress and complete a self grading practice quiz.</p>
                    <b>Skills Used:</b>
                    <ul>
                        <li>Utilized JavaScript and React to create interactive features including learning logs and marking skills as mastered</li>
                        <li>Imports React, useEffect, useState and useCollapse</li>
                        <li>Imported Popup to allow for information to expand when user clicked</li>
                        <li>Designed a self grading practice quiz and wrote a how to <a href="https://dev.to/abbyesmith/how-to-create-a-practice-quiz-using-react-j25" className="hyperlink">blog post</a> to share with the community</li>
                    </ul>
                    <b>GitHub:</b>{' '}
                    <a className="hyperlink" onClick={() => window.open('https://github.com/abbyesmith/Algebra-1-Course-Review-Phase-2-Project')}>
                    https://github.com/abbyesmith/Algebra-1-Course-Review-Phase-2-Project
                    </a>
                </div>
        )
        } else if (project === 'portfolio') {
            content = (
                <div className='popupbox'>
                    <h1>Portfolio (2023)</h1>
                    <img className="project-image" src={portfolioSite} alt="Portfolio Screenshot" />
                    <p>Abby Smith's software engineering portfolio website.</p>
                    <b>Skills Used:</b>
                    <ul>
                        <li>Utilized JavaScript and React to create interactive features including downloadable content and popup boxes</li>
                        <li>Imports React, useEffect, and useState</li>
                        <li>Emailjs used for the contact section</li>
                    </ul>
                    <b>GitHub:</b>{' '}
                    <a className="hyperlink" onClick={() => window.open('https://github.com/abbyesmith/portfolio')}>
                    https://github.com/abbyesmith/portfolio
                    </a>
                    <br/>
                    <b>Link:</b>{''}
                    <a className="hyperlink" onClick={() => window.open('https://abbyesmith.github.io/portfolio/')}>https://abbyesmith.github.io/portfolio/</a>
                </div>
        )}

        setSelectedProject(content);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    };

    return (
        <div id = "portfolio" className="project-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper">
            <div className="project-image-box" onClick={() => openModal('graphr')}>
                <img className="project-image" src={graphr} alt="Graphr Project" />
                <div className="overflow"></div>
                <img className="project-info" src={info} alt="information icon" />
            </div>
            <div className="project-image-box" onClick={() => openModal('portfolio')}>
                <img className="project-image" src={portfolioSite} alt="Portfolio" />
                <div className="overflow"></div>
                <img className="project-info" src={info} alt="information icon" />
            </div>
            <div className="project-image-box" onClick={() => openModal('pythonQuest')}>
                <img className="project-image" src={pythonQuest} alt="CLI Game Python Quest Screenshot" />
                <div className="overflow"></div>
                <img className="project-info" src={info} alt="information icon" />
            </div>

            <div className="project-image-box" onClick={() => openModal('review')}>
                <img className="project-image" src={review} alt="Algebra Class review site screenshot" />
                <div className="overflow"></div>
                <img className="project-info" src={info} alt="information icon" />
            </div>
            </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="project-popupbox"
                    overlayClassName='modal-overlay'
                    >
            <div className='project-popupbox'>{selectedProject}</div>
            <div className='popupbox'>
                <button className='close-button' onClick={closeModal}>Close</button>
                
            </div>
        </Modal>
        </div>
        </div>
    );
};

export default Projects;
