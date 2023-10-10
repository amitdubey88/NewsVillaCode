import React from "react";
import logo from "./../../logo.gif";
import "./Loader.css";

export default function Loader({ loading }) {
  if (!loading) {
    return;
  }
  return (
    <div className="container loader">
      <div className="row">
        <img className="loader-img" src={logo} alt={"loading"} />
      </div>
    </div>
  );
}
