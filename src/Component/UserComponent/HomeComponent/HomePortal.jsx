import { Container, Col, Row, Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState, useEffect } from "react";
import coverImg from "../../../Assets/demo-portal-cover.jpeg";
import axios from "axios";
import tHn from "../../../locales/he.json";
import { useContext } from "react";
import { MyContext } from "../../SunBurst";
import Featured from "./Featured";
import Popular from "./Popular";
import New from "./New";
import Hot from "./Hot";
import { useDispatch, useSelector } from "react-redux";
import { GetDebateAsyncThunk } from "../../../redux/asyncThunk/debateAsyncThunk";
import ExploreBg from "../../../Screens/UserScreen/ExploreBg/ExploreBg";
import Loader from "../Loader";
import toast from "react-hot-toast";

function HomePortal() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { text, setText } = useContext(MyContext);
  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/showalldebate`;
      const responseData = await axios.get(url);
      // console.log("API Response:", responseData.data);
      setText(responseData.data.mainDebates);
      return responseData.data.mainDebates;
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  // const getAllData = useSelector((state) => state?.AllTrade?.AllTradeData);
  // const getAllData = useSelector((state) => state?.debate?.DebateGetData);
  // console.log(getAllData.mainDebates)
  // useEffect(() => {
  //   dispatch(GetDebateAsyncThunk())
  //     .unwrap()
  //     .then((res) => {
  //       console.log(res)
  //       setText(res?.data.mainDebates);
  //     });
  // }, []);
  // console.log(text)

  useEffect(() => {
    fetchData();
  }, []);

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

  return (
    <>
      <section className="bg-portal pb-4 home-sec-1" dir="rtl">
        <Container>
          <Row>
            <Col>
              {loading ? (
                <div className="loaderStyle">
                  <Loader />
                </div>
              ) : (
                <div className="tab-home-ex">
                  <Tabs
                    defaultActiveKey="Featured"
                    id="uncontrolled-tab-example"
                    className="mb-3 p-0 d-flex flex-wrap "
                  >
                    <Tab
                      eventKey="Featured"
                      className="p-0"
                      title={tHn.Featured}
                    >
                      <Featured data={text} />
                    </Tab>
                    <Tab eventKey="Popular" title={tHn.Popular}>
                      <Popular data={text} />
                    </Tab>
                    <Tab eventKey="New" title={tHn.new}>
                      <New data={text} />
                    </Tab>
                    <Tab eventKey="Hot" title={tHn.hot}>
                      <Hot data={text} />
                    </Tab>
                  </Tabs>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePortal;
