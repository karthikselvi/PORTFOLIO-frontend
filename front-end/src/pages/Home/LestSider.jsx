import React from 'react'

function LestSider() {
    return (
        <div className='position-fixed bottom-0 start-0 ps-3'>
            <div className=' i d-flex flex-column align-items-center gap-2 '>
                <div className="d-flex flex-column gap-4">
                    <a href="https://www.facebook.com/" target="_blank" >{" "}
                        <i className="ri-facebook-circle-fill text-secondary fs-4"></i></a>
                    {/* <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/"target="_blank" >{" "}
                        <i class="ri-mail-fill text-secondary fs-4" ></i></a> */}
                    <a href="https://www.linkedin.com/in/karthik-selvi-27294a20a/"target="_blank" >{" "}
                        <i className="ri-instagram-fill text-secondary fs-4"></i></a>
                    <a href="https://www.instagram.com/___karthika___12/"target="_blank" >{" "}
                        <i className="ri-linkedin-box-fill text-secondary fs-4"></i></a>
                    <a href="https://github.com/karthikselvi"target="_blank" >{" "}
                        <i className="ri-github-fill text-secondary fs-4"></i></a>
                    
                </div>
                <div style={{ height: "100px", width: "1px", }} className='bg-secondary'></div>
            </div>
        </div>
    )
}

export default LestSider