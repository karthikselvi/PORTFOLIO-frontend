import React, { useState } from 'react'
import About from '../pages/Home/About';
import Experience from '../pages/Home/Experience';
import Course from '../pages/Home/Course';
import LestSider from '../pages/Home/LestSider';
import { NavLink } from 'react-router-dom';
import Download from '../pages/Home/Download';

function Header() {
 // const[about,setAbout]=useState(true);
 // const[experience,setExperience]=useState(true);  
 const [resume,setResume]=useState(false);
 const downloadResume=()=>{
  setResume(true);
 }

  return (
    <nav className="navbar navbar-expand-lg  py-3 ms-2 shadow-sm ">

    <div className=' d-flex  justify-content-between'>
       
        <div className='d-flex flex-column '>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link active text-light" aria-current="page" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light border-outline-dark" to="/intro">Intro</NavLink>
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
                        {/* <button onClick={downloadResume}>Download {resume ? <Download/> :null}</button> */}
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/download">Resume</NavLink>
                        </li>
                    </ul>
        </div>
        <LestSider/>
     {/* <button className='rounded-pill'>K</button> */}

    </div>
    </nav>

  )
}

export default Header