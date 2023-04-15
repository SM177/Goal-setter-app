import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="warning">
        <Navbar.Brand>
          <Link to="/">
            <img className="ms-5"
              style={{
                width: "70px",borderRadius:'50%', clipPath:'circle'
              }}
              src="https://media.istockphoto.com/id/1282050925/vector/target-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=SOu9ubbgNIjroLgZE_yIUvKGiZlnyFR1B5swsLRUwL8="
              alt=""
            />
          </Link>
        </Navbar.Brand>
            <h1 className="text-center ms-5 fw-bolder">Goal Setter App (MERN Stack)</h1>
        <Nav className="ms-auto text-dark">
          <Link to="/register" className="btn btn-success fw-bolder text-dark text-decoration-none me-4 ">
            Register
          </Link>
          <Link to="/login" className=" btn btn-success fw-bolder text-dark text-decoration-none me-4">
            Login
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;