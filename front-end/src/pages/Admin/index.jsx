import React from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProject';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';


function Admin() {
    const {portfolioData } = useSelector((state) => state.root);

  return (
    <div>
        <Header/>
        <h1 className='text-warning ms-5 mt-5 fs-2 text-center'>Portfolio Admin</h1>
        {portfolioData &&
        <div className='mt-2 p-5 text-light'> 
            <Tabs defaultActiveKey='1' >
                {/* <TabPane tab="Intro" key="1">
                    <AdminIntro/>
                </TabPane> */}
                <TabPane tab="About" key="2">
                   <AdminAbout/>
                </TabPane>
                <TabPane tab="Experience" key="3">
                   <AdminExperiences/>
                </TabPane>
                <TabPane tab="Project" key="4">
                   <AdminProjects/>
                </TabPane>
                {/* <TabPane tab="Education" key="5">
                   <AdminCourses/>
                </TabPane> */}
                {/* <TabPane tab="Contact" key="6">
                   <AdminContact/>
                </TabPane> */}


            </Tabs>
        </div>}
    </div>
  )
}

export default Admin