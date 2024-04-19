import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import './experience.css'
import { useSelector } from 'react-redux';
import Footer from './Footer';

function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const {  portfolioData } = useSelector((state) => state.root);
    const { Project } = portfolioData;
  
      return (
        <div className='pt-3  ps-5 mt-5 '>
            <SectionTitle title="Projects" />
            <div className="year d-flex gap-5 " style={{ paddingTop: '40px', paddingBottom: "70px", }}>
                {/* <div className=' d-flex flex-column gap-5 '>
                    {Project.map((Project, index) => (
                        <div              
                           key={index}
                        onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className= {`fs-5 cursor-pointer ${selectedItemIndex === index ? 'text-success border-start border-success p-2 border-3 '
                                : 'text-light'}`}>{Project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='d-flex flex-row gap-5 justify-content-between align-items-center border shadow-lg border-black p-3'>
                    <img src={Project[selectedItemIndex].image} alt=""className='h-50 w-30' />
                    <div className='d-flex flex-column gap-5'>
                        <h1 className="text-warning fs-5">{Project[selectedItemIndex].title}</h1>
                        <a href={Project[selectedItemIndex].link}target='_blank' className="text-warning fs-5">View project</a>

                        <h1 className="text-light fs-5">{Project[selectedItemIndex].description}</h1>
                        
                    </div>
                </div> */}
<div style={{ display: "grid", gridTemplateColumns: "auto auto auto ", gap: "20px", }}>
{Project.map((Project,) => (
    <div className=' shadow-lg border border-secondary p-2 h-75 w-100' style={{overflow:"auto",}}>
        <h1 className='fs-3 text-warning'> {Project.title}</h1><hr /><br />
        {/* <img src={Project.image} alt="" className='text-center'/><br /><br /> */}
        <div className='d-flex gap-5 justify-content-between ps-3 pe-3'> 
         <a href={Project.link} target='_blank'> <button className='btn btn-success'>view demo</button></a>
       <a href=""> <button className='btn btn-danger'>Code</button></a></div>
       
        <br />
        <p className='fs-6 text-light'>{Project.description}</p><br />
        
    </div>
// </div>
))
}

{/* </div> */}
</div>

            </div>
            {/* <Footer/> */}

        </div>
    )
}

export default Project