import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() { 
    
    const {  portfolioData } = useSelector((state) => state.root);
    const { Contact } = portfolioData;
    const { Name,Age,Gender,Email,Mobile,Address } = Contact;
  
  
    return (
        <div>
            <SectionTitle title="Get in touch" />
            <div className='d-flex flex-row justify-content-between pt-3 pb-3'>

                <div >{
                    Object.keys(Contact).map((key, index) => (
                        key!=="_id"&&(
                        <h1 key={index}
                        >
                            <span className='text-success fs-6'>{key}:</span>{" "}
                            <span className='text-success fs-6'>{Contact[key]}</span>
                        </h1>)
                    ))}</div>
                <div style={{ height: "300", width: "300px" }}>

                    <dotlottie-player src="https://lottie.host/020c8b7e-aa91-4768-8d8e-0673109afd86/fiDY4NCsY2.json"
                     background="transparent"
                      speed="1"
                       loop autoplay></dotlottie-player></div>
            </div>

        </div>
    )
}

export default Contact