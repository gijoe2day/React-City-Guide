import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/details" component={Details} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
