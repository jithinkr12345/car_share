import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import slide1 from "../assets/images/banner3.jpg";
import slide2 from "../assets/images/banner4.jpg";
import slide3 from "../assets/images/caroption.jpg";
import slide5 from "../assets/images/mapwithroute.jpg";
import slide6 from "../assets/images/slide5.jpg";
import slide7 from "../assets/images/slide6.jpg";
import slide8 from "../assets/images/withroute.jpg";



function Slider() {
  return (
    <Swiper modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y,]} spaceBetween={50} centeredSlides={true} autoplay={{ delay: 5500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} className="slide-swipe">
      <SwiperSlide className="sld">
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide1} alt="" />
      </SwiperSlide>

      <SwiperSlide className="sld">
        <img src={slide5} alt="" />
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide6} alt="" />
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide7} alt="" />
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide8} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider