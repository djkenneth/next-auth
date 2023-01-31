import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const bannerImg = [
  "/assets/images/Products/1.webp",
  "/assets/images/Products/2.webp",
  "/assets/images/Products/3.webp",
  "/assets/images/Products/4.webp",
];

const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {bannerImg.map((img, i) => {
          return (
            <SwiperSlide key={i} className="select-none">
              <div className="flex justify-center align-middle">
                <Image src={img} blurDataURL={img} alt="Banner" width="350" height="350" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        {bannerImg.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex justify-center align-middle">
                <Image src={img} alt="Banner" width="350" height="350" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
