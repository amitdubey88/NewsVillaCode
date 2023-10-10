import React from "react";
import Context from "./Keys";

export default function ContextWrapper({ children }) {
  return (
    <Context.Provider
      value={{
        // apiKey: /*Add your newsAPI Key here 😇* uncomment this code once api key available/ ,
        mainURLEverything: "https://newsapi.org/v2/everything?",
        mainURLTopHeadlines: "https://newsapi.org/v2/top-headlines?",
        query: "",
        // rapidAPICors: 🙋//Add your rapid API Key over here (This is for cors enabling for all origin you can find any other alternative to enable it if you want.),
      }}
    >
      {children}
    </Context.Provider>
  );
}
