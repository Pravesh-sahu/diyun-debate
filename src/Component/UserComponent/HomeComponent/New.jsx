import { Container, Col, Row, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";

function New(data) {
       // ---------------load more------------------------------------------------------------------
   const [visibleCards, setVisibleCards] = useState(9);

   useEffect(() => {
     const cards = document.querySelectorAll('.new .card');
 
     // Hide all cards initially
     cards.forEach((card, index) => {
       card.style.display = index < visibleCards ? 'flex' : 'none';
     });
   }, [visibleCards]);
 
   const handleLoadMore = () => {
     const cards = document.querySelectorAll('.new  .card');
 
     // Update the number of visible cards
     const newVisibleCards = visibleCards + 9;
     setVisibleCards(newVisibleCards);
 
     // Show additional cards
     cards.forEach((card, index) => {
       if (index >= visibleCards && index < newVisibleCards) {
         card.style.display = 'flex';
       }
     });
   };
  // ---------------load more------------------------------------------------------------------
  console.log("Original Data:", data?.data);

  const newOne = data?.data ? [...data.data].reverse() : [];

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  return (
    <>
      <section className="bg-portal pb-4 home-sec-1 new" dir="rtl">
        <Container>
          <Row>
            <Col>
              <div className="mt-top">
                {newOne &&
                  newOne?.map((val, index) => (
                    <Card>
                      <a href={`/debate/${val.id}`} key={index}>
                        <div className="img-bg-color">
                          <Card.Img variant="top" src={baseUrl + val.image} />
                        </div>
                        <Card.Body>
                          <Card.Title>{val.title}</Card.Title>
                        </Card.Body>
                      </a>
                
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
                  ))}
              </div>
              <div class="col-md-12 text-center">
                {visibleCards <
                  document.querySelectorAll(".new .card").length && (
                  <button
                    className="btn debate-btn-load btn-outline-primary mt-5 fw-bold"
                    onClick={handleLoadMore}
                  >
                      להראות יותר
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default New;
