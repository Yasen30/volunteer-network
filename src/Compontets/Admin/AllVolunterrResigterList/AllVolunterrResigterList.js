import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import swal from "sweetalert";
import "./AllVolunterrResigterList.css";
import SideNavBar from "../SideNavBar";
import LoadingSpiner from "../../Shared/LoadingSpiner/LoadingSpiner";

const AllVolunterrResigterList = () => {
  // use state
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  // useeffect
  useEffect(() => {
    fetch("https://infinite-journey-26479.herokuapp.com/resigter-events")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setList(data);
      });
  }, []);
  // handle delete function
  const handleDelete = (id) => {
    swal({
      title: "Are you sure Want Delete this Event",
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
              swal("Your Event Delete", {
                icon: "success",
              });
            }
            const item = list.filter((info) => info._id !== id);
            setList(item);
          });
      }
    });
  };

  return (
    <section className="py-5">
      <Container>
        <h3 className="fw-bold pb-5">Volunteer Resigter list</h3>

        <Row>
          <Col sm={12} md={2} className="shadow-lg">
            <SideNavBar></SideNavBar>
          </Col>
          <Col sm={12} md={10}>
            <Table className="table pt-5 pt-md-0">
              <Thead className="table-head">
                <Tr className="fw-bold">
                  <Th scope="col">Name</Th>
                  <Th scope="col">Email</Th>
                  <Th scope="col">Registating Date</Th>
                  <Th scope="col">Volunteer List</Th>
                  <Th scope="col">Action</Th>
                </Tr>
              </Thead>
              {list.map((data) => (
                <Tbody key={data._id} className="border-top-0">
                  <Tr className="border-0 shadow-lg mt-4">
                    <Td className="table-data" scope="row">
                      {data.name}
                    </Td>
                    <Td>{data.email}</Td>
                    <Td>{data.date}</Td>
                    <Td>{data.eventName}</Td>
                    <Td>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllVolunterrResigterList;
