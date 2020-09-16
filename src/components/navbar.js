import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className="nav nav-pills ml-auto mr-auto rounded-pill bg-info">
                <li className="nav-item pl-3"><NavLink className=' text-white' to = '/'>Home</NavLink></li>
                <li className="nav-item pl-4"><NavLink className=' text-white' to = '/edu'>Education</NavLink></li>
                <li className="nav-item pl-4"><NavLink className=' text-white' to = '/exp'>Experience</NavLink></li>
                <li className="nav-item pl-4"><NavLink className=' text-white' to = '/skills'>Skills</NavLink></li>
                <li className="nav-item pl-4 pr-3"><NavLink className=' text-white' to = '/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )}


export default withRouter(Navbar)