import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const { logout, user } = UseAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand href="home">
            <img
              height="50"
              src="https://i.ibb.co/6Xstc3L/Group-1329.png"
              alt=""
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dontaions">
              <Nav.Link>Dontaions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/my-events">
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            {user?.email ? (
              <>
                <div className="d-lg-flex align-items-center">
                  <span className="d-block d-sm-block d-lg-inline text-danger fw-bold">
                    {user?.displayName}
                  </span>
                  <button
                    onClick={logout}
                    className="btn btn-primary mt-3 mt-lg-0"
                  >
                    Log out
                  </button>
                </div>
                <LinkContainer to="/admin-pannel/volunteer-resigter-list">
                  <button className="btn btn-danger  mx-3 mt-3 mt-lg-0">
                    Admin
                  </button>
                </LinkContainer>
              </>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <button className="btn btn-primary">Login</button>
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
