import React, { useState } from "react";
import { RiFacebookFill, RiArrowLeftRightFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { BsPlus, BsDash } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Button, Heading, Text } from "../global";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  // const [number, setNumber] = useState(0);
  // const [loading, setLoading] = useState(false);

  // useLayoutEffect(() => {
  //   setNumber(5);
  //   setLoading(true);
  // }, [number]);

  // useEffect(() => {
  //   if (loading) {
  //     console.log(number);
  //   }
  // }, [loading, number]);
  return (
    <>
      <Text className="text-xs text-gray-400 mb-2 inline-flex hover:cursor-auto hover:text-vivid-orange">
        RAKK
      </Text>
      <Heading
        className="text-2xl text-slate-800 font-sans font-normal tracking-wide"
        customContainerStyle="mb-2"
      >
        Rakk Tandus 87 Keys Multi-Color Hotswappable Switch,Outemu Blue switch Clicky and Tactile
        Mechanical Gaming Keyboard
      </Heading>
      <div className="flex justify-items-center mb-2">
        <ReactStars size={20} value={1} edit={false} classNames="mr-1" />
        <Text className="text-sm text-gray-600" customContainerStyle="flex items-center">
          28 reviews
        </Text>
      </div>
      <div className="bg-blue-700 flex w-20 justify-center items-center py-1 mb-2">
        <RiFacebookFill className="text-white mr-1" />
        <Text className="text-sm text-white">share</Text>
      </div>
      <div className="flex items-center">
        <Text className="text-sm text-gray-400 m-1">Available: </Text>
        <Text className="text-sm text-vivid-orange font-bold mr-1">In Stock</Text>
      </div>
      <div className="border-t-2 my-4"></div>
      <div className="flex justify-between mb-5">
        <div>
          <Text className="text-4xl text-slate-800">&#8369;1,395.00</Text>
        </div>
        <div className="flex items-center">
          <FiHeart className="mr-1 text-xl text-orange-500" />
          <Text>Add to Wishlist</Text>
        </div>
        <div className="flex items-center">
          <RiArrowLeftRightFill className="mr-1 text-xl text-orange-500" />
          <Text>Add to Compare</Text>
        </div>
      </div>
      <div className="mb-5">
        <Text className="text-sm font-thin">Quantity</Text>
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
          bgColor="bg-vivid-yellow"
          textColor="text-white"
          custonStyle="mr-4 py-3 px-8 hover:bg-slate-700"
        />
        <Button
          text="Buy It Now"
          bgColor="bg-slate-700"
          textColor="text-white"
          custonStyle="py-3 px-8 hover:bg-vivid-yellow"
        />
      </div>
    </>
  );
};

export default ProductInfo;
