import React from "react";

const TabPanel = ({ children, openTab, index, props }) => {
  return (
    <div className={openTab === index ? "block" : "hidden"} id={`link${index}`} {...props}>
      {children}
    </div>
  );
};

export default TabPanel;
