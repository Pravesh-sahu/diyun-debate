import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Following = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col className="select-languages d-flex justify-content-end mt-0 my-5">
            <Form.Select aria-label="Default select example">
              <option>הפעילות האחרונה</option>
              <option value="1">אחד</option>
              <option value="2">שתיים</option>
              <option value="3">שְׁלוֹשָׁה</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p className="text-center">
              אין כאן כלום עדיין! לחץ על "עקוב" בדיון כדי להיות
                הודעה על תביעות ושינויים חדשים.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Following;
