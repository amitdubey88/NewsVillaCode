import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Main/Navbar";
import NewsFiles from "./components/Main/NewsFiles";
import ContextWrapper from "./components/Contexts/ContextWrapper";
import { useState } from "react";
import ReactDOM from "react-dom";
import Footer from "./components/UI/Footer";
import Modal from "./components/Main/Modal";
import NoData from "./components/UI/NoData";
import Loader from "./components/UI/Loader";
import LoadingBar from "react-top-loading-bar";
import Errors from "./components/UI/Errors";

function App() {
  const [errors, setErrors] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [bMsg, setBmsg] = useState("");
  const [serverError, setServerError] = useState("");
  const setServerErrors = (error) => {
    setServerError(error);
  };
  const setBotModalMsg = (msg) => {
    setBmsg(msg);
  };
  const [bottomModal, setBottomModal] = useState(false);
  const setBModal = (bool) => {
    setBottomModal(bool);
  };
  const [progress, setProgress] = useState(0);

  const setLoading = (bool) => {
    setLoad(bool);
  };
  const showModalSet = (show) => {
    setShowModal(show);
  };

  const [query, setQuery] = useState("top-headlines");
  const [toSearch, setToSearch] = useState(false);
  const [searchData, setSearchData] = useState({
    fromDate: "",
    toDate: "",
    topic: "",
    category: "everything",
    country: "in",
    isData: false,
  });

  const setUpdatedQuery = (query = "", search = false) => {
    setErrors(false);
    setSearchData({ ...searchData, isData: false }, [query]);
    setToSearch(search);
    setQuery(query);
  };

  const specificSearch = (searchData) => {
    setSearchData({ ...searchData, isData: true });
    console.log(searchData);
    console.log("Hm v chal rhe hai bhai.");
  };

  const setError = (error) => {
    setErrors(error);
  };

  return (
    <ContextWrapper>
      <Navbar
        name={"NewsVilla"}
        logo={logo}
        setUpdatedQuery={setUpdatedQuery}
        setShowModal={showModalSet}
        setBottomModal={setBModal}
        setBottomMsg={setBotModalMsg}
      />
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        className="loading-bar"
        onLoaderFinished={() => setProgress(0)}
      />
      {!errors && (
        <NewsFiles
          query={query}
          setErrors={setError}
          search={toSearch}
          searchData={searchData}
          setLoad={setLoading}
          load={load}
          error={errors}
          loadingProgress={(progress) => {
            setProgress(progress);
          }}
          setServerError={setServerErrors}
          setBottomModal={setBModal}
          setBottomMsg={setBotModalMsg}
        />
      )}
      <NoData error={errors} serverError={serverError} />
      {ReactDOM.createPortal(
        <Modal
          setShowModal={showModalSet}
          showModal={showModal}
          specificSearch={specificSearch}
          setBottomModal={setBModal}
          setBottomMsg={setBotModalMsg}
        />,
        document.getElementById("overlay")
      )}
      <Loader loading={load} />
      {!load && <Footer />}
      {ReactDOM.createPortal(
        <Errors setShowModal={setBModal} showModal={bottomModal} msg={bMsg} />,
        document.getElementById("bottom-overlay")
      )}
    </ContextWrapper>
  );
}

export default App;
