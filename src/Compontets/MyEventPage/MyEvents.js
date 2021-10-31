import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth";
import MyEvent from "./MyEvent";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const { user } = UseAuth();
  //
  useEffect(() => {
    fetch("https://infinite-journey-26479.herokuapp.com/my-events")
      .then((res) => res.json())
      .then((data) => {
        const filterEvents = data.filter((data) => data.email === user?.email);
        setMyEvents(filterEvents);
      });
  }, []);

  //   handle delete function
  const handleDelete = (data) => {
    const id = data._id;
    swal({
      title: "Are you sure Want Cancel this Event",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://infinite-journey-26479.herokuapp.com/my-events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              swal("Your Event Cancel Delete", {
                icon: "success",
              });
              const remaing = myEvents.filter((data) => data._id !== id);
              setMyEvents(remaing);
            }
          });
      }
    });
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
