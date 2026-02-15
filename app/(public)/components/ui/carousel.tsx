'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// image
import bgImage from '../.../../../../../public/bgImage/bg-hero.png'
import Button from '../button/Button';
import { useRouter } from "next/navigation";

interface CarouselItem {
  id: number;
  heading: string;
  subheading: string;
}

interface CarouselProps {
  carousel: CarouselItem[];
}

export default function Carousel({ carousel }: CarouselProps) {
  const router = useRouter();
  
    const handleContact = () => {
      router.push("/contact-us");
    };

  return (
    <div className='relative h-full '>
      <Swiper
        spaceBetween={30}
        centeredSlides
        effect={'fade'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper h-full"
      >
        {carousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='relative h-full flex justify-center items-center'>
              
              {/* center hero text */}
              <div className='absolute m-auto z-10 text-center w-[90%] md:w-[70%] mx-auto gap-10'>

                <h2 className='text-6xl md:text-8xl leading-[100%] font-bold text-white mb-4'>{item.heading}</h2>
                <h3 className='text-xl md:text-3xl text-white'>{item.subheading}</h3>


                

              <div className='mt-10 flex flex-row justify-center gap-5'>
                <Button variant='outline' onClick={handleContact}>Start Your Project</Button>
                <Button variant='outline' onClick={handleContact}>View Services</Button>
              </div>


              </div>
            </div>


            <div className="absolute bg-black dark:bg-background top-0 bottom-0 right-0 left-0 w-full h-full z-0">
        <Image 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          fill
        />
      </div>

          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
}