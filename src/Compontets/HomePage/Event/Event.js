import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Event = (props) => {
  // delcare name color value by props
  let { name, color, image, _id } = props.data;
  const history = useHistory();

  const handleService = () => {
    history.push(`/resigter-volunteer/${_id}`);
  };
  return (
    <Col>
      <Card
        onClick={handleService}
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

export default Event;
