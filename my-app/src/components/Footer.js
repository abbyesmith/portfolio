import React from 'react'
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
                            <a href="abby.e.smith.85@gmail.com">
                                abby.e.smith.85@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <a className='footer-nav'>Home</a>
                                <br />
                                <a className='footer-nav'>About Me</a>
                                <br />
                                <a className='footer-nav'>Skills</a>
                            </div>
                            <div className='col'>
                                <a className='footer-nav'>Experience</a>
                                <br />
                                <a className='footer-nav'>Portfolio</a>
                                <br />
                                <a className='footer-nav'>References</a>
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