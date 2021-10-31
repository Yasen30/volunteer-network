import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import "./App.css";
import NavBar from "./Compontets/NavBar/NavBar";
import Home from "./Compontets/HomePage/Home/Home";
import NotMatch from "./Compontets/NotMatch/NotMatch";
import Login from "./Compontets/Login/Login";
import Authprovider from "./Context/Authprovider";
import AddVolunterr from "./Compontets/AddVolunterrPage/AddVolunterr";
import PrivateRoute from "./Compontets/PrivateRoute/PrivateRoute";
import Events from "./Compontets/HomePage/Events/Events";
import MyEvents from "./Compontets/MyEventPage/MyEvents";
import VolunteerResigterList from "./Compontets/Admin/VolunteerResigterList/VolunteerResigterList";
import AddEvent from "./Compontets/Admin/AddEvent/AddEvent";

const App = () => {
  return (
    <Authprovider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Events></Events>
          </Route>
          <PrivateRoute path="/admin-pannel/volunteer-resigter-list">
            <VolunteerResigterList></VolunteerResigterList>
          </PrivateRoute>
          <PrivateRoute path="/admin-pannel/add-event">
            <AddEvent></AddEvent>
          </PrivateRoute>
          <PrivateRoute path="/resigter-volunteer/:id">
            <AddVolunterr></AddVolunterr>
          </PrivateRoute>
          <PrivateRoute path="/resigter-volunteer/:id">
            <AddVolunterr></AddVolunterr>
          </PrivateRoute>
          <PrivateRoute path="/my-events">
            <MyEvents></MyEvents>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </Authprovider>
  );
};

export default App;
