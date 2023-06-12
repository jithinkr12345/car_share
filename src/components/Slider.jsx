import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";



function Slider() {
  return (
    <Swiper modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y,]} spaceBetween={50} centeredSlides={true} autoplay={{ delay: 5500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} className="slide-swipe">
      <SwiperSlide className="sld">
        <img src={slide2} alt=""/> 
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide3} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide1} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide4} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide5} alt=""/>
      </SwiperSlide>
      <SwiperSlide className="sld">
        <img src={slide6} alt=""/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider