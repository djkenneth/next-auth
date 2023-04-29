import React, { HTMLProps, ReactNode } from "react";

// Types
interface IText extends HTMLProps<HTMLParagraphElement> {
  children?: ReactNode,
  onClick?: () => void
}

const Text = ({ children, onClick, ...rest }: IText) => {
  return (
    <p onClick={onClick} {...rest}>
      {children}
    </p>
  );
};

export default Text;
