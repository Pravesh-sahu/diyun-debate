import tHn from "../../../locales/he.json";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Formik , Form, Field } from "formik";
import * as Yup from "yup";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordForget = (props) => {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const toggleConfirmationVisibility = () => {
    setConfirmationVisible(!confirmationVisible);
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
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/reset-password/${token}`,
          formData
        );
        if (response?.data?.status === "success") {
          toast.success(response?.data?.message);
          navigate("/");
        } else {
          toast.error(response?.data?.message);
        }
      } catch (error) {
        // console.error("Signup failed!", error.response.data);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="bg-portal pb-4" dir="rtl">
        <Container>
          <Row>
            <Col md={6} className="mt-4 mx-auto">
              <div className="text-center">
                <h1 className="testq">{tHn.sign_up}</h1>
              </div>

              <Form onSubmit={(e) => handleSignup(e)}>
                <Form.Group className="mt-4 position-relative" controlId="formPassword">
                  <Form.Control
                    // type="password"
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
                <Form.Group
                  className="mt-4 position-relative"
                  controlId="formConfirmationPassword"
                >
                  <Form.Control
                    // type="password"
                    type={confirmationVisible ? 'text' : 'password'}
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
                <div className="text-center">
                  <Button className="my-4 px-4" variant="primary" type="submit">
                    הירשם
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PasswordForget;
