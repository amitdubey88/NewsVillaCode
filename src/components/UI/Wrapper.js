import React from "react";

export default function Wrapper(props) {
  return <div className="h-100 w-100 p-3">{props.children}</div>;
}
