import React from "react";

const HeadingText = ({ text, className, customContainerStyle }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <h1 className={`${className}`}>{text}</h1>
    </div>
  );
};

export default HeadingText;
