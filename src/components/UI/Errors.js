import React, { useMemo, useRef } from "react";
import "./Errors.css";
import "./ReadMore.scss";

export default function Errors({ setShowModal, showModal, msg }) {
  const okayButton = useRef();
  const backdrop = useMemo(() => {
    return (
      <div
        className={"backdrop-error"}
        onClick={() => {
          setShowModal(false);
        }}
      ></div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  if (showModal) {
    return (
      <>
        <div
          className="modal-bottom"
          onClick={() => {
            okayButton.current.focus();
          }}
        >
          <div className="content">
            <strong>{msg}</strong>
            <button
              className="custom-button-ok"
              onClick={() => {
                setShowModal(false);
              }}
              ref={okayButton}
            >
              OK
            </button>
          </div>
        </div>
        {backdrop}
      </>
    );
  } else {
    return;
  }
}
