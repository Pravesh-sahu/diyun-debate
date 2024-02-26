import { Container, Col, Row, Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { TbMessageCirclePlus } from "react-icons/tb";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaUserPen } from "react-icons/fa6";
import testDog from "../../../Assets/test-dog-img.jpeg";
import testGpt from "../../../Assets/test-chatgpt.jpeg";
import testnature from "../../../Assets/test-nature.jpeg";
import testedu from "../../../Assets/test-education.jfif";
import testcode from "../../../Assets/test-code.jfif";
import testrobot from "../../../Assets/test-robot.jpeg";
import testgrass from "../../../Assets/test-grass.jpeg";
import Counter from "../../../Layouts/DebateHeader";
import { fetchData } from "../../SunBurst";
import CreateDebate from "../CeateDebateComponent/CreateDebate";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";
import New from "./New";
import Hot from "./Hot";


function Popular(data) {
  // ---------------load more------------------------------------------------------------------
  const [visibleCards, setVisibleCards] = useState(9);

  useEffect(() => {
    const cards = document.querySelectorAll(".popular .card");

    // Hide all cards initially
    cards.forEach((card, index) => {
      card.style.display = index < visibleCards ? "flex" : "none";
    });
  }, [visibleCards]);

  const handleLoadMore = () => {
    const cards = document.querySelectorAll(" .popular  .card");

    // Update the number of visible cards
    const newVisibleCards = visibleCards + 9;
    setVisibleCards(newVisibleCards);

    // Show additional cards
    cards.forEach((card, index) => {
      if (index >= visibleCards && index < newVisibleCards) {
        card.style.display = "flex";
      }
    });
  };
  // ---------------load more------------------------------------------------------------------

  // const { text, setText } = useContext(MyContext);
  // const fetchData = async () => {
  //     try {
  //         const url = `${process.env.REACT_APP_BASE_URL}/api/showalldebate`;
  //         const responseData = await axios.get(url);
  //         // console.log("API Response:", responseData.data);
  //         setText(responseData.data.mainDebates);
  //         return responseData.data.mainDebates;
  //     } catch (error) {
  //         console.error("Error fetching data:", error);
  //     }
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  return (
    <>
      <section className="bg-portal pb-4 home-sec-1 popular" dir="rtl">
        <Container>
          <Row>
            <Col>
              <div className="mt-top">
                {data.data &&
                  data.data?.map((val, index) => (
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
                  document.querySelectorAll(".popular .card").length && (
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

export default Popular;
