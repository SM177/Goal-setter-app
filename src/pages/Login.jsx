import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
    });
    //   destructure the form fields
    const { email, password } = formFields;
    //   handle the onChange function
    const change = (e) => {
        setFormFields((prevVal) => ({
            ...prevVal,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <Container className="mt-5 fw-bolder">
            <Form className="col-lg-4 col-md-6 p-3 border shadow m-auto rounded fw-bolder">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Please enter your email..."
                    value={email}
                    onChange={change}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Please enter your password..."
                    value={password}
                    onChange={change}
                />
                <Button variant="success" className="w-100 mt-3">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;