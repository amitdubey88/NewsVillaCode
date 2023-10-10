import React from "react";

const Context = React.createContext({
  apiKey: "",
  mainURLEverything: "",
  mainURLTopHeadlines: "",
  query: "",
  updatedURL: "",
  showModal: false,
  theme: "",
  rapidAPICors: "",
});

export default Context;
