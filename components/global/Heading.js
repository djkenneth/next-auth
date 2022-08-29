import React from "react";

const Heading = ({ children, className, customContainerStyle }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <h1 className={`${className}`}>{children}</h1>
    </div>
  );
};

export default Heading;
