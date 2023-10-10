import React from "react";
import "./Button.css";
import "./Button.scss";

export default function Button({ onClick }) {
  return (
    <div className="text-center">
      <button className="btn btn-load mt-2 mb-2 button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
