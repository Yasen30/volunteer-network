import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import SideNavBar from "../SideNavBar";

const AddEvent = () => {
  const onSubmit = (data) => {
    axios
      .post(`https://infinite-journey-26479.herokuapp.com/events`, data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Your Event is Added", {
            icon: "success",
          });
        }
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section className="py-5">
      <Container>
        <div>
          <h3 className="fw-bold pb-5">Add Event</h3>
        </div>
        <Row>
          <Col sm={12} md={2} className="shadow-lg">
            <SideNavBar></SideNavBar>
          </Col>
          <Col sm={12} md={10}>
            <form
              className="login-area border-2 shadow-lg m-auto py-5 mt-5 px-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Enter Your Event Name"
                className="input w-75"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="d-block text-danger">
                  This field is required
                </span>
              )}
              <input
                placeholder="Enter Your Description"
                className="input w-75 "
                {...register("description", { required: true })}
              />
              <br />
              {errors.description && (
                <span className="text-danger d-block">
                  This field is required
                </span>
              )}
              <input
                placeholder="Enter Your Event Image Link"
                type="text"
                className="input w-75 "
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-danger d-block">
                  This field is required
                </span>
              )}
              <br />
              <input className="btn btn-primary" type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddEvent;
