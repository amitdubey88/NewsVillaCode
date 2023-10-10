import React from "react";
import "./Results.css";

export default function Results({ details }) {
  return (
    <div class="container">
      <div class="top-headlines">
        <h4>Top Headlines</h4>
        <p>{details}</p>
      </div>
    </div>
  );
}
