import React from "react";
//Think about adding icons that represent the skills, in the services videos, styling in part 2//
const Services = () => {
    return(
        <div id = "skills" className="services">
            <h1 className="py-5">Languages</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>JavaScript</h3>
                                {/* <p>Web design talk</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>React</h3>
                                {/* <p>Web dev talk</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>Python</h3>
                                {/* <p>Keep talking</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>Flask</h3>
                                {/* <p>Talk Talk</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>SQL</h3>
                                {/* <p>Keep talking</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>HTML</h3>
                                {/* <p>Keep talking</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="box">
                                <h3>CSS</h3>
                                {/* <p>Keep talking</p> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services