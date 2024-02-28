import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import './experience.css'
import { useSelector } from 'react-redux';

function Course() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const {  portfolioData } = useSelector((state) => state.root);
    const { Course } = portfolioData;
    
  
    return (
        <div className='ps-5  pt-3'>
            <SectionTitle title="Education" />
            <div className="year d-flex gap-5 pb-5 pt-5" >
                <div className=' d-flex flex-column gap-4'>
                    {Course.map((Course, index) => (
                        <div                   
                        key={index}
                        onClick={() => {
                           setSelectedItemIndex(index);
                        }} className='cursor-pointer p-3'>
                            <h1 className={`fs-5 ${selectedItemIndex === index ? 'text-success border-start border-success p-2 border-3'
                                : 'text-light'}`}>{Course.title}</h1>
                        </div>
                    ))}
                </div>
                <div className='d-flex flex-row gap-5  align-items-center'>
                    <div className='d-flex flex-column gap-5 border shadow border-black p-3'>
                        <h1 className="text-warning fs-5">{Course[selectedItemIndex].title}</h1>
                        <h1 className="text-light fs-5">{Course[selectedItemIndex].institution}</h1>
                        <h1 className="text-light fs-5">{Course[selectedItemIndex].duration}</h1>
                        <h1 className="text-light fs-5">{Course[selectedItemIndex].Percentage}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Course