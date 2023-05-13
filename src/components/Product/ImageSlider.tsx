import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Import Splide React components
import { Box } from "@chakra-ui/react";
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

const ImageSlider = ({ image }) => {
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>();

  const mainOptions: Options = {
    type      : 'slide',
    perPage   : 1,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
    heightRatio: 0.8,
    cover      : true,
  };

  const thumbsOptions: Options = {
    type        : 'slide',
    gap         : 10,
    pagination  : false,
    rewind      : true,
    fixedWidth  : 120,
    fixedHeight : 90,
    cover       : true,
    focus       : 'center',
    isNavigation: true,
    arrows     : false,
    classes: {
      pagination: 'splide__pagination your-class-pagination',
    },
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
  };

  useEffect(() => {
    if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide ) {
      mainRef.current.sync( thumbsRef.current.splide );
    }
  }, [mainRef.current, thumbsRef.current])

  return (
    <Box mx={'auto'}>
      <Splide
          className={'mySplide'}
          options={ mainOptions }
          ref={mainRef}
          aria-labelledby="thumbnail-slider-example"
        >
          {image?.data?.map((img, i: number) => (
            <SplideSlide key={i}>
                <Image src={img.attributes.url} blurDataURL={img.attributes.url} style={{ objectFit: 'cover' }} alt="Banner" width="400" height="400" />
            </SplideSlide>
          )
        )}
        </Splide>

        <Splide
          className={'mySplide1'}
          options={ thumbsOptions }
          ref={thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          {image?.data?.map((img, i) =>(
              <SplideSlide key={i}>
                  <Image src={img.attributes.url} alt="Banner" style={{ objectFit: 'cover' }} width={70} height={70} />
              </SplideSlide>
            )
          )}
        </Splide>
    </Box>
  );
};

export default ImageSlider;
