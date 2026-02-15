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
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full"> {/* Ensure slide content takes full height */}
              <div className='bg-background dark:bg-background p-6 flex flex-col h-full min-h-105 rounded-lg shadow-lg'>
                
                {/* Image - fixed height */}
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                {/* Content - takes available space */}
                <div className="flex-1 flex flex-col">
                  <h3 className='text-xl font-bold mb-3 line-clamp-2'>{item.title}</h3>
                  <p className='text-gray-600 line-clamp-4 mb-4'>{item.description}</p>
                  
                  {/* Spacer to push footer down */}
                  <div className="flex-1"></div>
                  
                  {/* Footer - always at bottom */}
                  <div className='pt-4 border-t border-gray-200 mt-auto flex gap-2'>
                    <Image
                      src={personImage}
                      alt='profile'
                      className='h-10 w-10 rounded-full'
                    ></Image>

                    <div className='text-sm flex flex-col items-start justify-start gap-0.5'>
                      <strong className='text-xl'>{item.name}</strong>  
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