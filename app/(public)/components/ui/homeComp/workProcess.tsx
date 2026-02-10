
interface processesType {
  id: number,
  title: string,
  description: string
}

export default function WorkProcess(){

  const processes: processesType[] = [
    {id: 1, 
    title:"Discover", 
    description:"We understand your ideas, goals, and project requirements to plan the right solution."
    },
    {id:2, 
    title:"Design", 
    description:"We create clean, user-friendly designs that match your brand and user needs."
    },
    {id:3, 
    title:"Develop", 
    description:"We build your product using modern, scalable frontend and backend technologies."
    },
    {id:4, 
    title:"Launch & Support", 
    description:"We test, deploy, and provide ongoing maintenance and support after launch."
    },
  ]
  return (
    <div className="bg-gray-200  py-20">
      <div className="w-[90%] mx-auto">

        <div className="flex flex-col justify-center items-center gap-10 text-center">
        {/* head */}
          <div>
            <h2 className="text-9xl font-bold">How We Build</h2>
            <p className="text-lg">Thoughtfully planned. Carefully built. Professionally delivered.</p>
          </div>

          {/* body */}
          <div className="w-full grid grid-cols-4  justify-between">
            {
              processes.map((item) => (
                <div key={item.id} 
                     className="p-3 flex flex-col gap-3">
                  {/* start */}
                  {/* number */}
                  <div>
                    <p className="text-2xl font-bold">{item.id}</p>
                  </div>
                  {/* title */}
                   <div>
                     <h3 className="text-3xl font-bold">{item.title}</h3>
                   </div>
                   {/* line */}
                   {/* <div className="w-full h-px bg-black"></div> */}
                   {/* description */}
                   <div>
                    <p>{item.description}</p>
                   </div>
                   {/* end */}
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
};
