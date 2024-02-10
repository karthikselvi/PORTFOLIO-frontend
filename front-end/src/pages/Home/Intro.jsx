import React from 'react'
import './intro.css'
import { useSelector } from 'react-redux';

function Intro() {
  const { loading,portfolioData } = useSelector((state) => state.root);
  const {Intro}=portfolioData;
  const { firstName,lastName,welcomeText,description,caption}=Intro;

  return (
    <div className='d-flex flex-row justify-content-between gap-4'>
    <div className=' d-flex flex-column align-item-center gap-4 p-4 '
     style={{}}>
     <h3 className='fs-5'>{welcomeText||""}</h3> 
     <h1 className='fs-1 text-warning fw-semibold'>{firstName||""} {lastName||""}</h1>
     <h3 className='fs-2 '>{caption||""}</h3> 
     <p>{description||""}</p>
      <button type="button" className="btn btn-outline-success btn-sm width-10">Get started</button>
</div>
<div style={{height:"300px",weight:"300px"}}>

    <dotlottie-player src="https://lottie.host/7db0f0ce-8c14-49dc-a070-32ce6be59dd1/g03Q5o4vlF.json"
     background="transparent" speed="1" 
     loop autoplay></dotlottie-player>
    </div>
    </div>
  )
}

export default Intro
