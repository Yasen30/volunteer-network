import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import UseAuth from "../../../Hooks/UseAuth";

const NavBar = () => {
  const { logout, user } = UseAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">
          <img
            height="50"
            src="https://i.ibb.co/6Xstc3L/Group-1329.png"
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/my-events">
              My Events
            </Nav.Link>
            <Nav.Link as={Link} to="/donations">
              Dontaions
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>

            {user?.email ? (
              <>
                <div className="d-lg-flex align-items-center">
                  <span className="d-block d-sm-block d-lg-inline text-danger fw-bold me-3">
                    {user?.displayName}
                  </span>
                  <button
                    onClick={logout}
                    className="btn btn-primary mt-3 mt-lg-0"
                  >
                    Log out
                  </button>
                </div>

                <Nav.Link as={Link} to="/admin-pannel/volunteer-resigter-list">
                  <button className="btn btn-danger  mx-3 mt-3 mt-lg-0">
                    Admin
                  </button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link>
                <button className="btn btn-primary">Login</button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
