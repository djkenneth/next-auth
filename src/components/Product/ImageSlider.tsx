import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ImageSlider = ({ image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-2"
      >
        {image.data.map((img, i: number) => {
          return (
            <SwiperSlide key={i} className="select-none">
              <div className="flex justify-center align-middle">
                <Image src={img.attributes.url} blurDataURL={img.attributes.url} alt="Banner" width="400" height="400" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        {image.data.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex justify-center align-middle">
                <Image src={img.attributes.url} alt="Banner" width={70} height={70} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
