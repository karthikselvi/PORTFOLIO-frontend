import React from 'react'

function Footer() {
    return (
        <div className='mt-5 pt-5'> 
            <div style={{ height: "1px", width: "100%", backgroundColor: "grey",}}></div>
            <div className='d-flex flex-column justify-content-center align-items-center mt-2 '>
                <h1 className="text-light fs-6">Design & Developed by</h1>
                <h1 className="text-light fs-6">Karthik Selvi</h1>
            </div>
        </div>
    )
}

export default Footer