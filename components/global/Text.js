import React from "react";

const Text = ({ children, className, customContainerStyle, onClick }) => {
  return (
    <div className={`${customContainerStyle}`}>
      <p className={`${className}`} onClick={onClick}>
        {children}
      </p>
    </div>
  );
};

export default Text;
