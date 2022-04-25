import React from "react";
import classes from "./ErrorModal.module.css";

import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const SpinnignLoadingIndicator = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        fontSize: "30px",
        color: "white",
        transform: "translate(-50%, -50%)",
      }}
    >
      Loading .....
    </div>
  );
};

export default function Loader() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-portal")
      )}

      {ReactDOM.createPortal(
        <SpinnignLoadingIndicator />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
