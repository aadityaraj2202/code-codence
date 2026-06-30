import React from "react";

const Spinner = ({ size = "md" }) => (
  <div className={`spinner-wrapper spinner-${size}`}>
    <div className="spinner" />
  </div>
);

export default Spinner;
