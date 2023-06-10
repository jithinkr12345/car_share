import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import image1 from "../assets/images/ban1.jpg"
import image2 from "../assets/images/ban2.jpg"
import image3 from "../assets/images/ban4.jpg"
import image4 from "../assets/images/banner6.jpg"


function Slider(){
    return (
        <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, ]}
      spaceBetween={50}
      centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      
        
      >
        <SwiperSlide>
            <img src={image1} alt="" style={{width: "100%", height: "75vh"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image2} alt="" style={{width: "100%", height: "75vh"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image3} alt="" style={{width: "100%", height: "75vh"}} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image4} alt="" style={{width: "100%", height: "70vh"}} />
        </SwiperSlide>
       
        
      </Swiper>
    )
}

export default Slider