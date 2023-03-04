// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = ({ bannerImg }) => {
  return (
    <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerImg.map((img, i) => {
            return (
              <SwiperSlide key={i} className="select-none">
                <img src={img} alt="Banner" width="100%" />
              </SwiperSlide>
            );
          })}
    </Swiper>
  )
}

export default Banner