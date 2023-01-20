import React from "react";
import Image from "next/image";
import { Heading, Text } from "./global";
import { useRouter } from "next/router";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const Card = ({ product }) => {
  const router = useRouter();

  const priceFormatter = (price) => {
    const numberFormatter = Intl.NumberFormat("en-US");
    return numberFormatter.format(price);
  };

  const handleClick = () => {
    router.push({
      pathname: "/products/[pid]",
      query: { pid: product.slug },
    });
  };
  return (
    <div
      onClick={handleClick}
      className="group-two shadow-lg shadow-gray-300 border-2 min-w-[18.5rem]"
    >
      <div className="flex justify-center justify-items-center p-1 relative bg-white">
        <div className="absolute top-3 right-3 z-10 p-1 rounded">
          <FaHeart size={20} />
        </div>
        <div className="py-1">
          <Image
            src={product.image}
            alt="Product Item"
            style={{
              objectFit: "cover",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
            width={200}
            height={200}
            className="bg-slate-800"
          />
        </div>
        <div className="hidden group-two-hover:block absolute bottom-0">
          <button className="flex justify-center border-[1px] text-xs font-bold  py-1 px-2 bg-vivid-orange rounded-lg border-gray-700">
            <FaShoppingCart size={20} className="mr-2" />
            <span className="text-gray-900">ADD TO CART</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-100 text-center p-2 pt-4 min-h-[190px]">
        <Heading className="text-sm font-bold text-vivid-orange mb-2 line-clamp-2">
          {product.name}
        </Heading>
        <Text className="text-[12px] text-gray-600 font-semibold mb-2">{product.brand}</Text>
        <div className="flex justify-center">
          <Heading
            className={`mr-3 text-xl font-medium ${
              product.discounted_price ? "text-vivid-orange" : "text-black"
            }`}
          >
            ₱{priceFormatter(product.price)}
          </Heading>
          {(product.discounted_price || product.discounted_price > 0) && (
            <Heading className="text-xl font-medium line-through mb-1">
              ₱{priceFormatter(product.discounted_price)}
            </Heading>
          )}
        </div>

        <div className="flex justify-center">
          <ReactStars size={20} value={5} edit={false} />
        </div>
        <Text className="text-sm font-medium">5 review(s)</Text>
      </div>
    </div>
  );
};

export default Card;
