import React from "react";
import Text from "./Text";

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col">
        <Text text={"RAKK"} className="text-sm" />
        <Text
          text={
            "RAKK Talan Black/White Accuracy and precision Wireless Limitless Customization Gaming Mouse and Top Cover"
          }
          className="text-sm font-bold text-blue-600"
        />
      </div>
    </>
  );
};

export default ProductCard;
