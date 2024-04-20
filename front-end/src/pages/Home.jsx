import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Intro from './Home/Intro'
import About from './Home/About'
// import Experience from './Home/Experience'
import Project from './Home/Project'
import Course from './Home/Course'
import Contact from './Home/Contact'
import Footer from './Home/Footer'
import LestSider from './Home/LestSider'
import { useSelector } from 'react-redux'
import Download from './Home/Download'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Login from './Admin/Login'
import Admin from './Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Home() {
   const { loading, portfolioData } = useSelector((state) => state.root);
   const [isShown, setIsShown] = useState(true);

   const pdfRef = useRef();

   return (
      <div className='main'>
         {/* <Header/> */}
         {portfolioData &&
            <div className=' ms-2 p-4 ps-0 text-light ' >

               <Intro />
               <About />
               <Course />
               <Project />
               <Contact />
               <Footer />
            </div>}
      </div>

   )

}

export default Home