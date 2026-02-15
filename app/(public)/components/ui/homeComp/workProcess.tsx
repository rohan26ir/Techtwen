interface processesType {
  id: number;
  title: string;
  description: string;
}

export default function WorkProcess() {
  const processes: processesType[] = [
    {
      id: 1,
      title: "Discover",
      description: "We understand your ideas, goals, and project requirements to plan the right solution."
    },
    {
      id: 2,
      title: "Design",
      description: "We create clean, user-friendly designs that match your brand and user needs."
    },
    {
      id: 3,
      title: "Develop",
      description: "We build your product using modern, scalable frontend and backend technologies."
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We test, deploy, and provide ongoing maintenance and support after launch."
    },
  ];

  return (
    <div className="bg-background dark:bg-background py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24 text-center">
          
          {/* Header */}
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[160px] leading-tight md:leading-[100%] font-bold">
              How We Build
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-end mt-2 sm:mt-4">
              Thoughtfully planned. Carefully built. Professionally delivered.
            </p>
          </div>

          {/* Body - Dynamic Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0">
            {processes.map((process, index) => (
              <div key={process.id} className="flex flex-col gap-3 w-full">
                {/* Number with connecting lines */}
                <div className="flex flex-row justify-center items-center">
                  {index !== 0 && (
                    <div className="w-full h-px bg-accent hidden sm:block"></div>
                  )}
                  <p className="text-xl sm:text-2xl font-bold w-24 sm:w-32 lg:w-40 h-10 sm:h-12 lg:h-14 flex justify-center items-center bg-secondary rounded-lg text-foreground dark:text-foreground">
                    {process.id.toString().padStart(2, '0')}
                  </p>
                  {index !== processes.length - 1 && (
                    <div className="w-px md:w-full h-5 md:h-px bg-accent hidden lg:block"></div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`p-4 sm:p-5 border-2 border-accent h-full rounded-lg lg:rounded-none ${index !== processes.length - 1 ? 'lg:mr-5' : ''}`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{process.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}