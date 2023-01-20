import React, { useRef, useState } from "react";
import { Heading, Text } from "./global";
// icons
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import products from "../data";
import Card from "./card";

const Tabs = ({ categoryName, list }) => {
  const [openTab, setOpenTab] = useState(1);

  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        {/* TabList */}
        <div className="flex items-center justify-between border-b-2">
          <Heading className="text-2xl font-medium">{categoryName}</Heading>
          <ul className="flex flex-row mb-0 list-none pt-3 pb-4 bg-[#f9fafb]" role="tablist">
            {list.map((name, i) => {
              return (
                <li key={i} className="-mb-px mr-2 last:mr-0 text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 rounded-full block leading-normal " +
                      (openTab === i + 1 ? `text-black bg-vivid-yellow` : `text-black bg-[#f9fafb]`)
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(i + 1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <Text className="flex items-center text-sm">
            Go to section <HiOutlineChevronRight className="ml-2" />
          </Text>
        </div>
        {/* TabPanels */}
        <div className="relative flex flex-col min-w-0 break-words bg-[#f9fafb] w-full mb-6 rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {/* TabPanel */}
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="group-one relative md:ml-2">
                  <HiOutlineChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100 ${
                      !isMoved && "hidden"
                    }`}
                    onClick={() => handleClick("left")}
                  />

                  <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                  >
                    {products.map((product) => (
                      <Card key={product.id} product={product} />
                    ))}
                  </div>

                  <HiOutlineChevronRight
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100`}
                    onClick={() => handleClick("right")}
                  />
                </div>
              </div>
              {/* TabPanel */}
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="group-one relative md:ml-2">
                  <HiOutlineChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100 ${
                      !isMoved && "hidden"
                    }`}
                    onClick={() => handleClick("left")}
                  />

                  <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                  >
                    {products.map((product) => (
                      <Card key={product.id} product={product} />
                    ))}
                  </div>

                  <HiOutlineChevronRight
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100`}
                    onClick={() => handleClick("right")}
                  />
                </div>
              </div>
              {/* TabPanel */}
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="group-one relative md:ml-2">
                  <HiOutlineChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100 ${
                      !isMoved && "hidden"
                    }`}
                    onClick={() => handleClick("left")}
                  />

                  <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                  >
                    {products.map((product) => (
                      <Card key={product.id} product={product} />
                    ))}
                  </div>

                  <HiOutlineChevronRight
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-one-hover:opacity-100`}
                    onClick={() => handleClick("right")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
