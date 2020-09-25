import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className='bg-con'>
            <h1 className='text-white text-center'>Contact Me</h1>
            <div className='cont'>
                <div className='social-container'>
                    <a href="https://github.com/sk-agnihotri" className="github"><i className="fa fa-github fa-2x"></i></a>
                    <a href="https://join.skype.com/invite/iKBaVkBBDv3Z" className="skype"><i className="fa fa-skype fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/s-k-agnihotri" className="linkedin"><i className="fa fa-linkedin fa-2x"></i></a>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=agnihotri.s.k.b@gmail.com" className="email"><i className="fa fa-envelope fa-2x"></i></a>
                </div>
            </div>
        </div>
    ); 
}

export default Contact;