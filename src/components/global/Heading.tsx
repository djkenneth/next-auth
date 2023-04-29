import React, { HTMLProps } from "react";

// Types
type HeadingType = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6'

interface IHeading extends HTMLProps<HTMLHeadingElement> {
  children?: JSX.Element | JSX.Element[],
  as?: HeadingType
}

const Heading = ({ children, as = 'H1', ...rest }: IHeading) => {
  return (
    <>
      {as == 'H1' && (<h1 {...rest}>{children}</h1>)}
      {as == 'H2' && (<h2 {...rest}>{children}</h2>)}
      {as == 'H3' && (<h3 {...rest}>{children}</h3>)}
      {as == 'H4' && (<h4 {...rest}>{children}</h4>)}
      {as == 'H5' && (<h5 {...rest}>{children}</h5>)}
      {as == 'H6' && (<h6 {...rest}>{children}</h6>)}
    </>
  );
};

export default Heading;
