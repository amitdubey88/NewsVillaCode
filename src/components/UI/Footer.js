import React from "react";

export default function Footer() {
  return (
    <div
      className="bg-dark text-center mt-3 text-light p-3"
      style={{ fontFamily: "revert" }}
    >
      @Designed by Amit Dubey &copy; {new Date().getFullYear()}
    </div>
  );
}
