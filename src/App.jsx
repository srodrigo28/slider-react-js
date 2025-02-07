import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_2.jpg';
import slide_image_3 from './assets/images/img_3.jpg';
import slide_image_5 from './assets/images/img_5.jpg';
import slide_image_6 from './assets/images/img_6.jpg';
import slide_image_7 from './assets/images/img_7.jpg';
import slide_image_8 from './assets/images/img_8.jpg';

function App() {
  return (
    <div className="container">
      <h1 className="heading">Mazza Fashion</h1>
      <Swiper
        autoplay={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_1} alt="slide_image" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_2} alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_3} alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_5} alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_6} alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_7} alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank"> 
          <img src={slide_image_8} alt="slide_image" />
          </a>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
