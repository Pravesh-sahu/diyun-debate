import { } from "react-bootstrap";
import { Modal, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminLogin() {
    // Gmail login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState("");


    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password };

        setAllEntry([...allEntry, newEntry]);
        // Empty After Submit form
        setEmail("");
        setPassword("");

    };
    useEffect(() => {
        console.log(allEntry);
    }, [allEntry]);


    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog className="modal-lg" dir="rtl">
                    <Modal.Header closeButton>
                        <Modal.Title>Title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="text-center" >
                            <h1>Login</h1>
                        </div>
                        <Form action="" onSubmit={submitForm} >
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail" autoComplete="off">
                                <Form.Control type="text" placeholder="Enter email or Username"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <div className="text-center" >
                                <Button variant="primary" type="submit" className="my-4 px-4">
                                    Log In
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default AdminLogin;