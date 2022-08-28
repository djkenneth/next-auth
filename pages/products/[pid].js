import React from "react";
import ImageSlider from "../../components/Product/ImageSlider";
import DeliveryOption from "../../components/Product/DeliveryOption";
import PaymentOptions from "../../components/Product/PaymentOptions";
import ProductInfo from "../../components/Product/ProductInfo";
import Warranty from "../../components/Product/Warranty";
import ProductOverview from "../../components/Product/ProductOverview";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductReview from "../../components/Product/ProductReview";
import { Text } from "../../components/global";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RelatedItems from "../../components/Product/RelatedItems";

const Product = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="mb-5">
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
            <ProductOverview />
            <ProductDescription />
            <ProductReview />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <RelatedItems />
      </div>
    </div>
  );
};

export default Product;
