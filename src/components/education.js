import React from 'react';
import '../css/education.css'

const Education = () => {
    return (
            <div>
                <h1 className='text-white text-center'>Education &darr;</h1>
                <div className="timeline">
                <div className="container left">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm"><h2>B. Tech</h2></div>
                                <div className="col-sm"><h6 className='mb-2'>NIT Warangal</h6><p>2014 - 18</p></div>
                                <div className="col-sm"><p className='mb-0'>CGPA:</p><h1>7.78</h1></div>
                            </div>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm"><h2>Intermediate</h2></div>
                                <div className="col-sm"><h6 className='mb-2'>Maharshi DBL Inter College</h6><p>2012</p></div>
                                <div className="col-sm"><p className='mb-0'>Percentage:</p><h1>81.4%</h1></div>
                            </div>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm"><h2>High School</h2></div>
                                <div className="col-sm"><h6 className='mb-2'>Maharshi DBL Inter College</h6><p>2010</p></div>
                                <div className="col-sm"><p className='mb-0'>Percentage:</p><h1>84.0%</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Education
