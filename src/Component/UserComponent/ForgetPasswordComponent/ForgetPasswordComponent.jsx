import tHn from "../../../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ForgetPassword = (props) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForgetsubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/send-reset-password-email`,
        formData
      );
      console.log("Signup successful!", response);
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      // console.error("Signup failed!", error.response.data);
      toast.error(error?.response?.data?.message);
    }
    
    setFormData({
      email: "",
    });
    // Add your form submission logic here
    
  };
  const handleClose = () => {
    setFormData({
      email: "",
    });
    props.onHide();
  };
  const handleLoginModalOpen = () => {
    props.switchToLogin(); // Call the callback function to switch to the login modal
    handleClose();
  };
  return (
    <>
      <Modal {...props} size="lg" centered dir="rtl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h1>{tHn.Password_recovery}</h1>
          </div>
          <div className="text-center">
            {/* <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleLoginModalOpen(true)}
              >
                {tHn.sign_up}
              </span>
              במקום?
            </div> */}
          </div>
          <Form onSubmit={(e) => handleForgetsubmit(e)}>
            <Form.Group className="mt-4" controlId="formEmail">
              <Form.Label className="text-center">
                קבל אימייל להגדרת סיסמה חדשה.
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button className="my-4 px-4" variant="primary" type="submit">
                {tHn.Reset_Password}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ForgetPassword;
