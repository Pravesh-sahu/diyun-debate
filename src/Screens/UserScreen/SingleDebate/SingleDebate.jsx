import Header from "../../../Layouts/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import tHn from "../../../locales/he.json";
import Sunburst from "./Sunburst";
import * as d3 from "d3";
import SunburstComponent from "./SunburstComponent";
import { data } from "./MockData";
import { nestedData } from "./NestedMockData";
import React from "react";
import { TbChartDonut4 } from "react-icons/tb";
import { ImTree } from "react-icons/im";

function SingleDebate() {
  const [textProsCount, setTextProsCount] = useState(0);
  const [textConsCount, setTextConsCount] = useState(0);
  const [detailDebateModal, setDetailDebateModal] = useState(false);
  const [pros, setPros] = useState({
    title: "",
  });
  const [cons, setCons] = useState({
    title: "",
  });
  const { id } = useParams();
  const [debateDetails, setDebateDetails] = useState();

  //Add comment
  const [commentText, setCommentText] = useState("");
  const [totalComments, setTotalComments] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentListVisible, setCommentListVisible] = useState(true); //visible comment
  const [toggleSubmit, setToggleSubmit] = useState(true); //edit comment toggle
  const [isEditItem, setIsEditItem] = useState(null); //edit comment
  const [sunburstData, setSunburstData] = useState([]);
  const [activeChart, setActiveChart] = useState();

  const handleToggleCommentList = () => {
    setCommentListVisible(!commentListVisible);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  //------edit comment------
  const editItem = async (id) => {
    let newEditItem = comments.find((comment) => {
      return comment.id === id;
    });
    setToggleSubmit(false); //change submit button
    setCommentText(newEditItem.comment); //new update value
    setIsEditItem(id); //pass current element id
  };
  //------edit comment-------

  // sunburst chart

  //handle the "Add Comment"
  const handleAddComment = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addComments`,
        { comment: commentText },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result?.data?.debate) {
        setDebateDetails(result.data.debate);
        fetchCommentsList();
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
    // Clear the comment input after submission
    setCommentText("");
  };
  const fetchCommentsList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/commentsList`
      );

      if (response?.data?.comments) {
        setComments(response.data.comments);
        setTotalComments(response.data.comments.length);
      }
    } catch (error) {
      console.error("Error fetching comments list:", error.message);
    }
  };

  //------------ Hide Comment-------
  const [commentHide, setCommentHide] = useState([]);
  const hideComment = async (commentId, userId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/comments/${commentId}/hideComment`,
        {
          data: { userId },
        }
      );
      setCommentHide(response?.data);

      fetchCommentsList();
      toast.success("Comment hidden successfully");
    } catch (error) {
      console.error("Error hiding comment:", error);
      toast.error("Failed to hide comment");
    }
  };

  //toggle three dot
  const [ellipsisMenuOpen, setEllipsisMenuOpen] = useState(null);
  const handleEllipsisClick = (commentId) => {
    if (ellipsisMenuOpen === commentId) {
      setEllipsisMenuOpen(null); // Close the menu if it's already open
    } else {
      setEllipsisMenuOpen(commentId); // Open the menu for the clicked comment
    }
  };

  const closeEllipsisMenu = () => {
    setEllipsisMenuOpen(null);
  };

  const convertDataForSunburst = (apiResponse) => {
    const sunburstData = {
      name: "flare",
      children: [],
    };

    // Grouping items by side (pros/cons)
    const groupedBySide = apiResponse.reduce((acc, item) => {
      if (!acc[item.side]) {
        acc[item.side] = [];
      }
      acc[item.side].push(item);
      return acc;
    }, {});

    // Creating children for pros
    if (groupedBySide["pros"]) {
      const prosChildren = {
        name: "pros",
        children: groupedBySide["pros"].map((item) => ({
          name: item.title,
          size: item.total_votes, // You can adjust this according to your data
        })),
      };
      sunburstData.children.push(prosChildren);
    }

    // Creating children for cons
    if (groupedBySide["cons"]) {
      const consChildren = {
        name: "cons",
        children: groupedBySide["cons"].map((item) => ({
          name: item.title,
          size: item.total_votes, // You can adjust this according to your data
        })),
      };
      sunburstData.children.push(consChildren);
    }

    return sunburstData;
  };

  const marshalDataForSunburst = (response) => {
    let newArr = [];
    const { pros, cons } = response;
    newArr = [...pros, ...cons];
    return newArr;
  };

  const formatDataForSunburst = (data) => {
    // Define a recursive function to transform the data
    const transformData = (node) => {
      const formattedNode = {
        title: node.title,
      };

      if (node.children && node.children.length > 0) {
        formattedNode.children = node.children.map((child) =>
          transformData(child)
        );
      }

      return formattedNode;
    };

    // Start transformation with the root node
    return transformData(data);
  };
  function marshalData(data, parentId = null) {
    const marshaledData = [];
    for (const item of data) {
      if (item.parent_id === parentId) {
        const children = marshalData(data, item.id);
        if (children.length > 0) {
          item.children = children;
        }
        marshaledData.push(item);
      }
    }
    return marshaledData;
  }

  const fetchDataForSunburst = async (newId) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/sunburstchart`;
      const responseData = await axios.get(url);

      setSunburstData(responseData.data.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${id}/displaydebate`;
      const responseData = await axios.get(url);
      //  console.log(responseData.data.debate)
      // const marshalledData = formatDataForSunburst(responseData.data.debate)

      // console.log("marshalleddata", marshalledData)
      // setSunburstData(marshalledData)

      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataById = async (newId) => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/getdebatebyid/${newId}/displaydebate`;
      const responseData = await axios.get(url);
      setDebateDetails(responseData?.data?.debate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChart = (chart) => {
    setActiveChart(chart);
  };

  console.log("state", activeChart);

  useEffect(() => {
    fetchDataById(id);
    fetchDataForSunburst(id);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    modalShow();
  }, []);

  // ------Comment-----
  useEffect(() => {
    fetchDataById(id);
  }, [id]);
  useEffect(() => {
    if (debateDetails) {
      fetchCommentsList(); // Fetch comments when debateDetails is available
    }
  }, [debateDetails]); // ------Comment ----

  const handleClose = () => setDetailDebateModal(false);

  const modalShow = () => {
    setDetailDebateModal(true);
  };

  const handleProsChange = (e) => {
    setPros({ ...pros, [e.target.name]: e.target.value });
    setTextProsCount(e.target.value.length);
  };

  const handleConsChange = (e) => {
    setCons({ ...cons, [e.target.name]: e.target.value });
    setTextConsCount(e.target.value.length);
  };

  const handleSubmitPros = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addProsChildDebate`,
        pros,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.error("Error submitting the form:", error);
      if (error?.response?.data?.status == 401) {
        toast.error("please login for debate");
      } else {
        toast.error("Something wrong please try some time letter");
      }
    }
    fetchDataById(debateDetails.id);
    setShowProsForm(false);
    setPros({ title: "" });
  };

  const handleSubmitCons = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/debates/${debateDetails.id}/addConsChildDebate`,
        cons,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.error("Error submitting the form:", error);
      if (error?.response?.data?.status == 401) {
        toast.error("please login for debate");
      } else {
        toast.error("Something wrong please try some time letter");
      }
    }
    fetchDataById(debateDetails.id);
    setShowConsForm(false);
    setCons({ title: "" });
  };

  const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;
  const [oldTitle, setOldTitle] = useState("");
  const [oldDebateId, setOldDebateId] = useState("");
  console.log("oldtitle", oldTitle);

  const handleDivClick = async (id, isPro) => {
    const clickedDiv = isPro
      ? debateDetails.pros.find((pro) => pro.id === id)
      : debateDetails.cons.find((con) => con.id === id);

    setOldTitle(debateDetails.title);
    setOldDebateId(debateDetails.id);
    const updatedTitle = clickedDiv.title;
    debateDetails.title = updatedTitle;

    fetchDataById(id);
    setDebateDetails({ ...debateDetails });
  };

  const revertToOldTitle = async () => {
    debateDetails.title = oldTitle;
    setOldTitle("");
    await fetchDataById(oldDebateId);
  };

  const [showProsForm, setShowProsForm] = useState(false);
  const [showConsForm, setShowConsForm] = useState(false);

  const toggleProsForm = () => {
    setShowProsForm(!showProsForm);
    setShowConsForm(false);
  };

  const toggleConsForm = () => {
    setShowConsForm(!showConsForm);
    setShowProsForm(false);
  };

// add active class to debate graph icon start
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  // add active class to debate graph icon end
  
  return (
    <>
      <Modal
        show={detailDebateModal}
        size="lg"
        onHide={handleClose}
        centered
        dir="rtl"
      >
        <Card closeButton>
          <Card.Img
            variant="top"
            src={baseUrl + debateDetails?.image}
            height={300}
          />
          <Card.Body>
            <Card.Title>{debateDetails?.title}</Card.Title>
            <Card.Text>
              <Card.Title>{tHn.Background_Info}</Card.Title>
              {debateDetails?.backgroundinfo}
            </Card.Text>
          </Card.Body>

          <hr />
          <div className="color-text-icon test d-flex align-items-center justify-content-evenly m-0">
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
        <Button onClick={handleClose}>Enter</Button>
      </Modal>
      <Header />

      <section
        style={{ background: "#F2F4F5", paddingBottom: "calc(100vh - 250px)" }}
        className="h-100"
        dir="rtl"
      >
        <Container>
          <nav class="navbar navbar-expand-lg bg-body-tertiary debate-graph-nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mb-2 mb-lg-0 m-auto p-0 d-flex justify-content-center">
                  <li className={`default ${activeIndex === 0 ? "active" : ""}`} onClick={() => handleClick(0)}>
                    <a class="nav-link m-0" onClick={() => handleChart("d3Chart")}>
                    <ImTree />
                    </a>
                  </li>
                  <li className={`default ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>
                    <a class="nav-link m-0" onClick={() => handleChart("sunburst")}>
                    <TbChartDonut4 />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Row>
            <div style={{ maxwidth: "250px" }}>
              {activeChart === "sunburst" ? (
                <Sunburst
                  data={sunburstData}
                  setOldTitle={setOldTitle}
                  debateDetails={debateDetails}
                  setDebateDetails={setDebateDetails}
                  width={500}
                  height={500}
                />
              ) : (
                ""
              )}
            </div>
            <Col md={10} className="m-auto mt-4 test">
              <div className="p-4 my-4  ">
                <div
                  style={{ background: "#ffff" }}
                  className="p-4 rounded w-100 m-auto"
                  onClick={() => revertToOldTitle()}
                >
                  <p>{oldTitle}</p>
                </div>
                <div
                  className="detail-comment"
                  style={{ display: commentListVisible ? "block" : "none" }}
                >
                  <div className="comment-panel position-relative">
                    <div className="comment-list w-50 mx-auto">
                      <Container>
                        {comments.map((comment) => (
                          <Card
                            key={comment.id}
                            style={{ width: "23rem mb-5" }}
                          >
                            <Card.Body>
                              <Card.Title>{comment.user.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {comment.timestamp}
                              </Card.Subtitle>
                              <Card.Text>{comment.comment}</Card.Text>
                              <div className="ellipsis-menu d-flex align-items-baseline position-absolute mt-4">
                                <i
                                  className="fa fa-ellipsis-v text-secondary px-2 "
                                  onClick={() =>
                                    handleEllipsisClick(comment.id)
                                  }
                                />
                                {ellipsisMenuOpen === comment.id && (
                                  <div className="ellipsis-dropdown d-flex">
                                    <p
                                      className="px-3"
                                      onClick={() =>
                                        hideComment(comment.id, comment.user.id)
                                      }
                                    >
                                      <i
                                        class="fa fa-trash-o text-secondary px-1"
                                        aria-hidden="true"
                                      ></i>
                                    </p>
                                    <p onClick={() => editItem(comment.id)}>
                                      <i
                                        class="fa fa-pencil text-secondary px-1"
                                        aria-hidden="true"
                                      ></i>
                                    </p>

                                    {/* Add your delete functionality here */}
                                  </div>
                                )}
                              </div>
                            </Card.Body>
                            {/* <p className="text-secondary d-inline-block px-2"><i class="fa fa-ellipsis-v text-secondary px-1" aria-hidden="true"></i></p> */}
                          </Card>
                        ))}
                      </Container>
                    </div>
                    <div>
                      <div className="message-card">
                        <input
                          className="form-control"
                          id="textAreaExample"
                          placeholder="Suggest improvement"
                          rows="4"
                          value={commentText}
                          onChange={handleCommentChange}
                        />
                      </div>
                      <div className="btn-add-cment position-absolute start-10">
                        {toggleSubmit ? (
                          <i
                            class="fa fa-plus add-btn"
                            aria-hidden="true"
                            onClick={handleAddComment}
                          ></i>
                        ) : (
                          <i
                            class="fa fa-pencil add-btn"
                            aria-hidden="true"
                            onClick={handleAddComment}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------comment box------------ */}
                <div
                  style={{ background: "#ffff" }}
                  className="p-4 mt-1 rounded"
                >
                  {debateDetails?.title}
                </div>
                <div className="d-flex">
                  <div className="w-50">
                    <div
                      style={{ background: "#ffff" }}
                      className="text-success  p-2 border rounded"
                    >
                      <Button onClick={toggleProsForm} className="btn-success">
                        +
                      </Button>
                      Pros
                    </div>
                    {showProsForm && (
                      <div
                        style={{ background: "#ffff" }}
                        className="p-2 border rounded"
                      >
                        <Form onSubmit={handleSubmitPros}>
                          <Form.Group controlId="formName">
                            <Form.Control
                              type="text"
                              placeholder="Suggest your pros here."
                              name="title"
                              value={pros.title}
                              maxLength="500"
                              autoFocus
                              onChange={handleProsChange}
                            />
                            {textProsCount}/500
                          </Form.Group>

                          <Button
                            className="my-2"
                            variant="success"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Pros
                          </Button>
                        </Form>
                      </div>
                    )}
                  </div>
                  <div className="w-50">
                    <div
                      style={{ background: "#ffff" }}
                      className="text-danger p-2 border rounded"
                    >
                      <Button onClick={toggleConsForm} className="btn-danger">
                        +
                      </Button>
                      Cons
                    </div>
                    {showConsForm && (
                      <div
                        style={{ background: "#ffff" }}
                        className="p-2 border rounded"
                      >
                        <Form onSubmit={handleSubmitCons}>
                          <Form.Group controlId="formName">
                            <Form.Control
                              type="text"
                              placeholder="Suggest your cons here."
                              name="title"
                              value={cons.title}
                              autoFocus
                              maxLength="500"
                              onChange={handleConsChange}
                            />
                            {textConsCount}/500
                          </Form.Group>
                          <Button
                            className="my-2"
                            variant="danger"
                            type="submit"
                            style={{ fontWeight: "700" }}
                          >
                            Cons
                          </Button>
                        </Form>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50 p-2 mt-1 rounded">
                    {debateDetails?.pros &&
                      debateDetails?.pros.map((val, index) => (
                        <div
                          key={val.id}
                          style={{ background: "#ffff" }}
                          className="p-2 mt-1 rounded"
                          onClick={() => handleDivClick(val.id, true)}
                        >
                          {val?.title}
                        </div>
                      ))}
                  </div>
                  <div className="w-50 p-2 mt-1 rounded">
                    {debateDetails?.cons &&
                      debateDetails?.cons.map((val, index) => (
                        <div
                          key={val.id}
                          style={{ background: "#ffff" }}
                          onClick={() => handleDivClick(val.id, false)}
                          className="p-2 mt-1 rounded"
                        >
                          {val?.title}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SingleDebate;
