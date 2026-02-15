import Image from "next/image"
import Counter from "../dynamic/counter"

import bgShape from '@/public/shape/card-shape.jpg'

interface NUmberProp {
  id: number,
  count: number,
  title: string,
}



export default function Stats() {

  const NumberStat: NUmberProp[] = [
    { id: 1, title: "Years of Services", count: 2 },
    { id: 2, title: "Projects", count: 25 },
    { id: 3, title: "Team Members", count: 4 },
    { id: 4, title: "Happy Client", count: 20 },
  ]

  return (
    <div className="bg-background py-20">

      <div className="w-[98%] mx-auto px-4 flex flex-col justify-center relative">

        <div className="relative ">
          <h2 className="text-[200px] leading-none text-start font-bold">We are</h2>
        </div>

        <div className="flex flex-row justify-between gap-2 relative z-0">
          {
            NumberStat.map((item) => (
              <div
                key={item.id}
                className="relative group w-full rounded-lg overflow-hidden text-white">

                <div className="relative z-10 h-full w-full flex flex-col 
                           justify-between gap-20 p-5 
                           font-bold transition-all duration-300">
                  <div className="h-full text-2xl 
                    group-hover:text-gray-300">{item.id}</div>
                  <div className="h-full text-5xl 
                    group-hover:text-gray-300">{item.title}</div>
                  <div className="h-full text-5xl 
                    group-hover:text-gray-300"><Counter>{item.count}</Counter></div>
                </div>

                <div className="absolute z-0 w-full h-full right-0 left-0 bottom-0 top-0 transform-view">
                  <Image
                    src={bgShape}
                    alt="bgShape"
                    className="w-full h-full object-cover">
                  </Image>
                </div>
              </div>
            ))
          }
        </div>

        <div>
          <h2 className="text-[200px] leading-none
           text-end font-bold">Techtwen</h2>
        </div>

      </div>
    </div>
  )
}