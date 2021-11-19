import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth";
import LoadingSpiner from "../Shared/LoadingSpiner/LoadingSpiner";
import MyEvent from "./MyResigterEvent";

const MyResigterEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = UseAuth();
  //
  useEffect(() => {
    fetch("https://infinite-journey-26479.herokuapp.com/resigter-events")
      .then((res) => res.json())
      .then((data) => {
        const filterEvents = data.filter((data) => data.email === user?.email);
        setMyEvents(filterEvents);
        setLoading(false);
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
        fetch(
          `https://infinite-journey-26479.herokuapp.com/resigter-events/${id}`,
          {
            method: "DELETE",
          }
        )
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
      <div>
        <LoadingSpiner loading={loading}></LoadingSpiner>
      </div>
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

export default MyResigterEvents;
