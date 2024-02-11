import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import './experience.css'
import { useSelector } from 'react-redux';

function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const {  portfolioData } = useSelector((state) => state.root);
    const { Project } = portfolioData;
  
      return (
        <div className='pt-3 pb-2 ps-5'>
            <SectionTitle title="Projects" />
            <div className="year d-flex gap-5 " style={{ paddingTop: '40px', paddingBottom: "70px", }}>
                <div className=' d-flex flex-column gap-5 '>
                    {Project.map((Project, index) => (
                        <div              
                           key={index}
                        onClick={() => {
                            setSelectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`fs-5 ${selectedItemIndex === index ? 'text-success border-start border-success p-2 border-3 '
                                : 'text-light'}`}>{Project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='d-flex flex-row gap-5 justify-content-between align-items-center'>
                    <img src={Project[selectedItemIndex].image} alt=""className='h-50 w-30' />
                    <div className='d-flex flex-column gap-5'>
                        <h1 className="text-warning fs-5">{Project[selectedItemIndex].title}</h1>
                        <a href={Project[selectedItemIndex].link}target='_blank' className="text-warning fs-5">View project</a>

                        <h1 className="text-light fs-5">{Project[selectedItemIndex].description}</h1>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project