import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import Heading from "./Heading";
import Text from "./Text";

const TabList = ({ children, categoryName }) => {
  return (
    <div className="flex items-center justify-between border-b-2">
      <Heading className="text-2xl font-medium uppercase tracking-tighter">{categoryName}</Heading>
      <ul className="flex flex-row mb-0 list-none pt-3 pb-4">{children}</ul>
    </div>
  );
};

export default TabList;
