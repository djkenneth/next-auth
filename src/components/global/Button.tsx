import React from "react";

// Types
import { IButton } from '@/types'

const Button = ({ onClick, icon, text, bgColor, textColor, custonStyle }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${bgColor} ${textColor} rounded-full font-bold text-sm ${custonStyle}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
