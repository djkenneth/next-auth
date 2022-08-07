import React, { useState } from "react";
import { RiFacebookFill, RiArrowLeftRightFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { BsPlus, BsDash } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Button, Heading, Text } from "../global";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Text
        text="RAKK"
        className="text-xs text-gray-400 mb-2 inline-flex hover:cursor-auto hover:text-amber-500"
      />
      <Heading
        text="Rakk Tandus 87 Keys Multi-Color Hotswappable Switch,Outemu Blue switch Clicky and
              Tactile Mechanical Gaming Keyboard"
        className="text-2xl text-slate-800 font-sans font-normal tracking-wide"
        customContainerStyle="mb-2"
      />
      <div className="flex justify-items-center mb-2">
        <ReactStars size={20} value={1} edit={false} classNames="mr-1" />
        <Text
          text="28 reviews"
          className="text-sm text-gray-600"
          customContainerStyle="flex items-center"
        />
      </div>
      <div className="bg-blue-700 flex w-20 justify-center items-center py-1 mb-2">
        <RiFacebookFill className="text-white mr-1" />
        <Text text="share" className="text-sm text-white" />
      </div>
      <div className="flex items-center">
        <Text text="Available: " className="text-sm text-gray-400 m-1" />
        <Text text="In Stock" className="text-sm text-amber-500 font-bold mr-1" />
      </div>
      <div className="border-t-2 my-4"></div>
      <div className="flex justify-between mb-5">
        <div>
          <Text text="&#8369;1,395.00" className="text-4xl text-slate-800" />
        </div>
        <div className="flex items-center">
          <FiHeart className="mr-1 text-xl text-orange-500" />
          <Text text="Add to Wishlist" />
        </div>
        <div className="flex items-center">
          <RiArrowLeftRightFill className="mr-1 text-xl text-orange-500" />
          <Text text="Add to Compare" />
        </div>
      </div>
      <div className="mb-5">
        <Text text="Quantity" className="text-sm font-thin" />
        <div className="inline-flex items-center relative px-2 h-10 w-32 border border-gray-300 rounded-full">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="h-7 border-none w-full focus:outline-none"
          />
          <div className="flex">
            <BsPlus className="bg-gray-100 mr-2" />
            <BsDash className="bg-gray-100" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Button
          icon={<FaCartArrowDown className="mr-2 text-lg" />}
          text="Add to cart"
          bgColor="bg-yellow-400"
          textColor="text-white"
          custonStyle="mr-4 py-3 px-8 hover:bg-slate-700"
        />
        <Button
          text="Buy It Now"
          bgColor="bg-slate-700"
          textColor="text-white"
          custonStyle="py-3 px-8 hover:bg-yellow-400"
        />
      </div>
    </>
  );
};

export default ProductInfo;
