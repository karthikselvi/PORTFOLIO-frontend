import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import './intro.css'
import { useSelector } from 'react-redux';

function About() {

  const {  portfolioData } = useSelector((state) => state.root);
  const { About } = portfolioData;
  const { lottieUrl, description1, description2, skills } = About;

  return (
    <div className='pt-3'>
      <SectionTitle title="About me" /><br />
      <div className="d-flex gap-5  ">
        <div style={{ height: "350", width: "400px" }}>
          <dotlottie-player src={lottieUrl}
            background="transparent"
            speed="1"
            loop autoplay>
          </dotlottie-player>
        </div>
        <div className='d-flex flex-column  justify-content-center gap-5' style={{ width: '400px' }}>
          <p>{description1||""} </p>
          <p>
            {description2||""}
          </p>
        </div>

      </div>
      <div style={{ paddingTop: "40px", paddingBottom: "50px" }}>
        <h1 className='fs-5 text-success'>Here are the few technologies I'have been working  with recently:</h1>
        <div className='d-flex flex-wrap gap-4 mt-5 '>
          {skills.map((skill, index) =>
          (
            <div key={index}
              className='border border-success' style={{ padding: "11px", borderRadius: "5px" }}>
              <h1 className='text-success fs-6 border-color-success'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About