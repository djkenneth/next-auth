import React from "react";

// Types
import { IHeading } from '@/types'

const Heading = ({ children, className, customContainerStyle }: IHeading) => {
  return (
    <div className={`${customContainerStyle}`}>
      <h1 className={`${className}`}>{children}</h1>
    </div>
  );
};

export default Heading;
