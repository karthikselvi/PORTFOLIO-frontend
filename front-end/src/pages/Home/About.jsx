import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import './intro.css'
import { useSelector } from 'react-redux';
import Footer from './Footer';

function About() {

  const {  portfolioData } = useSelector((state) => state.root);
  const { About } = portfolioData;
  const { lottieUrl, description1, description2, skills } = About;

  return (
    <div className='  ps-5 '>
      <SectionTitle title="About me" /><br />
      <div className="d-flex gap-5  ">
        <div style={{ height: "300", width: "300px" }}>
          <dotlottie-player src={lottieUrl}
            background="transparent"
            speed="1"
            loop autoplay>
          </dotlottie-player>
        </div>
        <div className='d-flex  fs-5 flex-column  justify-content-center gap-5 ' style={{ width: '700px' }}>
          <p className='text-light'>{description1||""} </p>
          <p className='text-light'>
            {description2||""}
          </p>
        </div>

      </div>
      <div style={{ paddingTop: "20px"}}>
        <h1 className='fs-5 text-success'>Here are the few technologies I'have been working  with recently:</h1>
        <div className='d-flex flex-wrap gap-4 mt-3 '>
          {skills.map((skill, index) =>
          (
            <div key={index}
              className='border border-success' style={{ padding: "11px", borderRadius: "5px" }}>
              <h1 className='text-success fs-6 border-color-success'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer/> */}

    </div>
  )
}

export default About