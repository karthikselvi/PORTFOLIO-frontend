import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import './experience.css'
import { useSelector } from 'react-redux';

function Experience() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const {  portfolioData } = useSelector((state) => state.root);
    const { Experience} = portfolioData;
  
    return (
        <div className='ps-5'>
            <SectionTitle title="Experience" /><br />
            <div className="year d-flex gap-5 pb-4 pt-3">
                <div className=' title d-flex flex-column gap-5 '>
                    {Experience.map((Experience, index) => (
                        <div key={index}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }} className='cursor-pointer'>
                            <h1 className={`fs-5 ${selectedItemIndex === index ? 'text-success border-start border-success p-2 border-3'
                                : 'text-light'}`}>{Experience.period}</h1>
                        </div>
                    ))}
                </div>
                <div className='d-flex flex-column gap-5'>
                    <h1 className="text-warning fs-4">{Experience[selectedItemIndex].title}</h1>
                    <h1 className="text-light fs-4">{Experience[selectedItemIndex].company}</h1>
                    <p className='text-light fs-5'>{Experience[selectedItemIndex].description}</p>
                </div>
            </div>
        </div>
    )
}

export default Experience