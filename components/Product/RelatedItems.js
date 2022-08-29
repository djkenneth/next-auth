import React from "react";
import { Heading, Text } from "../global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import products from "../../data";
import Card from "../card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RelatedItems = () => {
  return (
    <>
      <Heading className="flex justify-center text-lg font-semibold mb-4">Related Items</Heading>
      <div className="flex border-b-2">
        <Text className="text-base mr-6 pb-3 font-bold border-b-2 border-vivid-yellow pointer-events-none">
          Overview
        </Text>
        <Text className="text-base mr-6 pb-3 pointer-events-none">Description</Text>
      </div>
      <div>
        {/* <ProductCard /> */}
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Card product={product} />
              </SwiperSlide>
            );
          })}

          <SwiperSlide>
            <Card key={products[1].id} product={products[1]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedItems;
