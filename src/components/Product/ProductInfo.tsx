import React, { useState } from "react";
import { RiFacebookFill, RiArrowLeftRightFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { HiShoppingBag } from 'react-icons/hi';
import { BsPlus, BsDash } from "react-icons/bs";
import { MdCompareArrows } from 'react-icons/md'
import { FaCartArrowDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Button, Heading, Text } from "../global";
import Image from "next/image";
import { convertToDecimal } from "@/lib/general";

const ProductInfo = ({ productName, productPrice, productIsAvailable, productComparePrice }) => {
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

  const increment = () => {
    setQuantity(value => value + 1)
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(value => value - 1)
    }
  }
  return (
    <>
      <Heading className="text-2xl text-slate-800 font-sans font-semibold tracking-wide mb-2"
      >
        {productName}
      </Heading>
      <div className="flex justify-items-center mb-2">
        <ReactStars size={20} value={1} edit={false} classNames="mr-1" />
        <Text className="text-sm text-gray-600 flex items-center mr-2">
          28 reviews
        </Text>
        |
        <Text className="text-sm text-gray-600 flex items-center ml-2 cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-gray-600">
          Be the first to review this product
        </Text>
      </div>
      <div className="flex justify-between mb-5">
        <div className="flex items-baseline">
          <Text className="text-xl text-slate-800 font-semibold line-through mr-2">
            &#8369;{convertToDecimal(productComparePrice)}
          </Text>
          <Text className="text-2xl text-vivid-orange font-semibold">
            &#8369;{convertToDecimal(productPrice)}
          </Text>
        </div>
        <div>
          <Text className="text-sm text-vivid-orange m-1">Availability: {productIsAvailable > 0 ? 'In Stock' : 'Out of Stock'}</Text>
        </div>
      </div>
      <div className="border-t-2 my-4"></div>
      <div className="mb-5">
        <Text className="text-sm text-gray-400 mb-2 inline-flex">
          Brands:
        </Text>
        <Image alt="Brand Logo" src='/assets/images/BrandLogos/rog.jpg' width={160} height={150} />
      </div>
      <div className="mb-5">
        <div className="flex">
          <div className="flex relative px-2 h-11">
            <div onClick={decrement} className="border border-gray-300 border-r-0 w-8 flex justify-center items-center cursor-pointer">
              <BsDash className="w-5 h-5" />
            </div>
            <input
              type="number"
              value={quantity}
              onChange={(e: any) => setQuantity(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
            />
            <div onClick={increment} className="border border-gray-300 border-l-0 w-8 flex justify-center items-center cursor-pointer">
              <BsPlus className="w-5 h-5" />
            </div>
          </div>
          <button
            type="button"
            className="flex items-center text-white bg-vivid-yellow focus:outline-none rounded font-medium px-5 py-2.5 text-center mr-2 mb-2">
            <HiShoppingBag className="mr-2 text-lg" />
            ADD TO CART
          </button>
          <button
            type="button"
            className="text-gray-900 border border-gray-500 hover:border-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <FiHeart className="text-xl " />
          </button>
          <button
            type="button"
            className="text-gray-900 border border-gray-500 hover:border-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <MdCompareArrows className="text-xl " />
          </button>
        </div>
      </div>
      <div className="border-t-2 my-4"></div>
      <div className="flex">
        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-md text-sm px-2 h-10 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2">
          <svg className="w-6" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
        </button>
        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-3 h-10 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
          <svg className="w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
        </button>

      </div>
    </>
  );
};

export default ProductInfo;
