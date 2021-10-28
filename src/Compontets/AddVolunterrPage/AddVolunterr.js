import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import UseEvents from "../../Hooks/UseEvents";
import "./AddVolunterr.css";

const AddVolunterr = () => {
  const { user } = UseAuth();
  // get value form useparams
  const { id } = useParams();
  const [events] = UseEvents();
  const findEvents = events.find((data) => data._id == id);
  // console.log(findEvents);
  // delcare use history
  const history = useHistory();
  // use form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // onsubmit function
  const onSubmit = (data) => {
    const doc = {
      name: data?.name,
      email: data.email,
      image: findEvents?.image,
      date: data?.date,
      eventName: data?.eventName,
    };
    console.log(doc);
    fetch("http://localhost:5000/my-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("resigter sucessfully");
          history.push("/home");
        }
      });
  };
  return (
    <form
      className="login-area border-2 shadow-lg m-auto py-5 mt-5 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="fw-bold">Resigter as a Volunteer</h1>
      <input
        placeholder="Enter Your Name"
        className="input w-75"
        defaultValue={user?.displayName}
        {...register("name", { required: true })}
        readOnly
      />
      <br />
      {errors.name && <span>This field is required</span>}
      <input
        defaultValue={user?.email}
        placeholder="Enter Your Email"
        className="input w-75 "
        {...register("email", { required: true })}
        readOnly
      />
      <br />
      {errors.email && <span>This field is required</span>}
      <input
        placeholder="Enter Your Description"
        className="input w-75 "
        {...register("description", { required: true })}
      />
      <br />
      {errors.description && (
        <span className="d-block text-danger fw-bolder">
          This field is required
        </span>
      )}
      <input
        type="date"
        placeholder="Enter Your Date"
        className="input w-75 "
        {...register("date", { required: true })}
      />
      <br />
      {errors.date && (
        <span className="d-block text-danger fw-bolder">
          This field is required
        </span>
      )}
      <input
        readOnly
        defaultValue={findEvents?.name}
        placeholder="Enter Your Event Name"
        className="input w-75 "
        {...register("eventName", { required: true })}
      />
      <br />
      <input className="btn btn-primary" type="submit" />
    </form>
  );
};

export default AddVolunterr;
