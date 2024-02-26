import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Teams = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} />
          קבוצה חדשה
        </Button>

        <Modal show={show} onHide={handleClose} className="team-model">
          <Modal.Header closeButton>
            <Modal.Title>
              <h1>צור צוות חדש</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="teamName">
                <Form.Label>שם קבוצה</Form.Label>
                <Form.Control type="text" placeholder="Enter Team Name" />
                <p>128</p>
              </Form.Group>
            </Form>
            <p>
              צוותים הם חללים פרטיים ייעודיים שמפשטים את שיתוף הדיונים עם קבוצת
              אנשים שאתה מזמין ומנהל.
            </p>
            <p>
              האם אתה איש חינוך? עבור דיונים של תלמידים, אנא השתמש{" "}
              <a href="#" target="_blank" rel="noopener noreferrer"></a>.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              לְבַטֵל
            </Button>
            <Button variant="primary" onClick={handleClose}>
              לִיצוֹר
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
          <p className="text-center mt-5">
            אתה עדיין לא שייך לאף קבוצה. אתה יכול ליצור צוות חדש על ידי לחיצה על
            "צוות חדש" למעלה.
          </p>
        </div>
      </div>
    </>
  );
};

export default Teams;
