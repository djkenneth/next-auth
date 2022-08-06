import React from "react";

const Text = ({ text, className, customContainerStyle }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <p className={`${className}`}>{text}</p>
    </div>
  );
};

export default Text;
