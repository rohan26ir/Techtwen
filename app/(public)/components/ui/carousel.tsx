'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination,EffectFade } from 'swiper/modules';
import Image from 'next/image';

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
        effect={'fade'}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper h-full bg-accent dark:bg-accent"
      >
        {carousel.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <div className='relative h-full flex justify-center items-center'>
              <Image src={item.image} 
                     alt={item.title}
                     width='100'
                     height='100'
                     className='h-full w-full object-cover 
                                relative z-0'>
                </Image>
                {/* center hero text */}
                <div className='absolute m-auto z-10'>
                  <h2 className='text-6xl font-bold'>{item.title}</h2>
                </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}