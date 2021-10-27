import React from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from?.pathname || "/home";
  const { gogleSignIn, user, setUser, isLoading, setIsLoading } = UseAuth();

  const handleGogleSignIn = () => {
    gogleSignIn()
      .then((res) => {
        setUser(res.user);
        history.push(redirectUrl);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="pt-5">
      <Container className="my-5 border-2 shadow-lg mx-auto py-5 text-center login-area">
        <h4>Log in</h4>
        <button onClick={handleGogleSignIn} className="btn btn-danger mt-5">
          Continue With Gogle
        </button>
      </Container>
    </section>
  );
};

export default Login;
