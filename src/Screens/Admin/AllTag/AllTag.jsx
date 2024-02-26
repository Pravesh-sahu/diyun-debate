import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


function Alltag() {
    const [tag, setTags] = useState([]);
    // Add New Admin Add Tag two API
    const [newTag, setNewTag] = useState({
        tag: "",
        image: null,
    });
    const [showAddCard, setShowAddCard] = useState(false);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`https://laradebate.jmbliss.com/api/debates/tags`);
                setTags(response?.data.tags);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchTags();
    }, []);

    // Add New Admin Add Tag two API
    const handleInputChange = (e) => {
        setNewTag({ ...newTag, tag: e.target.value });
    };
    const handleFileChange = (e) => {
        setNewTag({ ...newTag, image: e.target.files[0], });
    };


    const handleAddTag = async () => {
        try {
            console.log("newTag:", newTag);

            const formData = new FormData();
            formData.append("tag", newTag.tag);
            formData.append("image", newTag.image);

            console.log("FormData:", formData);

            const response = await axios.post("https://laradebate.jmbliss.com/api/admin/add-tag", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Add tag response:", response);

            // After successful post, you may want to refetch the tags or update the state accordingly.
            console.log("Tag added successfully!");
            window.location.reload();

        } catch (error) {
            console.error("Error adding tag:", error);
        }
    };
    const toggleAddCard = () => {
        setShowAddCard(!showAddCard);
    };

    return (
        <>
            <AdminDashboard />
            <div class="invoice-system">
                <div class="customer_design d-flex justify-content-start mb-5 ">
                    <h3 className="mx-3 mb-0" ><i class="fa fa-user mx-3 " aria-hidden="true"></i>Tag</h3>
                    <Button variant="success" onClick={toggleAddCard}><i class="fa fa-plus " aria-hidden="true"></i>Add New</Button>{' '}
                    
                </div>
                {showAddCard && (
                <Card className="mb-5" style={{ width: '25rem' }}>
                    <Form.Group className="mt-4 px-3">
                        <Form.Label>Tag</Form.Label>
                        <Form.Control type="text" value={newTag.name} onChange={handleInputChange}
                            placeholder="Type here" />
                    </Form.Group>
                    <Card.Body>
                        <div className="All-tag-card" >
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control type="file" onChange={handleFileChange} />
                            </Form.Group>
                        </div>
                    </Card.Body>
                    <div className="tag-save-btn text-end mx-3 mb-4 " ><Button variant="secondary px-4 pt-2" onClick={handleAddTag}>Save</Button>{' '}</div>
                </Card>
)}
                <div class="table-cust container all-debat" >
                    <table class="table responsive">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tag &&
                                tag?.map((debate, index) => (
                                    <tr key={index}>
                                        <td data-label="name">{`${debate?.name}`}</td>
                                        <td data-label="Profile Picture" className="profile-img-tag"><img src={baseUrl + debate?.image} alt="---" /></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Alltag;


