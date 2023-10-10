import React, { useContext, useEffect, useState } from "react";
import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";
import Context from "../Contexts/Keys";
import Button from "../UI/Button";
import NoData from "../UI/NoData";
import axios from "axios";
export default function NewsFiles({
  query,
  setErrors,
  search,
  searchData,
  load,
  setLoad,
  theme,
  loadingProgress,
  setServerError,
}) {
  const { topic, fromDate, toDate, category, country, isData } = searchData;
  const [newsData, setNewsData] = useState([]);
  const [index, setIndex] = useState(10);

  function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
  }

  const context = useContext(Context);
  // const repidAPIKey = context.rapidAPICors;
  const fetchNewsData = async (url) => {
    loadingProgress(30);
    setLoad(true);
    // console.log("running baba");
    try {
      setErrors(false);
      const options = {
        url,
        method: "GET",
        params: {},
        headers: {},
        cookies: {},
      };
      console.log(options.url);
      const response = await axios.request(options); //You can do changes here for allowing all origin for this api
      // const response = await fetch(
      //   url /*, {
      //   method: "GET",
      //   headers: {
      //     origin: "*",
      //     "X-Requested-With": "XMLHttpRequest",
      //     "Content-Type": "application/json",
      //   },
      // }*/
      // );
      const data = response.data;
      loadingProgress(50);
      // console.log(response);

      if (!(response.status === 200)) {
        throw new Error(
          "Something went wrong on server side : " +
            data.message.split(".")[0] +
            `. Status :  ${response.status.toString()}`
        );
      }
      if (data.articles.length === 0) {
        setErrors(true);
        setServerError(
          "No news found on the given topic. Please look for another topic"
        );
      } else {
        setNewsData(
          data.articles.map((art) => {
            return (
              <Card
                title={art.title}
                publishedDate={art.publishedAt}
                imgUrl={art.urlToImage}
                description={art.description}
                newsURL={art.url}
                source={art.source.name}
                key={Math.floor(Math.random() * 100000000000)}
                className={theme}
              />
            );
          })
        );
      }
      setLoad(false);
      // console.log(data.articles);
      loadingProgress(100);
      return data.articles;
    } catch (e) {
      setErrors(true);
      setLoad(false);
      setServerError(
        e.message +
          `${" 🥲There are too many request or service is unavailable at the moment."}`
      );
      console.error(e);
      loadingProgress(100);
    }
  };
  const loadMore = () => {
    // console.log("Loaded more");
    setIndex(index + 10);
  };

  // console.log(query);
  useEffect(() => {
    const apiKey = context.apiKey;
    const mainURLEverything = context.mainURLEverything;
    const topHeadlines = context.mainURLTopHeadlines;

    let updatedURL = "";
    // console.log("SearchData=>" + searchData.isData);
    if (searchData.isData) {
      if (searchData.category === "top-headlines") {
        updatedURL = `${topHeadlines}?language=en&q=${searchData.topic}&country=${searchData.country}&apiKey=${apiKey} `;
      } else
        updatedURL = `${context.mainURLEverything}language=en&q=${searchData.topic}&searchin=title,content,description&sortBy=popularity&from=${searchData.fromDate}&to=${searchData.toDate}&apiKey=${apiKey}`;
    } else {
      if (search) {
        updatedURL = `${context.mainURLEverything}language=en&q=${query}&searchin=title,content,description&sortBy=publishedAt&apiKey=${apiKey}`;
      } else if (isDateValid(query /**here query is passed as a date **/)) {
        let dateOneDayAfter = new Date(
          new Date(query).setDate(new Date(query).getDate() + 1)
        )
          .toISOString()
          .split("T")[0];
        updatedURL = `${mainURLEverything}language=en&q=india&searchin=title,content,description&from=${query}&to=${dateOneDayAfter}&apiKey=${apiKey}`;
      } else if (query === "top-headlines") {
        updatedURL = `${context.mainURLTopHeadlines}language=en&country=in&apiKey=${apiKey}`;
      } else {
        updatedURL = `${mainURLEverything}language=en&q=${query}&apiKey=${apiKey}`;
      }
    }
    /*const arts = */ fetchNewsData(updatedURL);
    // console.log(updatedURL);
    // console.log(arts);
    return () => {
      return 1;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, topic, fromDate, toDate, category, country, isData]);

  return (
    <Wrapper>
      {!load && newsData.length !== 0 && (
        <div className="card-columns mt-2">{newsData.slice(0, index)}</div>
      )}
      {newsData.length !== index ? (
        !load && !(newsData.length < 9) ? (
          <Button onClick={loadMore} />
        ) : (
          ""
        )
      ) : !load ? (
        <NoData type={"info"} error={false} />
      ) : (
        ""
      )}
    </Wrapper>
  );
}
