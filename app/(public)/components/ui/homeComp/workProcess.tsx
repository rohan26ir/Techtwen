
interface processesType {
  id: number,
  title: string,
  description: string
}

export default function WorkProcess(){

  // const processes: processesType[] = [
  //   {id: 1, 
  //   title:"Discover", 
  //   description:"We understand your ideas, goals, and project requirements to plan the right solution."
  //   },
  //   {id:2, 
  //   title:"Design", 
  //   description:"We create clean, user-friendly designs that match your brand and user needs."
  //   },
  //   {id:3, 
  //   title:"Develop", 
  //   description:"We build your product using modern, scalable frontend and backend technologies."
  //   },
  //   {id:4, 
  //   title:"Launch & Support", 
  //   description:"We test, deploy, and provide ongoing maintenance and support after launch."
  //   },
  // ]

  return (
    <div className="bg-secondary dark:bg-secondary  py-20">
      <div className="w-[90%] mx-auto">

        <div className="flex flex-col justify-center items-center gap-24 text-center">
        {/* head */}
          <div>
            <h2 className="text-[160px] leading-[100%] font-bold">How We Build</h2>
            <p className="text-2xl text-end">Thoughtfully planned. Carefully built. Professionally delivered.</p>
          </div>

          {/* body */}
          <div className="w-full grid grid-cols-4  justify-between">
            {/* 1st */}
            <div className="p-0 flex flex-col gap-3">
                  {/* start */}
                  {/* number */}
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-full h-px   "></div>
                    <p className="text-2xl font-bold w-40 h-14 flex justify-center items-center bg-background rounded-lg text-foreground dark:text-foreground">01</p>
                    <div className="w-full h-px bg-black"></div>
                  </div>
                  <div className="p-5 border-2 border-white h-full mr-5">
                    {/* title */}
                   <div>
                     <h3 className="text-3xl font-bold">Discover</h3>
                   </div>
                   {/* line */}
                   {/* <div className="w-full h-px bg-black"></div> */}
                   {/* description */}
                   <div>
                    <p>We understand your ideas, goals, and project requirements to plan the right solution.</p>
                   </div>
                  </div>
                   {/* end */}
            </div>
            {/* 2nd */}
            <div className="p-0 flex flex-col gap-3">
                  {/* start */}
                  {/* number */}
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-full h-px bg-black"></div>
                    <p className="text-2xl font-bold w-40 h-14 flex justify-center items-center bg-background rounded-lg text-foreground dark:text-foreground">02</p>
                    <div className="w-full h-px bg-black"></div>
                  </div>
                  <div className="p-5 border-2 border-white h-full mr-5">
                    {/* title */}
                   <div>
                     <h3 className="text-3xl font-bold">Design</h3>
                   </div>
                   {/* line */}
                   {/* <div className="w-full h-px bg-black"></div> */}
                   {/* description */}
                   <div>
                    <p>We create clean, user-friendly designs that match your brand and user needs.</p>
                   </div>
                  </div>
                   {/* end */}
            </div>
            {/* 3rd */}
            <div className="p-0 flex flex-col gap-3">
                  {/* start */}
                  {/* number */}
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-full h-px bg-black"></div>
                    <p className="text-2xl font-bold w-40 h-14 flex justify-center items-center bg-background rounded-lg text-foreground dark:text-foreground">03</p>
                    <div className="w-full h-px bg-black"></div>
                  </div>
                  <div className="p-5 border-2 border-white h-full mr-5">
                  {/* title */}
                   <div>
                     <h3 className="text-3xl font-bold">Develop</h3>
                   </div>
                   {/* line */}
                   {/* <div className="w-full h-px bg-black"></div> */}
                   {/* description */}
                   <div>
                    <p>We build your product using modern, scalable frontend and backend technologies.</p>
                   </div>
                   </div>
                   {/* end */}
            </div>
            {/* 4th */}
            <div className="p-0 flex flex-col gap-3">
                  {/* start */}
                  {/* number */}
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-full h-px bg-black"></div>
                    <p className="text-2xl font-bold w-40 h-14 flex justify-center items-center bg-background rounded-lg text-foreground dark:text-foreground">04</p>
                    <div className="w-full h-px "></div>
                  </div>
                  <div className="p-5 border-2 border-white">
                  {/* title */}
                   <div>
                     <h3 className="text-3xl font-bold">Launch & Support</h3>
                   </div>
                   {/* line */}
                   {/* <div className="w-full h-px bg-black"></div> */}
                   {/* description */}
                   <div>
                    <p>We test, deploy, and provide ongoing maintenance and support after launch.</p>
                   </div>
                   </div>
                   {/* end */}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
