import React, { useState } from 'react'
import './intro.css'
import { useSelector } from 'react-redux';
import Login from '../Admin/Login';

function Intro() {
  const { loading,portfolioData } = useSelector((state) => state.root);
  const {Intro}=portfolioData;
  const { firstName,lastName,welcomeText,description,caption}=Intro;
  const [isShown, setIsShown] = useState(true);

  return (
    <div className='d-flex flex-row justify-content-between gap-5  pt-5'>
    <div className=' d-flex flex-column align-item-center gap-4 ps-5'
     style={{}}>
     <h3 className='fs-5 text-light'>{welcomeText||""}</h3> 
     <h1 className='fs-1 text-warning fw-semibold'>{firstName||""} {lastName||""}</h1>
     <h3 className='fs-2 text-light'>{caption||""}</h3> 
     <p className='fs-5 text-light'>{description||""}</p>
     <div>
     <button type="button" className="btn btn-outline-success btn-sm width-10">Get started</button>

     </div>
</div>
<div style={{height:"400px",weight:"400px"}}>

    <dotlottie-player src="https://lottie.host/0e67a932-0ddc-4320-8e6b-2a212c45ae3f/yhSrhlJ5iT.json"
     background="transparent" speed="1" 
      loop autoplay></dotlottie-player>
    </div>
    {/* <div>
    <button onClick={() => {
         // console.log("The value of isShown:", isShown);
          setIsShown(!isShown);
        }}>
        Login
      </button>
      {isShown ? null :<Login/>}
    </div> */}
    </div>
  )
}

export default Intro
