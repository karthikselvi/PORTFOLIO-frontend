import React, { useState } from 'react'
// import Manage from './Manage';
import Admin from '../Admin';

function LestSider() {
    const[ismanage,setManage]=useState(false);

    return (
        <div className='position-fixed top-0 end-0  ps-3 mt-1' style={{backgroundColor:"transparent"}}>
           {/* <div className=' i d-flex flex-row   justify-content-between gap-5  '> */}
                {/* <div className=" position-fixed top-0 end-0  ps-3 mt-1 d-flex flex-row gap-5 justify-content-between"> */}
                    <a href="https://www.facebook.com/" target="_blank" className='link-underline-dark m-3'>{" "}
                        <i className="ri-facebook-circle-fill text-secondary fs-4"></i></a>
                    <a href="https://www.instagram.com/___karthika___12/"target="_blank" className='link-underline-dark m-3' >{" "}
                        <i className="ri-instagram-fill text-secondary fs-4"></i></a>
                    <a href="https://www.linkedin.com/in/karthik-selvi-27294a20a/"target="_blank" className='m-3 link-underline-dark' >{" "}
                        <i className="ri-linkedin-box-fill text-secondary fs-4"></i></a>
                    <a href="https://github.com/karthikselvi"target="_blank" className='m-3 link-underline-dark'>{" "}
                        <i className="ri-github-fill text-secondary fs-4"></i></a>
                    {/* </div> */}
                {/* <button className='rounded-circle me-2' onClick={()=>{
                    setManage(!ismanage);
                }}>K</button>
                 */}

            
        </div>
    )
}

export default LestSider