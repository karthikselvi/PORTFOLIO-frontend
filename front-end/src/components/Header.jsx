import React, { useState } from 'react'
import About from '../pages/Home/About';
import Experience from '../pages/Home/Experience';
import Course from '../pages/Home/Course';
import LestSider from '../pages/Home/LestSider';
import { NavLink } from 'react-router-dom';
import Download from '../pages/Home/Download';
import './header.css'

function Header() {
    // const[about,setAbout]=useState(true);
    // const[experience,setExperience]=useState(true);  
    const [resume, setResume] = useState(false);
    const downloadResume = () => {
        setResume(true);
    }

    return (

        <nav className="navbar navbar-expand-lg ms-2 shadow-sm position-fixed top-0  " style={{ backgroundColor: "transparent" }}>

            <div className='d-flex flex-column  '>
                <ul className="navbar-nav  ">
                    <li className="nav-item ">
                        <NavLink className="nav-link active text-light " aria-current="page" to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light " to="/intro">Intro</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/project">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/education">Education</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/download">Resume</NavLink>
                    </li>
                </ul>
            </div>
            <LestSider />

        </nav>

    )
}

export default Header