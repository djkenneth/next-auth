import React from "react";
import Image from "next/image";
import ImageSlider from "../../components/Product/ImageSlider";
import DeliveryOption from "../../components/Product/DeliveryOption";
import PaymentOptions from "../../components/Product/PaymentOptions";
import ProductInfo from "../../components/Product/ProductInfo";
import { Text, Heading } from "../../components/global";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Warranty from "../../components/Product/Warranty";

const Product = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Text
          text="Nvision N190HD 19 / N185HD 18.5 / N200HD 20
          / V190H 19 Monitor 60hz, | HDMI | VGA | LED Display"
          className="text-sm"
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9 grid grid-cols-12">
          <div className="col-span-5">
            <ImageSlider />
          </div>
          <div className="col-span-7 pl-5 pr-12 mb-3">
            <ProductInfo />
          </div>
        </div>
        <div className="col-span-3">
          <DeliveryOption />
          <PaymentOptions />
          <Warranty />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex pl-10">
            <Text
              text="Overview"
              className="text-lg mr-6 pb-3 font-bold border-b-2 border-yellow-400 pointer-events-none"
            />
            <Text text="Description" className="text-lg mr-6 pb-3 pointer-events-none" />
            <Text text="Reviews" className="text-lg pb-3 pointer-events-none" />
          </div>
          <div className="border-2 rounded-lg p-5">
            <Heading
              text="Rakk Ilis Outemu Red/Blue PBT Keycaps Mechanical, Removable customizable magnetic Cover RGB Gaming Keyboard"
              className="text-xl font-semibold mb-8"
            />
            <div className="mb-8">
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
            <div className="mb-8">
              <Heading text="Product Specifications" className="text-lg font-semibold mb-4" />
              <div className="pl-5">
                <ul className="list-disc">
                  <li>Brand: Rakk</li>
                  <li>Model: Tandus 87</li>
                  <li>Features:</li>
                </ul>
              </div>
            </div>
            <div>
              <Heading text="Customer Reviews" className="text-lg font-semibold mb-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
