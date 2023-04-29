import React from "react";
import Image from "next/image";
import { Heading, Text } from "./global/index";
import { useRouter } from "next/router";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ReactStars from "react-rating-stars-component";

const Card = ({ product }) => {
  const router = useRouter();

  const priceFormatter = (price) => {
    const numberFormatter = Intl.NumberFormat("en-US");
    return numberFormatter.format(price);
  };

  const handleClick = () => {
    router.push({
      pathname: "/shop/[pid]",
      query: { pid: product.attributes.slug },
    });
  };
  return (
    <div
      onClick={handleClick}
      className="group-two shadow-xs shadow-gray-300 min-w-[15rem] max-w-[16rem]"
    >
      <div className="flex justify-center justify-items-center p-1 relative">
        <div className="absolute top-3 right-3 z-10 p-1 rounded">
          <FaHeart size={20} />
        </div>
        <div className="py-1">
          <Image
            src={product.attributes.image.data[0].attributes.url}
            alt="Product Item"
            style={{
              objectFit: "cover",
              minHeight: "250px",
              maxWidth: "250px",
              maxHeight: "250px",
            }}
            width={200}
            height={200}
          />
        </div>

      </div>
      <div className="p-2 pt-4 flex-col min-h-[160px]">
        <Heading className="text-sm font-medium mb-1 line-clamp-1">
          {product.attributes.name}
        </Heading>

        <div className="flex justify-center">
          <ReactStars size={20} value={0} edit={false} />
        </div>

        <div className="flex justify-center items-center mb-4">
          {(product.attributes.compare_at_price || product.attributes.compare_at_price > 0) && (
            <Heading className="text-sm font-medium text-light-gray-500 tracking-wide line-through">
              ₱{priceFormatter(product.attributes.compare_at_price)}
            </Heading>
          )}

          <Heading
            className={`ml-1 text-lg font-medium tracking-wide ${product.attributes.compare_at_price ? "text-red-600" : "text-black"}`}>
            ₱{priceFormatter(product.attributes.price)}
          </Heading>
        </div>

        <div className="flex justify-center">
          <button className="group-one flex justify-center items-center border-[1px] text-xs font-semibold py-1 px-2 bg-light-gray-50 rounded-sm border-light-gray-50 hover:bg-red-600 hover:border-red-600">
            <HiOutlineShoppingBag size={20} className="mr-2 text-light-gray-500 group-one-hover:text-white" />
            <span className="text-light-gray-500 group-one-hover:text-white">ADD TO CART</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
