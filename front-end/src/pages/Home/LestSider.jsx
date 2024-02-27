import React, { useState } from 'react'
import Manage from './Manage';
import Admin from '../Admin';

function LestSider() {
    const[ismanage,setManage]=useState(false);

    return (
        <div className='position-fixed top-0 end-0  ps-3 mt-1'>
            <div className=' i d-flex flex-row   justify-content-between gap-5  '>
                <div className="d-flex flex-row gap-5 justify-content-between">
                    <a href="https://www.facebook.com/" target="_blank" className='link-underline-dark'>{" "}
                        <i className="ri-facebook-circle-fill text-secondary fs-4"></i></a>
                    {/* <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/"target="_blank" >{" "}
                        <i class="ri-mail-fill text-secondary fs-4" ></i></a> */}
                    <a href="https://www.instagram.com/___karthika___12/"target="_blank" className='link-underline-dark' >{" "}
                        <i className="ri-instagram-fill text-secondary fs-4"></i></a>
                    <a href="https://www.linkedin.com/in/karthik-selvi-27294a20a/"target="_blank" className='link-underline-dark' >{" "}
                        <i className="ri-linkedin-box-fill text-secondary fs-4"></i></a>
                    <a href="https://github.com/karthikselvi"target="_blank" className='link-underline-dark'>{" "}
                        <i className="ri-github-fill text-secondary fs-4"></i></a>
                    
                </div>
                <button className='rounded-circle me-2' onClick={()=>{
                    setManage(!ismanage);
                }}>K</button>
                
                {/* <div style={{ height: "100px", width: "1px", }} className='bg-secondary'></div> */}
            </div>
            {/* <div className=' d-flex flex-wrap' >
             {ismanage? <Manage/>:null}
                </div> */}
        </div>
    )
}

export default LestSider