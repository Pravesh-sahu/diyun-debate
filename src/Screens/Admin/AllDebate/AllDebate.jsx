import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
// import { Container, Col, Row, Card } from "react-bootstrap";
// import { FaEye, FaPen, FaVoteYea } from "react-icons/fa";
// import { TbMessage2, TbUsersGroup } from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function AllDebate() {
    const { category } = useParams();
    const [apiData, setApiData] = useState([]);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://laradebate.jmbliss.com/api/admin/all-debates`
            );
            setApiData(response?.data?.mainDebates);
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("tag is not use in debate");

        }
    };
    useEffect(() => {
        fetchData();
    }, [category]);
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

// DELETE USER BY ID
const [usersDetailsDelete, setUsersDetailsDelete] = useState([]);
const handleDelete = async (id) => {
    debugger
    try {
        const response = await axios.delete(`https://laradebate.jmbliss.com/api/getdebatebyid/${id}/deletedebate`);
        setUsersDetailsDelete(response?.data);
        console.log(`deleted successfully.`, response);
        fetchData();
    } catch (error) {
        console.error("Error Delete User:", error);
    }
};


    return (
        <>
            <AdminDashboard />            
            <div class="invoice-system">
                <div class="customer_design d-flex justify-content-start mb-5 ">
                    <h3 className="mx-3 mb-0" ><i class="fa fa-user mx-3" aria-hidden="true"></i>Debate</h3>
                    {/* <Button variant="success"><i class="fa fa-plus m-1" aria-hidden="true"></i>Add New</Button>{' '} */}
                </div>
                {/* container */}
                <div class="table-cust all-debat" >
                    <table class="table responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User_id</th>
                                <th>Parent_id</th>
                                <th>Side</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>Image</th>
                                <th>Created_at</th>
                                <th>Updated_at</th>                             
                                
                                <th colspan="3" class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {apiData &&
                                    apiData?.map((debate , index) => (
                            <tr key={debate?.id}>
                                <td class="checkbox" data-label="S.No">{`${debate?.id}`}</td>
                                <td data-label="User id">{`${debate?.user_id}`}</td>
                                <td data-label="parent id">{`${debate?.parent_id}`}</td>
                                <td data-label="side">{`${debate?.side}`}</td>
                                <td data-label="title"className="title-debate">{`${debate?.title}`}</td>
                                <td data-label="tags">{`${debate?.tags}`}</td>
                                <td data-label="Profile Picture"className="profile-img"><img src={baseUrl + debate?.image} alt="---" /></td>
                                <td data-label="Created at">{formatDate(debate?.created_at)}</td>
                                <td data-label="updated at">{formatDate(debate?.updated_at)}</td>                               
                                <td class="text-center" ><Link to={`/debate-detail/${debate.id}`}> <Button variant="primary" ><i class="fa fa-eye m-1" aria-hidden="true"></i>view</Button>{' '}</Link>
                                    <Button variant="danger" onClick={() => handleDelete(debate.id)}><i class="fa fa-times m-1" aria-hidden="true"></i>Delete</Button>{' '}</td>                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default AllDebate;