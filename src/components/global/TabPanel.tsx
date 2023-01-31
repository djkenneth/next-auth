import React from "react";

// Types
import { ITabPanel } from '@/types'

const TabPanel = ({ children, openTab, index, ...rest }: ITabPanel) => {
  return (
    <div className={openTab === index ? "block" : "hidden"} id={`link${index}`} {...rest}>
      {children}
    </div>
  );
};

export default TabPanel;
