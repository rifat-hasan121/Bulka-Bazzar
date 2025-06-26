import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg"
            alt="cosmetics"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mma.prnewswire.com/media/465386/Product_of_the_Year_USA_2017_Winners.jpg?p=twitter"
            alt="cookies"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQHQ9OUVQn8UGQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684773805107?e=2147483647&v=beta&t=NCXcBfXsZ-L8Bu7_6vd_XNxN96kPBu90kqk8aB2nbic"
            alt="apples products"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg"
            alt="laptop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-76432196/76432196.jpg"
            alt="kitchen"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
