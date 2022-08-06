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
          <div className="col-span-12">
            <div className="flex">
              <Text text="Overview" className="text-lg mr-6" />
              <Text text="Description" className="text-lg mr-6" />
              <Text text="Reviews" className="text-lg" />
            </div>
            <div className="border-2 rounded-md p-5">
              <Heading
                text="Rakk Ilis Outemu Red/Blue PBT Keycaps Mechanical, Removable customizable magnetic Cover RGB Gaming Keyboard"
                className="text-xl font-semibold mb-8"
              />
              <div className="mb-8">
                <ul>
                  <li className="flex border-b-2 py-1 hover:bg-gray-200">
                    <Text
                      text="Brand"
                      className="font-semibold ml-5"
                      customContainerStyle="w-1/4"
                    />
                    <Text text="RAKK" customContainerStyle="w-3/4" />
                  </li>
                  <li className="flex border-b-2 py-1 hover:bg-gray-200">
                    <Text
                      text="Model"
                      className="font-semibold ml-5"
                      customContainerStyle="w-1/4"
                    />
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
          </div>
        </div>
        <div className="col-span-3">
          <DeliveryOption />
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
};

export default Product;
