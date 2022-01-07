import React from "react";
import Home from "./components/Home";
import Newarrivals from "./components/Newarrivals";
import Clothing from "./components/Clothing";
import Outerwear from "./components/Outerwear";
import Shoes from "./components/Shoes";
import Accessories from "./components/Accessories";
import Knowmore from "./components/Knowmore";
import Navbar from "./components/Navbar";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/newarrivals" component={Newarrivals} />
        <Route exact path="/clothing" component={Clothing} />
        <Route exact path="/outerwear" component={Outerwear} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/knowmore" component={Knowmore} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
