import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Register = () => {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
    });
    //   destructure the form fields
    const { name, email, password, c_password } = formFields;
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Please enter your name..."
                    value={name}
                    onChange={change}
                />
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
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    name="c_password"
                    placeholder="Please re-enter your password..."
                    value={c_password}
                    onChange={change}
                />
                <Button variant="success" className="w-100 mt-3">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;