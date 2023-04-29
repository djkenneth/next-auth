import React from "react";

// Types
import { ITab } from '@/types'

const Tab = ({ children, active, index, setOpenTab, ...rest }: ITab) => {
  return (
    <li className="-mb-px ml-10 last:mr-0 text-center cursor-pointer">
      <a
        className={
          "text-sm font-medium uppercase px-1 pt-3 block leading-normal tracking-widest " +
          (active === index ? `text-red-600 border-b-2 border-red-600` : `text-dark-gray`)
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(index);
        }}
        data-toggle="tab"
        role="tablist"
        href={`#link${index}`}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

export default Tab;
