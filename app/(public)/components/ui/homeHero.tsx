import Image from "next/image";
import Carousel from "./carousel";

// image
// import  bgImage from '../.../../../../../public/bgImage/bg-hero.png'
interface CarouselItem {
  id: number;
  heading: string;
  // image: string;
  subheading: string;
}

export default function HomeHero() {
  const carouselData: CarouselItem[] = [
    {
    id: 1,
    heading: "Build Your Dream Software",
    subheading:
      "At Techtwen, we design and develop custom websites, SaaS products, and scalable applications tailored to your business goals.",
  },
  {
    id: 2,
    heading: "Custom Solutions That Scale",
    subheading:
      "From frontend to full-stack development, we create high-performance digital products built for growth and reliability.",
  },
  {
    id: 3,
    heading: "From Idea to Launch",
    subheading:
      "We transform your vision into powerful web and mobile applications with modern technology and ongoing support.",
  }
  ];

  return (
    <div className="relative h-130 " >

      <Carousel carousel={carouselData} />

      {/* <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-10 ">
        <Image src={bgImage} alt="" className="w-full h-full"></Image>
      </div> */}
    </div>
  );
}