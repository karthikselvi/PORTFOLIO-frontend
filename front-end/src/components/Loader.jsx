import React from 'react'

function Loader() {
  return (
    <div className=' d-flex align-items-center justify-content-center fixed top-50 start-50'style={{height:"100vh",width:"100vw"}}>
      <div className="d-flex gap-5 fs-1 fw-semibold ">
        <h1 className="text-warning k">K</h1>
        <h1 className="text-light s">S</h1>
        <h1 className="text-succes r">P</h1>
      </div>
    </div>
  )
}

export default Loader