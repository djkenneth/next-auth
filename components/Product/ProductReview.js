import React from "react";
import { Heading, Text } from "../global";
import ReactStars from "react-rating-stars-component";

const ProductReview = () => {
  return (
    <div className="mb-8">
      <Heading text="Customer Reviews" className="text-lg font-semibold mb-4" />
      <div className="grid grid-cols-4">
        <div className="">
          <ReactStars size={25} value={5} edit={false} />
          <Text text="Based on 40 reviews" className="text-sm font-medium" />
        </div>
        <div className="bg-blue-400 col-span-2"></div>
        <div className="bg-green-400">asd</div>
      </div>
    </div>
  );
};

export default ProductReview;
