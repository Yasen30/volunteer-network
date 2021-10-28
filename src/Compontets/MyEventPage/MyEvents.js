import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import MyEvent from "./MyEvent";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const { user } = UseAuth();
  //
  useEffect(() => {
    fetch("http://localhost:5000/my-events")
      .then((res) => res.json())
      .then((data) => {
        const filterEvents = data.filter((data) => data.email === user?.email);
        setMyEvents(filterEvents);
      });
  }, []);

  //   handle delete function
  const handleDelete = (data) => {
    const id = data._id;
    const proced = window.confirm("Are Your Want To Delete");
    if (proced) {
      fetch(`http://localhost:5000/my-events/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("your Events Delete");
            const remaing = myEvents.filter((data) => data._id !== id);
            setMyEvents(remaing);
          }
        });
    }
  };
  return (
    <Container className="my-5">
      <Row xs={1} md={2} className="g-4">
        {myEvents.map((data) => (
          <MyEvent
            key={data._id}
            data={data}
            handleDelete={handleDelete}
          ></MyEvent>
        ))}
      </Row>
    </Container>
  );
};

export default MyEvents;
