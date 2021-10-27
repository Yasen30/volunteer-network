import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <section className="py-5 container">
        <div className="text-center row">
          <h1 className="fw-bold">I grow by helping people in need.</h1>
          <div className="col-lg-6 mx-auto pt-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {services.map((data) => (
            <Service data={data} key={data.name}></Service>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Services;
