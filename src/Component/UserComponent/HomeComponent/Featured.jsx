import { Container, Col, Row, Card } from "react-bootstrap";
import React, { useEffect } from "react";
import axios from "axios";
import { IoStatsChart } from "react-icons/io5";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import { TbMessage2, TbRuler2Off, TbUsersGroup } from "react-icons/tb";
import { TbMessageCirclePlus } from "react-icons/tb";
import { HiMiniTrophy } from "react-icons/hi2";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeicon from "../../../Assets/home-icon-1.png";
import homeicona from "../../../Assets/home-icon-2.png";
import homeicond from "../../../Assets/home-icon-4.png";
import homeicone from "../../../Assets/home-icon-5.png";
import homeiconf from "../../../Assets/home-icon-6.png";
import defaultImage from "./../../../Assets/user-profile.png";


function Featured(data) {
   // ---------------load more------------------------------------------------------------------
   const [visibleCards, setVisibleCards] = useState(10);

   useEffect(() => {
     const cards = document.querySelectorAll('.feature .card');
 
     // Hide all cards initially
     cards.forEach((card, index) => {
       card.style.display = index < visibleCards ? 'flex' : 'none';
     });
   }, [visibleCards]);
 
   const handleLoadMore = () => {
     const cards = document.querySelectorAll('.feature  .card');
 
     // Update the number of visible cards
     const newVisibleCards = visibleCards + 10;
     setVisibleCards(newVisibleCards);
 
     // Show additional cards
     cards.forEach((card, index) => {
       if (index >= visibleCards && index < newVisibleCards) {
         card.style.display = 'flex';
       }
     });
   };
  // ---------------load more------------------------------------------------------------------

  const { state } = useContext(MyContext);
  const [statics, setStatics] = useState();
  // const [text, setText] = useState([]);
  const [topContributors, setTopContributors] = useState();

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await axios.get(
          `https://laradebate.jmbliss.com/api/overall-stats`
        );
        setStatics(responseData?.data);
        console.log(responseData?.data);

        // Fetch top contributors
        const topContributorsResponse = await axios.get(
          `https://laradebate.jmbliss.com/api/top-contributors`
        );
        setTopContributors(topContributorsResponse?.data?.topContributors);
        console.log(topContributorsResponse?.data?.topContributors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [state]);

  // const filteredData = data?.data?.filter(
  //   (val) =>
  //     val?.id !== data?.data[0]?.id &&
  //     val?.id !== data?.data[1]?.id &&
  //     val?.id !== data?.data[2]?.id &&
  //     val?.id !== data?.data[3]?.id &&
  //     val?.id !== data?.data[4]?.id
  // );
  const filteredData = Array.isArray(data?.data)
    ? data?.data.filter(
        (val) =>
          val?.id !== data?.data[0]?.id &&
          val?.id !== data?.data[1]?.id &&
          val?.id !== data?.data[2]?.id &&
          val?.id !== data?.data[3]?.id &&
          val?.id !== data?.data[4]?.id
      )
    : [];
  const settings = {
    // initialSlide: 0,
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const settings1 = {
    rows: 4,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="bg-portal pb-4 home-sec-1  feature" dir="rtl">
        <Container>
          <Row>
            <Col>
              <div className="mt-top">
                <Card>
                  <Link to={`/debate/${data?.data[0]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[0]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {data?.data[0]?.title}
                      </Card.Title>
                    </Card.Body>
                  </Link>

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
                <Card>
                  <Link to={`/debate/${data?.data[1]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[1]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {data?.data[1]?.title}
                      </Card.Title>
                    </Card.Body>
                  </Link>

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

                <Card>
                  <Card.Body className="p-4 kialo-number">
                    <div className="not-hover mb-3 d-flex align-items-baseline justify-content-start">
                      <img className="home-icons" src={homeicon} alt="logo" />
                      <Card.Title> ויכוח במספרים(דיונים ציבוריים)</Card.Title>
                    </div>
                    <div className="d-flex align-items-baseline mt-2 justify-content-start">
                      <img className="home-icons" src={homeicona} alt="logo" />
                      <div className="d-flex  flex-column">
                        <Card.Text className="m-0">תרומות</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallContributions}
                        </Card.Text>
                      </div>
                    </div>

                    <hr />
                    <div className="d-flex align-items-baseline justify-content-start">
                      <img className="home-icons" src={homeicond} alt="logo" />
                      <div className="d-flex  flex-column">
                        <Card.Text className="m-0">ויכוחים</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallParentDebates}
                        </Card.Text>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex align-items-baseline justify-content-start">
                      <img className="home-icons" src={homeicone} alt="logo" />
                      <div className="d-flex  flex-column">
                        <Card.Text className="m-0">טוען</Card.Text>
                        <Card.Text className="highlight-number">
                          {statics?.overallClaims}
                        </Card.Text>
                      </div>
                    </div>

                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                <Card>
                  <Link to={`/debate/${data?.data[2]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[2]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {data?.data[2]?.title}
                      </Card.Title>
                    </Card.Body>
                  </Link>

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
                <Card>
                  <Link to={`/debate/${data?.data[3]?.id}`}>
                    <div className="img-bg-color">
                      <Card.Img
                        variant="top"
                        src={baseUrl + data?.data[3]?.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold">
                        {data?.data[3]?.title}
                      </Card.Title>
                    </Card.Body>
                  </Link>

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
                <Card>
                  <Card.Body>
                    <div className="not-hover mb-3 d-flex align-items-baseline justify-content-start">
                      <img className="home-icons" src={homeiconf} alt="logo" />
                      <Card.Title>
                        תורמים מובילים(7ד / דיונים ציבוריים)
                      </Card.Title>
                    </div>
                    <Slider {...settings}>
                      {topContributors &&
                        topContributors
                          .reduce((accumulator, Contributors, index) => {
                            // Group contributors into sets of 4
                            if (index % 4 === 0) {
                              accumulator.push([]);
                            }
                            accumulator[accumulator.length - 1].push(
                              Contributors
                            );
                            return accumulator;
                          }, [])
                          .map((group, groupIndex) => (
                            <div
                              key={groupIndex}
                              className=" align-items-baseline mt-2 justify-content-start"
                            >
                              {group.map((contributor, contributorIndex) => (
                                <div>
                                  <div
                                    key={contributorIndex}
                                    className="d-flex justify-content-start" 
                                  >
                                    <div className="conti-main d-flex align-items-center">
                                      <div>
                                      <Card.Text className="m-0">
                                        {contributor.username}
                                      </Card.Text>
                                      <Card.Text>
                                        תרומות {contributor.total_contributions}
                                      </Card.Text>
                                      </div>
                                      <img
                                          className="card-img-top a"
                                          src={contributor?.profile_picture ? baseUrl + contributor?.profile_picture : defaultImage}
                                          alt="profile"
                                        />
                                    </div>
                                    {/* <div>
                                      <Card.Text>
                                        {contributorIndex + 1}
                                      </Card.Text>
                                    </div> */}
                                  </div>

                                  <hr className="mt-1 mb-0" />
                                </div>
                              ))}
                            </div>
                          ))}
                    </Slider>
                  </Card.Body>
                </Card>
                <Card className="single-card">
                  <div className="d-flex w-100">
                    <div className="w-33">
                      <Card.Body>
                        <div className="not-hover mb-3 d-flex align-items-baseline justify-content-start">
                          {/* <HiMiniTrophy /> */}{" "}
                          <img
                            className="home-icons"
                            src={homeicona}
                            alt="logo"
                          />
                          <Card.Title>תורמים</Card.Title>
                        </div>
                        <div className="slider-home fw-bold">
                          <Slider {...settings1}>
                            <div className="d-flex align-items-baseline mt-2 justify-content-start">
                              {/* <FaUserPen /> */}
                              <div className="d-flex align-items-end flex-column">
                                <Card.Text>
                                  {topContributors &&
                                    topContributors[0]?.username}
                                </Card.Text>
                                {/* <Card.Text>3,144,694</Card.Text> */}
                              </div>
                            </div>

                            <div className="d-flex align-items-baseline justify-content-start">
                              {/* <FaUserPen /> */}
                              <div className="d-flex align-items-end flex-column">
                                <Card.Text>
                                  {topContributors &&
                                    topContributors[1]?.username}
                                </Card.Text>
                                {/* <Card.Text>1,269,270</Card.Text> */}
                              </div>
                            </div>

                            <div className="d-flex align-items-baseline justify-content-start">
                              {/* <FaUserPen /> */}
                              <div className="d-flex align-items-end flex-column">
                                <Card.Text>
                                  {topContributors &&
                                    topContributors[2]?.username}
                                </Card.Text>
                                {/* <Card.Text>18,467</Card.Text> */}
                              </div>
                            </div>

                            <div className="d-flex align-items-baseline justify-content-start">
                              {/* <FaUserPen /> */}
                              <div className="d-flex align-items-end flex-column">
                                <Card.Text>
                                  {topContributors &&
                                    topContributors[3]?.username}
                                </Card.Text>
                                {/* <Card.Text>18,467</Card.Text> */}
                              </div>
                            </div>

                            <div className="d-flex align-items-baseline justify-content-start">
                              {/* <FaUserPen /> */}
                              <div className="d-flex align-items-end flex-column">
                                <Card.Text>
                                  {topContributors &&
                                    topContributors[4]?.username}
                                </Card.Text>
                                {/* <Card.Text>18,467</Card.Text> */}
                              </div>
                            </div>
                          </Slider>
                        </div>

                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </div>
                    <div className="w-67 ">
                      <div className="position-relative">
                        <Link to={`/debate/${data?.data[4]?.id}`}>
                          <div className="img-bg-color">
                            <Card.Img
                              className="unset-height single-card-img"
                              variant="top"
                              src={baseUrl + data?.data[4]?.image}
                            />
                          </div>
                          <Card.Body className="position-absolute top-0">
                            <Card.Title>{data?.data[4]?.title}</Card.Title>
                          </Card.Body>
                        </Link>
                      </div>
                      {/* <hr className="position-absolute w-67" /> */}
                      <div className="color-text-icon d-flex align-items-center justify-content-evenly m-0 position-absolute bottom-0">
                        <div className="d-flex align-items-center m-2">
                          <TbMessage2 />
                          <Card.Text className="m-0 p-2">749</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaPen />
                          <Card.Text className="m-0 p-2">10.9ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaVoteYea />
                          <Card.Text className="m-0 p-2">6.2ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <TbUsersGroup />
                          <Card.Text className="m-0 p-2">1ר</Card.Text>
                        </div>
                        <div className="d-flex align-items-center m-2">
                          <FaEye />
                          <Card.Text className="m-0 p-2">62.6ר</Card.Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {filteredData &&
                  filteredData?.map((val, index) => (
                    <Card key={index}>
                      <Link to={`/debate/${val?.id}`}>
                        <div className="img-bg-color">
                          <Card.Img variant="top" src={baseUrl + val.image} />
                        </div>
                        <Card.Body>
                          <Card.Title>{val?.title}</Card.Title>
                        </Card.Body>
                      </Link>

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
                  document.querySelectorAll(".feature .card").length && (
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

export default Featured;
