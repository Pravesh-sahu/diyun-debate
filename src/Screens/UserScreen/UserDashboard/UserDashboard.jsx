import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../Layouts/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import userProfile from "../../../Assets/default_229_128x128.jpeg";
import Nav from "react-bootstrap/Nav";
import Overview from "../../../Component/UserComponent/UserDashboardComponent/Overview";
import Respond from "../../../Component/UserComponent/UserDashboardComponent/Respond";
import Following from "../../../Component/UserComponent/UserDashboardComponent/Following";
import All from "../../../Component/UserComponent/UserDashboardComponent/All";
import Own from "../../../Component/UserComponent/UserDashboardComponent/Own";
import Recent from "../../../Component/UserComponent/UserDashboardComponent/Recent";
import Recommended from "../../../Component/UserComponent/UserDashboardComponent/Recommended";
import Teams from "../../../Component/UserComponent/UserDashboardComponent/Teams";
import Footer from "../../../Layouts/Footer";

function UserDashboard() {
  const { verification_token } = useParams();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState("Overview");

  // useEffect(() => {
  //   if (verification_token) {
  //     fetchPortfolio();
  //   } else if (!localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, []);

  const fetchPortfolio = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/verify-email/${verification_token}`;
      const response = await axios.get(url);

      console.log(response);
      // if (response?.data?.status === "success") {
      //   toast.success(response?.data?.message);
      //   const token = {
      //     token: response?.data?.token,
      //   };
      //   localStorage.setItem("token", JSON.stringify(token));
      // } else {
      //   toast.error(response?.data?.message);
      //   navigate("/");
      // }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Respond":
        return <Respond />;
      case "Following":
        return <Following />;
      case "All":
        return <All />;
      case "Own":
        return <Own />;
      case "Recent":
        return <Recent />;
      case "Recommended":
        return <Recommended />;
      case "Teams":
        return <Teams />;

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="py-5 pt-0 mt-0 dashboard-page-main" dir="rtl">
        <section className="userprofile mt-0  pt-5">
          <Container>
            <Row className="d-flex">
              <Col className="d-flex align-items-center">
                <div className="col-md-2 my-page-header__left-items">
                  <img
                    src={userProfile}
                    alt="User Profile"
                    className="img-fluid"
                  />
                </div>
                <div className="my-page-header__left-items mx-2">
                  <h1 className="m-0 text-dark">ענן ה-DI שלי</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="portal-tab-template__body">
          <Container className="portal-tab-template__content-header">
            <Row className="tab-switch my-5 m-0 border-bottom">
              <Col className="tab-switch__tabs my-4">
                <Nav className="flex-wrap" variant="underline" defaultActiveKey="link-1">
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Overview")}
                      eventKey="link-1"
                    >
                      סקירה כללית
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Respond")}
                      eventKey="link-2"
                    >
                      לְהָגִיב
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Following")}
                      eventKey="link-3"
                    >
                      הבא
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("All")}
                      eventKey="link-4"
                    >
                      את כל
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Own")}
                      eventKey="link-5"
                    >
                      שֶׁלוֹ
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Recent")}
                      eventKey="link-6"
                    >
                      לאחרונה
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Recommended")}
                      eventKey="link-7"
                    >
                      מוּמלָץ
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="pb-0 border-0"
                      onClick={() => handleTabSelect("Teams")}
                      eventKey="link-8"
                    >
                      צוותים
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Row className="tab-based-content">{renderTabContent()}</Row>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default UserDashboard;
