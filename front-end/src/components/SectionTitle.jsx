import React from 'react'

function SectionTitle({title}) {
  return (
    <div className="d-flex align-items-center gap-3">
        <h1 className='fs-4  fw- text-warning'>{title}</h1>
        <div className="bg-success"style={{width:"200px",height:"1px"}}></div>
    </div>
  )
}

export default SectionTitle