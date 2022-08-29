import React from "react";
import { Heading } from "../global";

const ProductDescription = () => {
  return (
    <div className="mb-8">
      <Heading className="text-lg font-semibold mb-4">Product Specifications</Heading>
      <div className="pl-5">
        <ul className="list-disc">
          <li>Brand: Rakk</li>
          <li>Model: Tandus 87</li>
          <li>Features:</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
