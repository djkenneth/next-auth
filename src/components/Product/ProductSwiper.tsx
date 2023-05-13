import React from "react";
// Import Splide React components
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Components
import Card from "../card";

const ProductSwiper = ({ products }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        autoplay: true,
      }}
    >
      {products.map((product) => {
        return (
          <SplideSlide key={product.id}>
            <Card product={product} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default ProductSwiper;
