'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';

import personImage from '@/public/persone/persone1.avif'

interface SwiperCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  name: string;
  designation: string;
}

interface SwiperCardProps {
  data: SwiperCardData[];
}

export default function SwiperCard({ data }: SwiperCardProps) {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        watchSlidesProgress={true}
        // Default for extra small devices
        slidesPerView={1}
        spaceBetween={15}
        className="mySwiper"
        // Responsive breakpoints
        breakpoints={{
          // Small devices (phones, 576px and up)
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          // Medium devices (tablets, 768px and up)
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Large devices (desktops, 992px and up)
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Extra large devices (large desktops, 1200px and up)
          1200: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full">
              <div className='bg-background dark:bg-background p-4 sm:p-6 flex flex-col h-full min-h-96 sm:min-h-105 rounded-lg shadow-lg'>
                
                {/* Image - fixed height with responsive sizing */}
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-auto h-40 sm:h-32 object-contain rounded-lg"
                  />
                </div>

                {/* Content - takes available space */}
                <div className="flex-1 flex flex-col">
                  <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2'>{item.title}</h3>
                  <p className='text-sm sm:text-base text-gray-600 line-clamp-3 sm:line-clamp-4 mb-4'>{item.description}</p>
                  
                  {/* Spacer to push footer down */}
                  <div className="flex-1"></div>
                  
                  {/* Footer - always at bottom with responsive sizing */}
                  <div className='pt-4 border-t border-gray-200 mt-auto flex gap-2'>
                    <Image
                      src={personImage}
                      alt='profile'
                      className='h-8 w-8 sm:h-10 sm:w-10 rounded-full'
                      width={40}
                      height={40}
                    />

                    <div className='text-xs sm:text-sm flex flex-col items-start justify-start gap-0.5'>
                      <strong className='text-base sm:text-xl'>{item.name}</strong>  
                      <span className='text-gray-500'> - {item.designation}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}