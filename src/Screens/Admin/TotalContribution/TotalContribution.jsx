import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function TotalContribution() {
    // GET ALL STATS OF SITE
    const [stats, setStats] = useState([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://laradebate.jmbliss.com/api/admin/all-stats`);
            setStats(response?.data);
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {

        fetchData();
    }, []);

    return (
        <>
            <AdminDashboard />
            <div className="total-contribution invoice-system" >
                <section className="card-contri">
                    <Container>
                        <Row>
                            <Col className="contribution-content ">
                                <div className="mt-top text-center" >
                                    <div className=" bg-secondary box-contribution" >
                                        <i class="fa fa-users contri-user" aria-hidden="true"></i>
                                        <p className="text-black">Overall Users</p>
                                        <h4>{stats.overallUsers}</h4>
                                    </div>

                                    <div className=" bg-info box-contribution" >
                                        <i class="bx bx-user contri-user" aria-hidden="true"></i>
                                        <p className="text-black">Overall Parent Debates</p>
                                        <h4>{stats.overallParentDebates}</h4>
                                    </div>

                                    <div className=" bg-warning box-contribution" >
                                        <i class="fa fa-child contri-user" aria-hidden="true"></i>
                                        <p className="text-black">Overall Child Debates</p>
                                        <h4>{stats.overallChildDebates}</h4>
                                    </div>

                                    <div className=" bg-primary box-contribution" >
                                        <i class="fa fa-comment contri-user" aria-hidden="true"></i>
                                        <p className="text-black">Overall Comments</p>
                                        <h4>{stats.overallComments}</h4>
                                    </div>

                                    <div className=" bg-danger box-contribution" >
                                        <i class="fa-solid fa-check-to-slot contri-user" aria-hidden="true"></i>
                                        <p className="text-black">Overall Votes</p>
                                        <h4>{stats.overallVotes}</h4>
                                    </div>

                                    <div className=" bg-success box-contribution" >
                                        <i class="bx bx-note contri-user" aria-hidden="true"></i>
                                        <p className="text-black" >Overall Claims</p>
                                        <h4>{stats.overallClaims}</h4>
                                    </div>

                                    <div className=" bg-success box-contribution" >
                                        <i class="bx bx-donate-heart contri-user" aria-hidden="true"></i>
                                        <p className="text-black" >Overall Contributions</p>
                                        <h4>{stats.overallContributions}</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}
export default TotalContribution;