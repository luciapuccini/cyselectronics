import React from "react";
import { Switch, Route } from "react-router-dom";

import CustomNavBar from "./components/organisms/NavBar/NavBar";

import "./App.css";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Company from "./routes/Company";
import Contact from "./routes/Contact";
import News from "./routes/News";
import Products from "./routes/Products";
import Services from "./routes/Services";
import Error from "./routes/Error";

const App = () => (
  <>
    <CustomNavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/products">
        <Products />
        
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;
