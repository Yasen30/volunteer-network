import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const Service = (props) => {
  let { name, color, image } = props.data;
  const { setSelectedService, user } = UseAuth();
  const history = useHistory();

  const handleService = (data) => {
    data["email"] = user?.email;
    setSelectedService(data);
    history.push("/add");
  };
  return (
    <Col>
      <Card
        onClick={() => handleService(props.data)}
        className="h-100 text-light text-center border-0 cursor-pointor"
      >
        <Card.Img variant="top" src={image} />
        <Card.Body className="py-3 rounded " style={{ backgroundColor: color }}>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
