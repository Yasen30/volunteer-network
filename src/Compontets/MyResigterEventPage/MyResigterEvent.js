import React from "react";
import { Card, Col } from "react-bootstrap";
import "./MyResigterEvents.css";

const MyResigterEvent = (props) => {
  const { eventName, image, date } = props.data;
  return (
    <Col>
      <Card className="border-0 shadow-lg h-100 p-4 flex-md-row">
        <Card.Img
          width="200"
          height="180"
          className="my-event-img"
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title as={"h3"} className="fw-bold">
            {eventName}
          </Card.Title>
          <Card.Text as={"h4"} className="fw-bold mt-2">
            {date}
          </Card.Text>
          <div className="text-center text-md-end mt-4">
            <button
              onClick={() => props.handleDelete(props.data)}
              className="btn btn-outline-danger"
            >
              Cancel
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyResigterEvent;
