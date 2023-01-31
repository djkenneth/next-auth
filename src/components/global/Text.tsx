import React from "react";

// Types
import { IText } from '@/types'

const Text = ({ children, className, customContainerStyle, onClick }: IText) => {
  return (
    <div className={`${customContainerStyle}`}>
      <p className={`${className}`} onClick={onClick}>
        {children}
      </p>
    </div>
  );
};

export default Text;
