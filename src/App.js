import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Compontets/NavBar/NavBar";
import Home from "./Compontets/HomePage/Home/Home";
import NotMatch from "./Compontets/NotMatch/NotMatch";

const App = () => {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
