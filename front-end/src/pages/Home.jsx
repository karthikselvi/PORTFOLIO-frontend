import React, { useRef, useState } from 'react'
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
import Download from './Home/Download'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Login from './Admin/Login'
import Admin from './Admin'


function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const [isShown, setIsShown] = useState(true);

  const pdfRef=useRef();

  return (    
          <div className='main'>
          <Header/>
          {portfolioData &&
          <div className='mt-2 p-5 ps-0 text-light ' > 
              <Tabs defaultActiveKey='1' tabPosition='left' size='large' >
                  <TabPane tab="Intro" key="1" className='text-light'>
                      <Intro/>
                  </TabPane>
                  <TabPane tab="About" key="2">
                     <About/>
                  </TabPane>
                  <TabPane tab="Experience" key="3">
                     <Experience/>
                  </TabPane>
                  <TabPane tab="Project" key="4">
                     <Project/>
                  </TabPane>
                   <TabPane tab="Education" key="5">
                     <Course/>
                  </TabPane> 
                  <TabPane tab="Contact" key="6">
                     <Contact/>
                  </TabPane> 
                  <TabPane tab="Download" key="7">
                     <Download/>
                  </TabPane>                   
                  </Tabs>
                  <Footer/>
                  <LestSider/>
          </div>}
      </div>
  
  )

}

export default Home