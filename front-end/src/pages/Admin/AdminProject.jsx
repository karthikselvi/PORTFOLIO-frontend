import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Modal, message } from 'antd'
import FormItem from 'antd/es/form/FormItem';
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice"
import axios from 'axios';


function AdminProjects() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root)
    const { Project} = portfolioData;
    const [shoAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type,setType]=React.useState("add");

    const onFinish = async (values) => {
        try {
            const tempTechnologies=values.technologies.split(",");
            values.technologies=tempTechnologies;
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/update-project", {
                    values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/add-project",
                    values);
            }
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModal(false);
                setSelectedItemForEdit(null)
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message)
        }
    }
    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/delete-project", {
                _id: item._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData());
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    return (
        <div className=''>
            <div className="d-flex justify-content-end pb-5">
                <button className="button bg-success text-light"
                    onClick={() => {
                        setSelectedItemForEdit(false);
                        setShowAddEditModal(true);
                    }}>
                    Add Project
                </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto ", gap: "20px" }}>

                {Project.map((Project,) => (
                    <div className='shadow-lg border border-secondary  p-5 '>
                        <h1 className='fs-3 text-warning'> {Project.title}</h1><hr /><br />
                        <img src={Project.image} alt="" className='height-60 width-60'/><br /><br />
                        <a href={Project.link} target='_blank'>Link: {Project.link}</a><br /><br />
                        
                        {/* <h1 className='fs-6'> Company: {Project.description}</h1><br /> */}
                        <h1 className='fs-6 text-light'>{Project.description}</h1><br />
                        <div className="d-flex justify-content-end gap-3 mt-4">
                            {/* <button className='bg-success' onClick={() => {
                                setSelectedItemForEdit(Project);
                                setShowAddEditModal(true);
                                setType("edit")
                            }}>Edit</button> */}
                            <button className='bg-danger text-light' onClick={() => {
                                onDelete(Project)
                            }}>
                                Delete</button>
                        </div>
                    </div>

                ))
                }

            </div>
            {(type==="add"|| selectedItemForEdit)&&(
            <Modal open={shoAddEditModal}
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer={null}
                onCancel={() => setShowAddEditModal(false)}
            >
                <Form layout='vertical' onFinish={onFinish} 
                initialValues={
                    {
                        ...selectedItemForEdit,
                       // technologies:selectedItemForEdit?.technologies
                    }
                        }>
                    <FormItem name='title' label="title" >
                        <input placeholder='title' />
                    </FormItem>
                    <FormItem name='image' label="image" >
                        <input placeholder='image' />
                    </FormItem>
                    <FormItem name='link' label="Link" >
                        <input placeholder='link' />
                    </FormItem>
                    <FormItem name='description' label="Description" className='text-dark'>
                        <textarea name="" id="" cols="30" rows="10"placeholder='description'/>
                    </FormItem>
                    {/* <FormItem name='technologies' label="technologies" >
                        <input placeholder='technologies' /> */}
                    {/* </FormItem> */}

                    <div className="d-flex justify-content-end gap-4">
                        <button className='border border-primary text-primary' onClick={() => {
                            setShowAddEditModal(false)
                        }}>Cancel</button>
                        <button className='bg-success text-light'>
                            {selectedItemForEdit ? "Update" : " Add"}
                        </button>
                    </div>
                </Form>

            </Modal>)}

        </div>
    )
}

export default AdminProjects
