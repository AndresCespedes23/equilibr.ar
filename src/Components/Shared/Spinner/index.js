import React from "react";
import { ProgressBar } from "react-loader-spinner";

function Spinner() {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#367211"
      barColor="#D47F1B"
    />
  );
}

export default Spinner;
