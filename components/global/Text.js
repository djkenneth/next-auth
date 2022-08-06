import React from "react";

const Text = ({ text, className, customContainerStyle, onClick }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <p className={`${className}`} onClick={onClick}>
        {text}
      </p>
    </div>
  );
};

export default Text;
