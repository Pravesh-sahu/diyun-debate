
import React, { useEffect } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import testrobot from "../../../Assets/test-robot.jpeg";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import testGpt from "../../../Assets/test-chatgpt.jpeg";


const All = () => {




  return (
    <section>
      <Container>
        <Row>
          <Col className="welcome-content col-md-8 mt-5 my-0">
            <div>
              <div className="d-flex">
                <div className="cardd-div">
                  <Card>
                    <a href="/">
                      <Card.Img variant="top" src={testGpt} />
                      <Card.Body>
                        <Card.Title>
                          האם יש לאסור ניסויים בבעלי חיים?
                        </Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </a>
                    <hr />
                    <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                      <TbMessage2 />
                      <Card.Text className="m-0">749</Card.Text>
                      <FaPen />
                      <Card.Text className="m-0">10.9ר</Card.Text>
                      <FaVoteYea />
                      <Card.Text className="m-0">6.2ר</Card.Text>
                      <TbUsersGroup />
                      <Card.Text className="m-0">1ר</Card.Text>
                      <FaEye />
                      <Card.Text className="m-0">62.6ר</Card.Text>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card className="cardd-div">
                    <a href="/">
                      <Card.Img variant="top" src={testGpt} />
                      <Card.Body>
                        <Card.Title>
                          האם יש לאסור ניסויים בבעלי חיים?
                        </Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text> */}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </a>
                    <hr />
                    <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0">
                      <TbMessage2 />
                      <Card.Text className="m-0">749</Card.Text>
                      <FaPen />
                      <Card.Text className="m-0">10.9ר</Card.Text>
                      <FaVoteYea />
                      <Card.Text className="m-0">6.2ר</Card.Text>
                      <TbUsersGroup />
                      <Card.Text className="m-0">1ר</Card.Text>
                      <FaEye />
                      <Card.Text className="m-0">62.6ר</Card.Text>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <h4 className="see-all text-align-end text-decoration-underline">
                  ראה הכל
                </h4>
              </div>
            </div>
          </Col>

          <Col className="select-languages d-flex justify-content-end mt-0 my-5">
            <Form.Select aria-label="Default select example">
              <option>הפעילות האחרונה</option>
              <option value="1">אחד</option>
              <option value="2">שתיים</option>
              <option value="3">שְׁלוֹשָׁה</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default All;