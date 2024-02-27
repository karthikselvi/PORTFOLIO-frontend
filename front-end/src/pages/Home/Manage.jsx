import React, { useState } from 'react'
import Admin from '.';

function Manage() {
  const[isShown,setShown]=useState(false);
  return (
    <div className='bg-dark m-3 '>
        <div className='bg-dark d-flex flex-column align-items-center gap-4 m-3 '>
          <div className='border rounded-circle bg-success h-25 w-50 fs-1 ps-3 mt-3 text-light'>k</div>
          <button className='border ' onClick={()=>{
            setShown(!isShown);
          }}>Manage page</button>
          <div className='bg-dark'> 
           {isShown?<Admin/>:null}
</div>
        </div>

    </div>
  )
}

export default Manage