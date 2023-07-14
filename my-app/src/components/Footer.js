import React from 'react'
import { Link} from 'react-scroll'
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

const Footer = () => {
    return (
        <div className = "footer">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <p>
                                Arvada, Colorado
                            </p>
                        </div>
                        <div className='d-flex'>
                            <a href="mailto:abby.e.smith.85@gmail.com">
                                abby.e.smith.85@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link smooth = {true} to="home" offset = {0} className="nav-link" href="#">Home</Link>
                                <Link smooth = {true} to="about" offset = {-80} className="nav-link" href="#">About Me</Link>
                                <Link smooth = {true} to="skills" offset = {-80} className="nav-link" href="#">Languages</Link>
                            </div>
                            <div className='col'>
                                <Link smooth = {true} to="experience" offset = {-80} className="nav-link" href="#">Experience</Link>
                                <Link smooth = {true} to="portfolio" offset = {-80} className="nav-link" href="#">Portfolio</Link>
                                <Link smooth = {true} to="references" offset = {-75} className="nav-link" href="#">References</Link>
                                <Link smooth = {true} to="contact" offset = {-30} className="nav-link" href="#">Contact</Link>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <FacebookShareButton 
                                url={"https://placekitten.com/g/200/300"}
                                quote={"Abby Smith, Full-Stack Web Developer"}
                                hashtag='#openforwork'
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton 
                                url={"https://placekitten.com/g/200/300"}
                                title={'Abby Smith, Full-Stack Web Developer'}
                                hashtag='#openforwork'
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton 
                                url={"https://placekitten.com/g/200/300"}
                                title={"Abby Smith, Full-Stack Web Developer"}
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton 
                                url={"https://placekitten.com/g/200/300"}
                                title={"Abby Smith, Full-Stack Web Developer"}
                                summary='#openforwork'
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>

                        </div>
                        <p className='pt-3 text-center'>
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp;Abby Smith | All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer