import Marquee from "react-fast-marquee";
import Image from "next/image";

// image
import logo1 from '../../../../public/logo/logo1.svg'
import logo2 from '../../../../public/logo/logo2.svg'
import logo3 from '../../../../public/logo/logo3.svg'
import logo4 from '../../../../public/logo/logo4.svg'

interface logoProp {
  id: number,
  title: string,
  logo: string
}


export default function TrustedBy() {

  const logos: logoProp[] = [
    { id: 1, title: "logo", logo: logo1 },
    { id: 2, title: "logo", logo: logo2 },
    { id: 3, title: "logo", logo: logo3 },
    { id: 4, title: "logo", logo: logo4 },
  ]

  return (
    <div className="bg-secondary dark:bg-secondary py-20">
      <div className="w-[95%] mx-auto">

        <div className="grid grid-cols-11 justify-between gap-5">
          {/* left */}
          <div className="grid col-span-3 ">
            <h2 className="text-6xl font-bold">50,000+</h2>
            <p className="text-lg">People Use Us for anagen their team</p>
          </div>
          {/* center */}
          <div className="grid col-span-1 h-full w-0.5 mx-auto justify-center bg-secondary"></div>
          {/* right */}
          <div className="grid col-span-7 gap-5">
            <Marquee
              pauseOnHover={true} 
              className="flex justify-between">
              {logos.map((item) => (
                <div key={item.id} className="ml-15">
                  <Image src={item.logo} alt="logo" width={120} height={60} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </div>
  )
}