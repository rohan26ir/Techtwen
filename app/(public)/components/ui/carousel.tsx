'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

interface CarouselProps {
  carousel: CarouselItem[];
}

export default function Carousel({ carousel }: CarouselProps) {
  return (
    <div className='h-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full bg-accent dark:bg-accent"
      >
        {carousel.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <div className='h-full flex justify-center items-center'>
              <h2 className="text-white text-2xl font-semibold">
               {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}