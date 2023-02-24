import React from "react";

const TabPanels = ({ children }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-[#f9fafb] w-full mb-6 rounded">
      <div className="px-4 py-5 flex-auto">
        <div className="tab-content tab-space">{children}</div>
      </div>
    </div>
  );
};

export default TabPanels;