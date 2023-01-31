import React from "react";
const Tabs = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Tabs;
