import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Student from "./pages/Student";
import Addstudent from "./pages/Addstudent";
import Editstudent from "./pages/Editstudent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route exact path="/add-student" component={Addstudent} />
        <Route exact path="/edit-student/:id" component={Editstudent} />
      </Switch>
    </Router>
  );
}

export default App;
