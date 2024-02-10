import React from 'react'
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


function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (<div 
      style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
        <Intro />
        <About />
        <Experience />
        <Project />
        <Course />
        <Contact />
        <Footer />
        <LestSider />
      </div>
      )}
    </div>
  )
}

export default Home