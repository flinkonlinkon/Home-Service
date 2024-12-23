import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='p-3 '>
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
        <SwiperSlide><img className='w-11/12 h-[500px] object-cover mx-auto rounded-lg' src="https://i.ibb.co.com/xzRS5CP/home1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-11/12 h-[500px] object-cover mx-auto rounded-lg' src="https://i.ibb.co.com/BPqT0b5/freepik-adjust-37726.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-11/12 h-[500px] object-cover mx-auto rounded-lg' src="https://i.ibb.co.com/SXkm5yn/plumbers.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    
    </div>
  )
}
