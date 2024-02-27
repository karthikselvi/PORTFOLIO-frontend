import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
// import AdminExperiences from "./src/pages/Admin/AdminExperiences";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { Course } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/update-course", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("http://localhost:3000/api/portfolio/add-course", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
        dispatch(ReloadData(true))
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("http://localhost:3000/api/portfolio/delete-course", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-end pb-5 ">
        <button
          className="buttton bg-success"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Course
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto ", gap: "20px" }}>
        {Course.map((Course) => (
          <div className="shadow border p-5 border-secondary ">
            <h1 className=" fs-3 text-warning">
              {Course.title}
            </h1>
            <hr />
            <h1 className=" fs-6 text-light">Company : {Course.title}</h1>
            <h1 className=" fs-6 text-light">Role : {Course.institute}</h1>
            <h1 className=" fs-6 text-light">Role : {Course.duration}</h1>
            <h1 className=" fs-6 text-light">{Course.percentage}</h1>
            <div className="d-flex justify-content-end gap-5 mt-5">
              <button
                className="bg-danger  "
                onClick={() => {
                  onDelete(Course);
                }}
              >
                Delete
              </button>
              {/* <button
                className="bg-success"
                onClick={() => {
                  setSelectedItemForEdit(Course);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Course" : "Add Course"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="institute" label="institute">
              <input placeholder="institute" />
            </Form.Item>
            <Form.Item name="duration" label="duration">
              <input placeholder="duration" />
            </Form.Item>
            <Form.Item name="percentage" label="percentage">
              <input placeholder="percentage" />
            </Form.Item>

            <div className="d-flex justify-content-end">
              <button
                className=" border border-primary text-primary"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-success">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminExperiences;
