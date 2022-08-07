import Image from "next/image";
import React from "react";
import { Heading, Text } from "../global";

const ProductOverview = () => {
  return (
    <div className="mb-8">
      <Heading
        text="Rakk Ilis Outemu Red/Blue PBT Keycaps Mechanical, Removable customizable magnetic Cover RGB Gaming Keyboard"
        className="text-xl font-semibold mb-8"
      />
      <div>
        <ul>
          <li className="flex border-b-2 py-1 hover:bg-gray-200">
            <Text text="Brand" className="font-semibold ml-5" customContainerStyle="w-1/4" />
            <Text text="RAKK" customContainerStyle="w-3/4" />
          </li>
          <li className="flex border-b-2 py-1 hover:bg-gray-200">
            <Text text="Model" className="font-semibold ml-5" customContainerStyle="w-1/4" />
            <Text text="Ilis" customContainerStyle="w-3/4" />
          </li>
          <li className="flex border-b-2 py-1 hover:bg-gray-200">
            <Text
              text="Keyboard Interface"
              className="font-semibold ml-5"
              customContainerStyle="w-1/4"
            />
            <Text text="USB" customContainerStyle="w-3/4" />
          </li>
        </ul>
      </div>
      <div className="w-full relative">
        <Image
          src="https://cdn.shopify.com/s/files/1/0101/4864/2879/products/3366-website.jpg?v=1635221096"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          sizes="50vh"
          // className="h-98 w-full absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

export default ProductOverview;
