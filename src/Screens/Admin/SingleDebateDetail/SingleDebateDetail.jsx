import { } from "react-bootstrap";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// AllDebate -Subpage
function SingleDebateDetail() {
    const [userDetails, setUserDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            debugger
            try {
                const response = await axios.get("https://laradebate.jmbliss.com/api/admin/all-debates?id=${id}");
                setUserDetails(response?.data);
                console.log(response?.data);
                debugger
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);
    return (
        <>
         
            <section className="user-inford" >
                <Container>
                    <Row>
                        <div className="" >
                            <h2>User Profile Dashboard</h2>
                            <div className="user-detail-prof" >
                                <Card.Img variant="top" className="user-detail-img" src="/static/media/demo-portal-cover.jpeg" />
                                <div className="column-profile d-flex " >
                                    <Col className="column1-profile">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>id : <span>{userDetails?.id}</span></ListGroup.Item>
                                            <ListGroup.Item>Title : <span>{userDetails?.username}</span></ListGroup.Item>
                                            <ListGroup.Item>isDebatePublic : <span></span></ListGroup.Item>
                                            <ListGroup.Item>created_at : <span></span></ListGroup.Item>
                                        </ListGroup>
                                    </Col>

                                    <Col className="column2-profile">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Tags : <span></span></ListGroup.Item>
                                            <ListGroup.Item>Thesis : <span></span></ListGroup.Item>
                                            <ListGroup.Item>Total Comments : <span></span></ListGroup.Item>
                                            <ListGroup.Item>Total_votes : <span></span></ListGroup.Item>
                                            <ListGroup.Item>Total Received Thanks : <span></span></ListGroup.Item>
                                            <ListGroup.Item>Role : <span></span></ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default SingleDebateDetail;