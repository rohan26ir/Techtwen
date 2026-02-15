import SwiperCard from "../../dynamic/SwiperCard";

// image
import imgPerson from '@/public/logo/logo1.svg'


interface SwiperCardData {
  id: number;
  title: string;
  description: string;
  image: string;
  name: string;
  designation: string;
}

export default function Testimonial() {
  const sampleData: SwiperCardData[] = [
    {
      id: 1,
      title: "Excellent Service!",
      description: "The team provided outstanding service and exceeded all my expectations. Highly recommended!",
      image: imgPerson,
      name: "Sarah Johnson",
      designation: "CEO, TechStart"
    },
    {
      id: 2,
      title: "Game Changer",
      description: "This platform transformed how we do business. The results have been amazing.",
      image: imgPerson,
      name: "Michael Chen",
      designation: "Product Manager"
    },
    {
      id: 3,
      title: "Exceptional Quality",
      description: "Outstanding quality and attention to detail. Will definitely work with them again.",
      image: imgPerson,
      name: "Emily Rodriguez",
      designation: "Marketing Director"
    },
    {
      id: 4,
      title: "Highly Professional",
      description: "Professional, punctual, and perfect execution. A wonderful experience overall.",
      image: imgPerson,
      name: "David Kim",
      designation: "Founder, Creative Labs"
    }
  ];

  return (
    <div className="bg-secondary dark:bg-secondary py-20">
      <div className="w-[95%] mx-auto">

        <div className="flex flex-col gap-20">
          {/* heading */}
          <div className="text-start">
            <h2 className="text-9xl font-extrabold">What Clients Say</h2>
            <p className="text-2xl">Real feedback from businesses we’ve helped grow.</p>
          </div>
          {/* body */}
          <div className="h-full">
            <SwiperCard data={sampleData} />
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}