import React, { ComponentPropsWithoutRef, ReactNode } from "react";

interface IButton extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode,
  onClick?: () => void,
  className?: string;
  // icon?: ReactElement<any>
}

const Button = ({ children, onClick, className, ...props }: IButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
