import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  const slides = [
    {
      img: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg",
      title: "Product of the Year 2024",
      subtitle: "Discover the best new products of the year",
    },
    {
      img: "https://mma.prnewswire.com/media/465386/Product_of_the_Year_USA_2017_Winners.jpg?p=twitter",
      title: "Top Picks for 2024",
      subtitle: "Explore our curated selection of the year's best products",
    },

    {
      img: "https://media.licdn.com/dms/image/v2/D5612AQHQ9OUVQn8UGQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684773805107?e=2147483647&v=beta&t=NCXcBfXsZ-L8Bu7_6vd_XNxN96kPBu90kqk8aB2nbic",
      title: "Top Gadgets of 2025",
      subtitle: "Innovative technology that will change your life",
    },

    {
      img: "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",
      title: "New MacBook Air",
      subtitle: "Lightweight, powerful, and perfect for on-the-go",
    },

    {
      img: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-76432196/76432196.jpg",
      title: "Kichen Essentials",
      subtitle: "Upgrade your kitchen with the latest appliances",
    },
  ];

  return (
    <div className="w-full  overflow-hidden shadow-2xl mt-2 rounded-2xl">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px] md:h-[600px] lg:h-[600px]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-4 text-white text-lg md:text-2xl font-light max-w-2xl drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
