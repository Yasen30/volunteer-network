import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import "./App.css";
import Home from "./Compontets/HomePage/Home/Home";
import NotMatch from "./Compontets/NotMatch/NotMatch";
import Login from "./Compontets/Login/Login";
import Authprovider from "./Context/Authprovider";
import AddVolunterr from "./Compontets/AddVolunterrPage/AddVolunterr";
import PrivateRoute from "./Compontets/PrivateRoute/PrivateRoute";
import Events from "./Compontets/HomePage/Events/Events";
import NavBar from "./Compontets/Shared/NavBar/NavBar";
import MyResigterEvents from "./Compontets/MyResigterEventPage/MyResigterEvents";
import AddEvent from "./Compontets/Admin/AddEvent/AddEvent";
import AllVolunterrResigterList from "./Compontets/Admin/AllVolunterrResigterList/AllVolunterrResigterList";
import Footer from "./Compontets/Shared/Footer/Footer";
import Blog from "./Compontets/HomePage/Blog/Blog";
import Donation from "./Compontets/HomePage/Donation/Donation";

const App = () => {
  return (
    <Authprovider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Events></Events>
          </Route>
          <Route path="/donations">
            <Donation></Donation>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <PrivateRoute path="/admin-pannel/volunteer-resigter-list">
            <AllVolunterrResigterList></AllVolunterrResigterList>
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
            <MyResigterEvents></MyResigterEvents>
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
        <Footer></Footer>
      </Router>
    </Authprovider>
  );
};

export default App;
