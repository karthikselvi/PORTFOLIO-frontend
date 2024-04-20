//import React from 'react'
import Intro from './Intro'
import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './intro.css'
import { useSelector } from 'react-redux';
import Login from '../Admin/Login';
import SectionTitle from '../../components/SectionTitle';


function Download() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { Intro, Contact, Course, Experience, Project, About } = portfolioData;
    const { firstName, lastName, welcomeText, description, caption } = Intro;
    const { lottieUrl, description1, description2, skills } = About;

    const [isShown, setIsShown] = useState(true);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const pdfRef = useRef();
    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgdata = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a3', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 50;
            pdf.addImage(imgdata, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('portfolio.pdf');
        });
    };


    return (
        <div className='m-2 mt-5 pt-4' >
            <div className='d-flex justify-content-center '>
                <button className='btn btn-secondary' onClick={downloadPDF}>Download PDF
                </button>
            </div><br />
            <div className='border border-danger ' ref={pdfRef}>
                <div className='pt-3 d-flex flex-row justify-content-between gap-4 border border-danger border-bottom-0 '>
                    <div className=' d-flex flex-column align-item-center gap-4 ps-5'>
                        <h1 className='fs-2  text-light fw-semibold '>{firstName || ""} {lastName || ""}</h1>
                        <h3 className='fs-4 text-light '>{caption || ""}</h3>
                        <p className='fs-6 text-light '>{description || ""}</p>
                    </div>
                </div>
                <div className='pt-2 ps-5  border border-danger border-bottom-0 border-top-0'>
                    <div className='pt-2'>
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
                <div className='d-flex pt-5 '>
                    <div className='ps-5   border-bottom-0 border-top-0'>
                        <SectionTitle title="Education" />
                        <div className="year d-flex gap-5 pb-2 pt-2" >
                            <div className=' d-flex flex-column '>
                                {Course.map((Course, index) => (
                                    <div
                                        key={index}

                                        className='cursor-pointer p-3'>
                                        <ul>
                                            <li>
                                                <h1 className=" fs-6 text-light">{Course.title}</h1>
                                                <h1 className=" fs-6 text-light">{Course.institution}</h1>
                                                <h1 className=" fs-6 text-light">{Course.duration}</h1>
                                                <h1 className=" fs-6 text-light">{Course.Percentage}</h1>
                                            </li>
                                        </ul>


                                    </div>
                                ))}
                            </div>
                            {/* <div className='d-flex flex-row gap-5  align-items-center'>
                            <div className='d-flex flex-column gap-5'>
                                <p className='text-light'>i have been working with 3 yrs.as i am a developer i learnt lot of things inthis company</p>
                            </div>
                            <img src={Course[selectedItemIndex].image} alt=""className='h-50 w-30' />

                        </div> */}
                        </div>

                    </div>

                </div>
                <div className='pt-3 pb-2 ps-5  border border-danger border-bottom-0 border-top-0'>
                    <SectionTitle title="Projects" />
                    <div className="year d-flex gap-5 " >
                        <div className=' d-flex flex-column  '>
                            {Project.map((Project, index) => (
                                <div key={index} >
                                    <ul>
                                        <li>
                                            <h1 className='fs-6 text-light'>{Project.title}</h1>
                                            {/* <img src={Project.image} alt="" className='h-50 w-30' /><br /> */}
                                            <a href={Project.link} target='_blank' className="text-success fs-6">View project</a>
                                            <a href={Project.code} target='_blank' className='text-danger'>Code</a>
                                            <h1 className=" fs-6 text-light">{Project.description}</h1>

                                        </li>
                                    </ul>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className='ps-5  border border-danger border-top-0'>
                    <SectionTitle title="Get in touch" />
                    <div className='d-flex flex-row justify-content-between '>

                        <div >{
                            Object.keys(Contact).map((key, index) => (
                                key !== "_id" && (
                                    <h1 key={index}
                                    >
                                        <span className=' fs-6 text-light'>{key}:</span>{" "}
                                        <span className=' fs-6 text-light'>{Contact[key]}</span>
                                    </h1>)
                            ))}</div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Download