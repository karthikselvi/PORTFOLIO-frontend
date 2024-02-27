import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() { 
    
    const {  portfolioData } = useSelector((state) => state.root);
    const { Contact } = portfolioData;
    const { Name,Age,Gender,Email,Mobile,Address } = Contact;
  
  
    return (
        <div className='ps-5  pt-2'>
            <SectionTitle title="Get in touch" />
            <div className='d-flex flex-row justify-content-between pt-3 pb-3 border shadow border-black p-3'>

                <div >{
                    Object.keys(Contact).map((key, index) => (
                        key!=="_id"&&(
                        <h1 key={index}
                        >
                            <span className='text-success fs-6'>{key}:</span>{" "}
                            <span className='text-success fs-6'>{Contact[key]}</span>
                        </h1>)
                    ))}</div>
                <div style={{ height: "400px", width: "400px" }} className='me-5'>

<dotlottie-player src="https://lottie.host/74fed069-90cc-459f-81a8-1ec4bdd2800b/jTgMJ7u2qp.json"
                        background="transparent" speed="1"
                        loop autoplay></dotlottie-player>
                        </div>
            </div>

        </div>
    )
}

export default Contact