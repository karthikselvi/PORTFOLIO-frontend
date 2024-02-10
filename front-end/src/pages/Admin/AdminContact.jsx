import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.Contact._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
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
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.Contact}
      >
        <Form.Item name="Name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="Gender" label="Gender">
          <input placeholder="Gender" />
        </Form.Item>
        <Form.Item name="Age" label="Age">
          <input placeholder="Age" />
        </Form.Item>
        <Form.Item name="Email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="Mobile" label="Mobile">
          <input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="Address" label="Address">
          <input placeholder="Address" />
        </Form.Item>

        <div className="d-flex justify-content-end " label="Welcome Text">
          <button className="bg-success text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
