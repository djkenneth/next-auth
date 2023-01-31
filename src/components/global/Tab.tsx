import React from "react";

// Types
import { ITab } from '@/types'

const Tab = ({ children, active, index, setOpenTab, ...rest }: ITab) => {
  return (
    <li className="-mb-px mr-2 last:mr-0 text-center cursor-pointer">
      <a
        className={
          "text-xs font-bold uppercase px-5 py-3 rounded-full block leading-normal " +
          (active === index ? `text-black bg-vivid-yellow` : `text-black bg-[#f9fafb]`)
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
