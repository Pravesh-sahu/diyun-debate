import tHn from "../../../locales/he.json";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Login from "../LoginComponent/LoginComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SignupAsyncThunk } from "../../../redux/asyncThunk/authAsyncThunk";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    password_confirmation: "",
    username: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const toggleConfirmationVisibility = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const handleClose = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
      password_confirmation: "",
      username: "",
    });
    props.onHide();
  };
  const [passwordError, setPasswordError] = useState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setLoading(true);
      try {
        const response = await dispatch(SignupAsyncThunk(formData)).unwrap();
        if (response?.data?.status === "success") {
          toast.success(response?.data?.message);
          navigate("/my");
        } else {
          toast.error(response?.data?.message);
        }
      } catch (err) {
        console.log(err, "----------error value");
        // Handle errors
        toast.error("Signup failed");
      } finally {
        setLoading(false);
      }

      // try {
      //   const response = await axios.post(
      //     `${process.env.REACT_APP_BASE_URL}/api/register`,
      //     formData
      //   );
      //   console.log("Signup successful!", response);
      //   setLoading(false);
      //   if (response?.data?.status === "success") {
      //     toast.success(response?.data?.message);
      //     const token = {
      //       token: response?.data?.token,
      //     };
      //     localStorage.setItem("token", JSON.stringify(token));
      //     navigate("/my");
      //   } else {
      //     toast.error(response?.data?.message);
      //   }
      // } catch (error) {
      //   // console.error("Signup failed!", error.response.data);
      //   toast.error(error.response.data.message);
      // }

      setFormData({
        email: "",
        password: "",
        name: "",
        password_confirmation: "",
        username: "",
      });
      // Add your form submission logic here
      handleClose();
    }
  };
  const handleLoginModalOpen = () => {
    props.switchToLogin(); // Call the callback function to switch to the login modal
    handleClose();
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
            <h1>{tHn.sign_up}</h1>
          </div>
          <div className="text-center">
            <div>
              <span
                className="modal-signup-btn mx-1"
                onClick={() => handleLoginModalOpen(true)}
              >
                {tHn.log_in}
              </span>
              במקום?
            </div>
          </div>
          <Form onSubmit={(e) => handleSignup(e)}>
            <Form.Group className="mt-4" controlId="formname">
              <Form.Control
                type="text"
                placeholder={tHn.Name}
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="הכנס שם משתמש"
                name="username"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-4" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="הזן אימייל"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mt-4 position-relative" controlId="formPassword">
              <Form.Control
                type={passwordVisible ? 'text' : 'password'}
                placeholder="סיסמה"
                name="password"
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle-icon position-absolute"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </Form.Group>
            <Form.Group className="mt-4 position-relative" controlId="formConfirmationPassword">
              <Form.Control
               type={passwordVisible ? 'text' : 'password'}
                placeholder="אימות סיסמה"
                name="password_confirmation"
                onChange={handleChange}
                required
              />
              <span
            className="password-toggle-icon position-absolute"
            onClick={toggleConfirmationVisibility}
          >
            {confirmationVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
            </Form.Group>
            {passwordError === true ? (
              <p className="text-danger">Password did not match!</p>
            ) : (
              ""
            )}
            {loading && (
              <div className="d-flex align-items-center justify-content-center mt-4">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            )}
            <div className="text-center">
              <Button className="my-4 px-4" variant="primary" type="submit">
                הירשם
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
