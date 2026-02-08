import Carousel from "./carousel";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

export default function HomeHero() {
  const carouselData: CarouselItem[] = [
    { id: 1, title: "Title 1", 
      image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { id: 2, title: "Title 2", 
      image: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { id: 3, title: "Title 3", 
      image: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { id: 4, title: "Title 4", 
      image: "https://swiperjs.com/demos/images/nature-4.jpg" },
  ];

  return (
    <div className="h-130">
      <Carousel carousel={carouselData} />
    </div>
  );
}