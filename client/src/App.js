import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/music" component={Music}></Route>
            <Route exact path="/movies" component={Movies}></Route>
            <Route exact path="/books" component={Books}></Route>
            <Route exact path="/community" component={Community}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
