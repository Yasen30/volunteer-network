import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Compontets/HomePage/Home/Home";
import NotMatch from "./Compontets/NotMatch/NotMatch";
import Login from "./Compontets/Login/Login";
import Authprovider from "./Context/Authprovider";
import AddVolunterr from "./Compontets/AddVolunterrPage/AddVolunterr";
import PrivateRoute from "./Compontets/PrivateRoute/PrivateRoute";
import Events from "./Compontets/HomePage/Events/Events";

import MyResigterEvents from "./Compontets/MyResigterEventPage/MyResigterEvents";
import AddEvent from "./Compontets/Admin/AddEvent/AddEvent";
import AllVolunterrResigterList from "./Compontets/Admin/AllVolunterrResigterList/AllVolunterrResigterList";
import Footer from "./Compontets/Shared/Footer/Footer";
import Blog from "./Compontets/HomePage/Blog/Blog";
import Donation from "./Compontets/HomePage/Donation/Donation";
import NavBar from "./Compontets/Shared/NavBar/NavBar";

const App = () => {
  return (
    <Authprovider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/home" element={<Events></Events>}></Route>
          <Route path="/home" element={<Events></Events>}></Route>
          <Route path="/donations" element={<Donation></Donation>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/admin-pannel/volunteer-resigter-list"
            element={
              <PrivateRoute>
                <AllVolunterrResigterList></AllVolunterrResigterList>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin-pannel/add-event"
            element={
              <PrivateRoute>
                <AddEvent></AddEvent>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/resigter-volunteer/:id"
            element={
              <PrivateRoute>
                <AddVolunterr></AddVolunterr>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/my-events"
            element={
              <PrivateRoute>
                <MyResigterEvents></MyResigterEvents>
              </PrivateRoute>
            }
          ></Route>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotMatch></NotMatch>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </Authprovider>
  );
};

export default App;
