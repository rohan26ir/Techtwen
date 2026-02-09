import Counter from "../dynamic/counter"



interface NUmberProp {
  id: number,
  count: number,
  title: string,
}



export default function Stats() {

  const NumberStat: NUmberProp[] = [
    { id: 1, title: "Years of Services", count: 2 },
    { id: 1, title: "Projects", count: 25 },
    { id: 1, title: "Team Members", count: 4 },
    { id: 1, title: "Happy Client", count: 20 },
  ]

  return (
    <div>

      <div className="w-[98%] mx-auto px-4 flex flex-col justify-center relative">

        <div className="relative ">
          <h2 className="text-[200px] leading-none text-start font-bold">We are</h2>
        </div>

        <div className="flex flex-row justify-between gap-2 relative z-0">
          {
            NumberStat.map((item) => (
              <div
                key={item.id}
                className="group w-full flex flex-col 
                           justify-between gap-20 p-5 
                           bg-secondary dark:bg-secondary 
                           hover:bg-[#313257]
                           font-bold transition-all duration-300"
              >
                <div className="h-full text-2xl 
                    group-hover:text-white">{item.id}</div>
                <div className="h-full text-5xl 
                    group-hover:text-white">{item.title}</div>
                <div className="h-full text-5xl 
                    group-hover:text-white"><Counter>{item.count}</Counter></div>
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