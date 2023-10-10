import React, { useState } from "react";
import "./Navbar.css";
import Input from "../UI/Input";
import "../UI/LoadingBtn.scss";

export default function Navbar(props) {
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const [currentSearch, setCurrentSerach] = useState("top-headlines");
  const checkInputOnKeyPress = (event, search = false) => {
    if (event.target.value === 0) {
      return;
    } else {
      onTopicClickHandler(event.target.value, search);
    }
  };
  const onTopicClickHandler = (query, search = false) => {
    if (currentSearch.toString() === query.toString()) {
      props.setBottomModal(true);
      props.setBottomMsg("Its the current search!🙂");
    } else {
      setCurrentSerach(query);
    }
    search && getIsValid(true) && props.setUpdatedQuery(query, true);
    !search && props.setUpdatedQuery(query, search);
  };
  const onDateClickHandler = (query, search = false) => {
    getIsValid(search) && props.setUpdatedQuery(query, false);
  };
  const getIsValid = (search = false) => {
    if (search === true) {
      if (topic.trim().length !== 0) {
        setInputIsValid(true);
        return true;
      } else {
        setInputIsValid(false);
        props.setBottomModal(true);
        props.setBottomMsg("Ohhoo.. You missed to input. 😇");
        // console.log("Idhar v aate ho kya");
        return false;
      }
    } else {
      if (!isNaN(new Date(date))) {
        setDateIsValid(true);
        return true;
      } else {
        setDateIsValid(false);
        props.setBottomModal(true);
        props.setBottomMsg("Aaaa.. provide a valid date please. 😇");
        return false;
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <img src={props.logo} className="ml-2 navbar--logo" alt="icon" />
        <a className="navbar-brand" href="/">
          {props.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={(event) => {
                  event.preventDefault();
                  onTopicClickHandler("top-headlines");
                }}
                href="/"
              >
                Top Headlines
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={(event) => {
                  event.preventDefault();
                  onTopicClickHandler("world");
                }}
                href="/"
              >
                World
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={(event) => {
                  event.preventDefault();
                  onTopicClickHandler("technology");
                }}
                href="/"
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="openSpecific"
                data-toggle="modal"
                data-target="#modal_aside_right"
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  props.setShowModal(true);
                  // console.log(context.showModal);
                }}
              >
                Specific Search
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={(event) => {
                  event.preventDefault();
                }}
                href="/"
              >
                Enter Date
              </a>
            </li>
            <li className="nav-item">
              <div className="d-flex">
                <Input
                  className={
                    "form-control me-2" + (dateIsValid ? "" : " isInvalid")
                  }
                  min={
                    new Date(new Date().setMonth(new Date().getMonth() - 1))
                      .toISOString()
                      .split("T")[0]
                  }
                  max={new Date().toISOString().split("T")[0]}
                  type="date"
                  id="d_id"
                  onChange={(event) => {
                    setInputIsValid(true);
                    setDate(event.target.value);
                    setDateIsValid(true);
                  }}
                  value={date}
                />
                <button
                  className="submit submit-btn date-submit"
                  onClick={() => {
                    setInputIsValid(true);
                    getIsValid();
                    onDateClickHandler(date);
                    setDate("");
                  }}
                  onBlur={() => {
                    // console.log("Low");
                    setDateIsValid(true);
                  }}
                >
                  Submit
                </button>
              </div>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <Input
              className={
                "form-control me-2" + (inputIsValid ? "" : " isInvalid")
              }
              type="text"
              id="searchText"
              placeholder="Search for other news"
              aria-label="Search"
              onChange={(event) => {
                setTopic(event.target.value.trim());
                setDateIsValid(true);
                setInputIsValid(true);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  checkInputOnKeyPress(event, true);
                }
              }}
            />
            <button
              className="submit search-btn"
              onClick={(event) => {
                event.preventDefault();
                setInputIsValid(true);
                setDateIsValid(true);
                getIsValid(true);
                onTopicClickHandler(topic, true);
              }}
              onBlur={() => {
                // console.log("High");
                setInputIsValid(true);
              }}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </nav>
  );
}
