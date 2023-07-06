import React from "react";
//Think about adding icons that represent the skills, in the services videos, styling in part 2//
const Services = () => {
    return(
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Design</h3>
                                <p>Web design talk</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Development</h3>
                                <p>Web dev talk</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Another Thing</h3>
                                <p>Keep talking</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Thing 4</h3>
                                <p>Talk Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services