import Carousel from "./carousel";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

export default function HomeHero() {
  const carouselData: CarouselItem[] = [
    { id: 1, title: "Title 1", image: "/image.png" },
    { id: 2, title: "Title 2", image: "/image.png" },
    { id: 3, title: "Title 3", image: "/image.png" },
    { id: 4, title: "Title 4", image: "/image.png" },
  ];

  return (
    <div className="h-100">
      <Carousel carousel={carouselData} />
    </div>
  );
}