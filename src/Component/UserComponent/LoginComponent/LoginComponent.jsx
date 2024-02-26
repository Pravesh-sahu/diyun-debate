import tHn from "../../../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import ForgetPassword from "../ForgetPasswordComponent/ForgetPasswordComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { LoginAsyncThunk } from "../../../redux/asyncThunk/authAsyncThunk";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [forgetPasswordModal, setForgetPasswordModal] = useState(false);

  const handleForgetPasswordOpen = () => {
    setForgetPasswordModal(true);
    handleClose();
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignupModalOpen = () => {
    props.switchToSignup(); // Call the callback function to switch to the signup modal
    handleClose();
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    setFormData({
      email: "",
      password: "",
    });
    props.onHide();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await dispatch(LoginAsyncThunk(formData)).unwrap();
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        navigate("/my");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (err) {
      console.log(err, "----------error value");
      // Handle errors
      toast.error("Login failed");
    } finally {
      setLoading(false); // Set loading to false when the signup process completes (whether it's success or failure)
    }

    setFormData({
      email: "",
      password: "",
    });
    // Add your form submission logic here
    // console.log("Form submitted:", formData);
    handleClose();
    // navigate("/my")
  };

  return (
    <>
      <Modal {...props} size="lg" centered dir="rtl">
        <Modal.Header closeButton>
          <Modal.Title
            title="Go to Homepage"
            className="cursor-pointer"
            onClick={handleClose}
          >
            {tHn.Diyun}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h1 className="test">{tHn.log_in}</h1>
          </div>
          <div className="text-center">
            <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleSignupModalOpen(true)}
              >
                {tHn.sign_up}
              </span>
              במקום?
            </div>
          </div>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group className="mt-4" controlId="formEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mt-4 position-relative" controlId="formPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="סיסמה"
                name="password"
                required
                onChange={handleChange}
              />
               <span
                className="password-toggle-icon position-absolute"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </Form.Group>
            <div
              onClick={() => handleForgetPasswordOpen(true)}
              className="text-decoration-underline my-3 cursor-pointer"
            >
              שכחת את הסיסמא
            </div>
            {loading && (
              <div className="d-flex align-items-center justify-content-center mt-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            )}
            <div className="text-center">
              <Button className="my-4 px-4" variant="primary" type="submit">
                התחברות
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ForgetPassword
        show={forgetPasswordModal}
        onHide={() => setForgetPasswordModal(false)}
      />
    </>
  );
};

export default Login;
