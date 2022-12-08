import React from "react";
import "./SavingsGoal.css";

const ProgressBar = ({ progress }) => {
  const container = {
    height: 10,
    width: "50%",
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    // margin: 50,
    fontSize: 5,
  };

  const bar = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#90CAF9",
    borderRadius: "inherit",
  };

  const label = {
    padding: "1rem",
    color: "#000000",
  };
  return (
    <div>
      <div style={container}>
        <div
          style={bar}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span style={label}>{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
