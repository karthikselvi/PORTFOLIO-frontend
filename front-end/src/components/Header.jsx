import React, { useState } from 'react'
import About from '../pages/Home/About';
import Experience from '../pages/Home/Experience';
import Course from '../pages/Home/Course';

function Header() {
 // const[about,setAbout]=useState(true);
 // const[experience,setExperience]=useState(true);  

  return (
    <div className=' d-flex flex-row justify-content-between'>
       <h1 className='text-warning fs-2'>K</h1>
        <h1 className='text-light fs-2'>S</h1>
        <h1 className='text-success fs-2'>P</h1>
    </div>
  )
}

export default Header