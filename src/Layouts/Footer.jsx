import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../Assets/Blue-logo.png";
import { Link } from "react-router-dom";
import footerImg from "../Assets/new-white-footer.png";
import footerImgmob from "../Assets/new-white-footer-mob.png";
import { FaTwitter, FaFacebook,FaLinkedin, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="pt-5 border-top footer-sec" dir="rtl">
        <Container>
          <Row>
            <Col>
              <footer className="">
                <Row>
                  <Col className="mb-4 text-center">
                    <Link to="/">
                      <img
                        src={footerLogo}
                        alt="footer Logo"
                        className="img-fluid footer-logo"
                      />
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col className="d-flex footer-links">
                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link
                            to="/explore"
                            className="nav-link p-0 text-muted"
                          >
                            לַחקוֹר
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link
                            to="/search"
                            className="nav-link p-0 text-muted"
                          >
                            לחפש
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/tour" className="nav-link p-0 text-muted">
                            סיור
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/about" className="nav-link p-0 text-muted">
                            על אודות
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link to="/" className="nav-link p-0 text-muted">
                            מה חדש
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link
                            to="/privacy"
                            className="nav-link p-0 text-muted"
                          >
                            מדיניות הפרטיות
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link to="/terms" className="nav-link p-0 text-muted">
                            תנאי השירות
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col mb-3 text-center">
                      <ul className="nav flex-column p-0">
                        <li className="nav-item mb-2">
                          <Link to="/" className="nav-link p-0 text-muted">
                            מרכז עזרה
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link
                            to="/contact-us"
                            className="nav-link p-0 text-muted"
                          >
                            צור קשר
                          </Link>
                        </li>
                        <li className="nav-item mb-2">
                          <Link
                            to="/status"
                            className="nav-link p-0 text-muted"
                          >
                            סטָטוּס
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </footer>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container className="m-4">
          <Row>
            <Col className=" d-flex justify-content-between   text-center flex-column  flex-md-row footer-row">
              <a className="footer-1 p-4 text-dark">
                <h3 className="m-0">עימות</h3>
                <p>לשימוש פרטי וציבורי</p>
              </a>
              <a className="footer-1 p-4 text-dark">
                <h3 className="m-0"> עימות</h3>
                <p>לאנשי חינוך</p>
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
   
     
        <div className="container  ">
        <div  className=" social-icon d-flex align-items-center mt-4 mb-5">
          <a className="text-secondary ml" href="#">
            <FaTwitter size={30} />
          </a>
          <a className="text-secondary" href="#">
             <FaFacebook size={30} />
          </a>
          <a className="text-secondary" href="#">
             <FaLinkedinIn size={30} />
          </a>
          <a>© Debate 2024</a>
          </div>
        </div>
      </section>
      <section  className="footer-sec-4 position-relative">
        <img className="w-100 footer-dek d-none d-md-block" src={footerImg} alt="footer" />
        <img className="w-100 footer-mob d-block d-md-none" src={footerImgmob} alt="footer" />
        
        <h3 className="text-secondary position-absolute top-50 start-50">סיבה מעצימה</h3>
      </section>
    </>
  );
}

export default Footer;
