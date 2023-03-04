import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Components
import Card from "../card";

const ProductSwiper = ({ products }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id} className="flex justify-center items-center select-none">
            <Card product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSwiper;
