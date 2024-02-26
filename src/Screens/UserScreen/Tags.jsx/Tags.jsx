import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import tHn from "../../../locales/he.json";
import { Link } from "react-router-dom";
import science from "../../../Assets/science.jpeg";
import philo from "../../../Assets/philosophy.jpeg";
import ethics from "../../../Assets/ethics.jpeg";
import politics from "../../../Assets/politics.jpeg";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import axios from "axios";
import defaultImage from "./../../../Assets/demo-portal-cover.jpeg";



function Tags() {
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
// ---------------load more------------------------------------------------------------------
const [items, setItems] = useState([]);
const [visibleItems, setVisibleItems] = useState(9);
const handleLoadMore = () => {
  // Update the number of visible items
  setVisibleItems(visibleItems + 9);
};
// ---------------load more------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://laradebate.jmbliss.com/api/debates/tags";
        const responseData = await axios.get(url);
        console.log("API Response:", responseData.data);
        setItems(responseData.data.tags);
        console.log(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <section className="explore-bg">
        <Container>
          <Row>
            <Col className="bg text-center">
              <h2 className="text-center explore-page__headline">
                {tHn.explore_debates}
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="portal-tab-template__body ">
        <Container>
          <Row>
            <Col className="">
             
              <div className="tag-overview-page__content">
                <div className="tag-overview-page__tags">
                  <ul className="tag-card-grid mt-5 p-0  responsive-grid ">
                  {items.slice(0, visibleItems).map((val, index) => (
                      <li className="card-glob">
                        <Link
                          to={`/explore/tags/${val?.name}`}
                          key={index}
                          className="tag-card d-block h-100"
                        >
                           <img
                              src={val?.image ? baseUrl + val?.image : defaultImage}
                              className="image tag-card__image rounded"
                              alt="cover"
                            />
                          <div className="tag-card__overlay"></div>
                          <div className="tag-card__name p-5 rounded text-center h-100 d-flex align-items-center justify-content-center">
                            <h4 className="fw-bold">{val?.name}</h4>
                            </div>
                        </Link>
                      </li>
                    ))}
                    
                  </ul>
                </div>
              </div>
              <div class="col-md-12 text-center mb-5">
                {visibleItems < items.length && (
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
      <Footer />
    </>
  );
}

export default Tags;
