import React, { useMemo, useState } from "react";
import "./Modal.css";
import Form from "./Form";

export default function Modal({
  setShowModal,
  showModal,
  specificSearch,
  setBottomModal,
  setBottomMsg,
}) {
  const [isTopHeadlines, setIsTopHeadlines] = useState(false);
  const [classModal, setClassModal] = useState("modal");
  const [bkdropClass, setbkdropClass] = useState("backdrop");
  const onClickHandler = () => {
    const t = setTimeout(() => {
      setShowModal(false);
      setClassModal("modal");
      setbkdropClass("backdrop");
      clearTimeout(t);
    }, 500);
    setClassModal("modal-hide");
    setbkdropClass("backdrop-remove");
  };

  const setTopHeadlines = (bool) => {
    setIsTopHeadlines(bool);
  };

  const backdrop = useMemo(() => {
    setIsTopHeadlines(false);
    return (
      showModal && <div className={bkdropClass} onClick={onClickHandler}></div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, bkdropClass]);
  if (showModal === false) {
    return;
  }
  console.log(showModal);
  return (
    <>
      <div className={classModal}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Specific Search</h5>
          </div>
          <Form
            isTopHeadlines={isTopHeadlines}
            setIsTopHeadlines={setTopHeadlines}
            onClickHandler={onClickHandler}
            specificSearch={specificSearch}
            setBottomModal={setBottomModal}
            setBottomMsg={setBottomMsg}
          />
        </div>
      </div>
      {backdrop}
    </>
  );
}
