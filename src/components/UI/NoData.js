import React from "react";
import "./NoData.css";

export default function NoData({ error, type, serverError }) {
  if (type !== undefined) {
    // changes are made here for now
    return (
      <div className={`alert alert-success m-2`} role="alert">
        <h4 className="alert-heading" style={{ color: "#0C5424" }}>
          No more news available for now on this. 🙋
        </h4>
        <p style={{ color: "#155724" }}>
          Ahha! there are no news on this topic for now!{" "}
        </p>
        <hr />
        <p className="mb-0">Please look for other topics. Thanks.</p>
      </div>
    );
  } else if (error) {
    return (
      <div className={`alert alert-danger m-2 m-bottom`} role="alert">
        <h4 className="alert-heading">Something went wrong 🙃</h4>
        {/* <p>May be some issue in the backend. Will fix it soon.</p> */}
        <hr />
        <p className="mb-0">{serverError}</p>
      </div>
    );
  }
}
