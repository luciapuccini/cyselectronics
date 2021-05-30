import React from "react";
import errorPage from "../assets/error_page.svg";
import "./Error.css";

const Error = () => (
  <div className="container">
    <img alt="404 not found" src={errorPage} height="500px" width="500px" />
  </div>
);

export default Error;
