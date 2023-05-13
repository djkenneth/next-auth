import React from 'react'
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll, AutoScrollComponent } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";

import { brandLogos } from '@/lib/contants/listImage';

const BrandSwiper = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: 'loop',
        drag: 'free',
        perPage: 6,
        arrows: false,
        pagination: false,
        autoplay: false,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1
        }
      }}
      extensions={{ AutoScroll }}
    >
      {brandLogos.map((logo, i) => {
        return (
          <SplideSlide key={i}>
            <Image priority width={100} height={100} src={logo} alt="logo" />
          </SplideSlide>
        );
      })}
    </Splide>
  )
}

export default BrandSwiper