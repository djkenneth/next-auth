import React from "react";

const Button = ({ onClick, icon, text, bgColor, textColor, custonStyle }) => {
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
