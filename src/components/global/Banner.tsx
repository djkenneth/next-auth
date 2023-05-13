// Import Splide React components
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Banner = ({ bannerImg }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: 'loop',
        arrows: false,
        pagination: false,
        autoplay: true,
      }}
    >
      {bannerImg.map((img: string, i: number) => {
        return (
          <SplideSlide key={i}>
            <img src={img} alt="Banner" width="100%" />
          </SplideSlide>
        );
      })}
    </Splide>
  )
}

export default Banner