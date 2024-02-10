import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
// import AdminExperiences from "./src/pages/Admin/AdminExperiences";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { Experience } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("http://localhost:3000/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("http://localhost:3000/api/portfolio/add-experience", values);
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
      const response = await axios.post("http://localhost:3000/api/portfolio/delete-experience", {
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
      <div className="d-flex justify-content-end pb-5">
        <button
          className="buttton bg-success"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto ", gap: "20px" }}>
        {Experience.map((Experience) => (
          <div className="shadow border p-5 border-secondary ">
            <h1 className=" fs-3 text-warning">
              {Experience.period}
            </h1>
            <hr />
            <h1 className=" fs-6">Company : {Experience.company}</h1>
            <h1 className=" fs-6">Role : {Experience.title}</h1>
            <h1 className=" fs-6">{Experience.description}</h1>
            <div className="d-flex justify-content-end gap-5 mt-5">
              <button
                className="bg-danger  "
                onClick={() => {
                  onDelete(Experience);
                }}
              >
                Delete
              </button>
              {/* <button
                className="bg-success"
                onClick={() => {
                  setSelectedItemForEdit(Experience);
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
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
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
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
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
