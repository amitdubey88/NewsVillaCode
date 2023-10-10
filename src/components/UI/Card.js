import React from "react";
import "./Card.css";
import noImg from "./../../noimg.jpg";
import "./ReadMore.scss";

export default function Card({
  imgUrl,
  title,
  newsURL,
  description,
  publishedDate,
  source,
}) {
  if (imgUrl == null) {
    imgUrl = noImg;
  }
  return (
    <section>
      <div className="container-fluid py-2 ">
        <div className="card card-style">
          <div className="row">
            <div className="col-md-4">
              <img
                src={imgUrl}
                className="card-img-top h-100"
                style={{ width: "100%", objectFit: "cover" }}
                alt="..."
              />
            </div>
            <div className="col-md-8 p-3 mb-5">
              <div className="card-block px-3">
                <h4 className="card-title mt-3">{title}</h4>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  Published on :{" "}
                  <b>
                    {new Date(publishedDate).toLocaleString(undefined, {
                      timeZone: "Asia/Kolkata",
                    })}
                  </b>
                  <br /> Source : <b>{source}</b>
                </p>
              </div>
              <a
                href={newsURL}
                className="btn-read btn btn-white btn-animate"
                style={{ display: "inline-block" }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
