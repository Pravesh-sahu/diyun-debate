import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import tHn from "../../../locales/he.json";
import axios from "axios";
import { Link } from "react-router-dom";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";  // Replace with the actual path

function Explore() {
  const [items, setItems] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const url = "https://www.kialo.com/api/v1/discussiontags/featured?timestamp=1701781747945&dfuipoldyz=gt045bfs";
  //       const responseData = await axios.get(url);
  //       console.log("API Response:", responseData.data);
  //       setItems(responseData.data.featuredTags);
  //       console.log(items);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <section className="explore-bg banner-class">
        <Container>
          <Row>
            <Col className="bg text-center">
              <div>
                <h1 className="text-center explore-page__headline">{tHn.explore_debates}</h1>
                {/* {items?.map((val, index) => (
                <Link key={index} to={`/explore/tags/${val}`} className="mx-2 tags-btn" >{val}</Link>
                ))} */}
                <div className="mobile-flex-wrap d-flex justify-content-center flex-wrap">
                  <Link to={`/explore/tags/מימון`} className="mx-2 tags-btn test" >מימון</Link>
                  <Link to={`/explore/tags/הנדסה גנטית`} className="mx-2 tags-btn" >הנדסה גנטית</Link>
                  <Link to={`/explore/tags/בקרת נשק`} className="mx-2 tags-btn" >בקרת נשק</Link>
                  <Link to={`/explore/tags/בינה מלאכותית`} className="mx-2 tags-btn" >בינה מלאכותית</Link>
                  <Link to={`/explore/tags/מערכת הבריאות`} className="mx-2 tags-btn" >מערכת הבריאות</Link>
                  <Link to={`/explore/tags/גרעיני`} className="mx-2 tags-btn" >גרעיני</Link>
                  <Link to={`/explore/tags/עונש מוות`} className="mx-2 tags-btn" >עונש מוות</Link>
                </div>
              </div>
              <Link className="btn-show-tags text-decoration-underline" to="/explore/tags">ראה עוד</Link>
              {/* Politics component */}          
            </Col>
          </Row>          
        </Container>
      </section>
    </>
  );
}

export default Explore;
