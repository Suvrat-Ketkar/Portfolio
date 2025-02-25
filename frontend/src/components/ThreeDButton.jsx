import React from "react";
import "../ThreeDButton.css"; // Import CSS styles

export const ThreeDButton = ({ label = "Click Me!" }) => {
  return (
    <div className="center">
      <button type="button"  className="button-container">
        <div className="top">{label}</div>
        <div className="bottom"></div>
      </button>
    </div>
  );
};

