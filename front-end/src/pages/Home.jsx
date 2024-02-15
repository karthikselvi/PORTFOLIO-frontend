import React, { useRef } from 'react'
import Header from '../components/Header'
import Intro from './Home/Intro'
import About from './Home/About'
import Experience from './Home/Experience'
import Project from './Home/Project'
import Course from './Home/Course'
import Contact from './Home/Contact'
import Footer from './Home/Footer'
import LestSider from './Home/LestSider'
import { useSelector } from 'react-redux'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const pdfRef=useRef();
  const downloadPDF=()=>{
    const input =pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgdata=canvas.toDataURL('image/png');
      const pdf=new jsPDF('p','mm','a4',true);
      const pdfWidth=pdf.internal.pageSize.getWidth();
      const pdfHeight=pdf.internal.pageSize.getHeight();
      const imgWidth=canvas.width;
      const imgHeight=canvas.height
      const ratio =Math.min(pdfWidth / imgWidth,pdfHeight/imgHeight);
      const imgX =(pdfWidth-imgWidth*ratio)/2;
      const imgY=30;
      pdf.addImage(imgdata,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save('portfolio.pdf');
    });
  };

  return (
    <div ref={pdfRef}>
      <Header />

      {portfolioData && (<div 
      style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
        <Intro />
        <About />
        <Experience />
        <Project />
        <Course />
        <Contact />
        <div className='d-flex justify-content-center mt-3 me-2'>
          <button className='btn btn-secondary' onClick={downloadPDF}>Download PDF
          </button>
        </div>

        <Footer />
        
        <LestSider />
      </div>
      )}
    </div>
  )
}

export default Home