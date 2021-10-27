import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, color, image } = props.data;
  return (
    <Col>
      <Link to="/add" className="text-decoration-none">
        <Card className="h-100 text-light text-center border-0">
          <Card.Img variant="top" src={image} />
          <Card.Body
            className="py-3 rounded "
            style={{ backgroundColor: color }}
          >
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Service;
