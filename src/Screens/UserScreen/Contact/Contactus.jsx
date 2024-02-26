import {} from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import tHn from "../../../locales/he.json";
import toast from "react-hot-toast";

// Define your API endpoint here   /* API FOR LOGIN */
const API_ENDPOINT = "https://laradebate.jmbliss.com/api/contact-form";

const Contactus = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    attachments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the API endpoint constant here
      const response = await axios.post(API_ENDPOINT, formData);
      // console.log(response); // Handle success response
      if (response?.data?.message == "Your message has been sent!") {
        toast.success(response?.data?.message);
        navigate("/")
      } else toast.error(response?.data?.message);
    } catch (error) {
      if (error?.response) {
        console.error("Error submitting form:", error.response.data);
      } else {
        console.error("Error submitting form:", error.message);
      }
    }
  };

  // function Contactus() {

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid header-nav">
          {/* <img src={kialologo}
                    className0="img-fluid"
                    alt="logo-image" />*/}
          <a className="navbar-brand" href="#">
            דייון
          </a>
          <a className="navbar-brand" href="#">
            מרכז עזרה
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-primary"
            >
              לך לדייון
            </button>
          </div>
        </div>
      </nav>
      {/* {/ ---------------Search------------ /} */}
      <div className="frm-cnt">
        <form className="example contct-us" action="/action_page.php">
          <input
            type="search"
            placeholder={tHn.Search}
            name="search"
            className="cnt-frm"
          />
        </form>

        <form action="" className="input-dat cont-details my-5" dir="rtl">
          <h1> איש קשר</h1>
          <p>
            נשמח לשמוע ממך! אם יש לך שאלות או משוב לתת, אל תהסס להשתמש בטופס
            למטה.
          </p>
          <div className="type-txt">
            <label for="fname">השם שלך</label>
            <input
              type="text"
              name="fullname"
              id="id"
              onChange={handleChange}
              className="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">האימייל שלך</label>
            <input
              type="email"
              name="email"
              id="id"
              onChange={handleChange}
              className="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">נושא</label>
            <input
              type="subject"
              name="subject"
              id="id"
              onChange={handleChange}
              className="cnt-frm"
            />
          </div>
          <div className="type-txt">
            <label for="fname">הוֹדָעָה</label>
            <textarea
              name="message"
              className="contact-txtar cnt-frm"
              id=""
              onChange={handleChange}
              cols="30"
              rows="10"
            />
          </div>
          <div className="type-txt">
            <label for="fname">קבצים מצורפים</label>
            <input
              type="file"
              name="myfile"
              id="myfile"
              onChange={handleChange}
              className="cnt-frm"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            שלח
          </button>
        </form>
      </div>{" "}
      <br />
      <hr></hr>
      {/* {/ --------------------------Footer-------------------------------- /} */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid footer-fl">
          <div className="footer-n">
            <a className="navbar-brand" href="#">
              דייון
            </a>
            <a className="navbar-brand" href="#">
              מרכז עזרה
            </a>
          </div>
          {/* <div className="nav-engl ftr-nav">
            <a className="navbar-brand text-primary" href="#">
              אנגלית
            </a>
          </div> */}
          <div className="nav-cnt ftr-nav">
            <a className="navbar-brand text-primary" href="/contact-us">
              צור קשר
            </a>
          </div>
          <div className="ftr-nav">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-primary ftr-nav"
            >
              לך לדייון
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Contactus;
