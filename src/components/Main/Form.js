import React, { useState } from "react";
import Input from "../UI/Input";
import "./Form.css";

export default function Form({
  isTopHeadlines,
  setIsTopHeadlines,
  onClickHandler,
  specificSearch,
  setBottomMsg,
  setBottomModal,
}) {
  const [isValid, setIsValid] = useState({
    toDateValid: true,
    fromDateValid: true,
    topicValid: true,
  });
  const [data, setData] = useState({
    fromDate: "",
    toDate: "",
    topic: "",
    category: "everything",
    country: "in",
  });
  const handleOnChange = (event, currentInput) => {
    setData({ ...data, [currentInput]: event.target.value });
    console.log(data);
  };
  const validateInput = () => {
    if (isValid.toDateValid && isValid.fromDateValid && isValid.topic) {
      return true;
    } else {
      if (data.fromDate.length === 0) {
        setBottomModal(true);
        setBottomMsg("Enter a valid from-date dear. 🙂");
        setIsValid({ ...isValid, fromDateValid: false });
        return false;
      } else if (data.toDate.length === 0) {
        setBottomModal(true);
        setBottomMsg("Enter a valid to-date dear. 🙂");
        setIsValid({ ...isValid, toDateValid: false });
        return false;
      } else if (data.topic.length === 0) {
        setBottomModal(true);
        setBottomMsg("Enter a valid topic dear. 🙂");
        setIsValid({ ...isValid, topicValid: false });
        return false;
      } else {
        setIsValid({
          toDateValid: true,
          fromDateValid: true,
          topicValid: true,
        });
        return true;
      }
    }
  };

  const onSubmitHandler = (data1) => {
    if (validateInput()) {
      onClickHandler();
      specificSearch(data1);
    }
  };
  return (
    <form className="p-2 mt-2">
      <div className="modal-body">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">From Date</label>
            {}
            <Input
              type="date"
              min={
                new Date(new Date().setMonth(new Date().getMonth() - 1))
                  .toISOString()
                  .split("T")[0]
              }
              max={new Date().toISOString().split("T")[0]}
              className={
                "form-control" + (isValid.fromDateValid ? "" : " invalidInput")
              }
              id="date"
              onChange={(event) => {
                handleOnChange(event, "fromDate");
                if (event.target.value.length !== 0) {
                  setIsValid({ ...isValid, fromDateValid: true });
                } else {
                  setIsValid({ ...isValid, fromDateValid: false });
                }
              }}
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">To Date</label>
            <Input
              type="date"
              min={data.fromDate}
              max={new Date().toISOString().split("T")[0]}
              className={
                "form-control" + (isValid.toDateValid ? "" : " invalidInput")
              }
              id="date"
              onChange={(event) => {
                handleOnChange(event, "toDate");
                if (event.target.value.length !== 0) {
                  setIsValid({ ...isValid, toDateValid: true });
                } else {
                  setIsValid({ ...isValid, toDateValid: false });
                }
              }}
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Topic">Topic</label>
            <Input
              type="text"
              className={
                "form-control" + (isValid.topicValid ? "" : " invalidInput")
              }
              id="text"
              onChange={(event) => {
                handleOnChange(event, "topic");
                if (event.target.value.length !== 0) {
                  setIsValid({ ...isValid, topicValid: true });
                } else {
                  setIsValid({ ...isValid, topicValid: false });
                }
              }}
              placeholder="Enter the topic"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <select
            onChange={(event) => {
              if (event.target.value === "top-headlines") {
                setIsTopHeadlines(true);
                handleOnChange(event, "category");
              } else {
                setIsTopHeadlines(false);
              }
            }}
            defaultValue={"everything"}
            className="form-control"
          >
            <option value="everything">Everything</option>
            <option value="top-headlines">Top-Headlines</option>
          </select>
        </div>
        {isTopHeadlines && (
          <div className="form-group">
            <label htmlFor="inputAddress">Country</label>
            <select
              id="inputState"
              className="form-control"
              defaultValue={"in"}
              onChange={(event) => {
                handleOnChange(event, "country");
              }}
            >
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="jp">Japan</option>
              <option value="rs">Russia</option>
              <option value="us">United States</option>
            </select>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="button-submit m-2"
          onClick={(event) => {
            event.preventDefault();
            onSubmitHandler({ ...data });
          }}
        >
          Search
        </button>
        <button
          type="button"
          className="button-close m-2"
          onClick={onClickHandler}
        >
          Close
        </button>
      </div>
    </form>
  );
}
