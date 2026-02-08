import Link from "next/link";

interface FooterMenu{
  id: number,
  name: string,
  path: string
}

export default function Footer() {


  const footermenu : FooterMenu[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Contact", path: "/contact-us" },
  ]
  const legalmenu : FooterMenu[] = [
    { id: 1, name: "Privecy Policy", path: "/" },
    { id: 2, name: "Terms & Condition", path: "/services" },
  ]

  const socialMenu : FooterMenu[] = [
    { id: 1, name: "Facebook", path: "/" },
    { id: 2, name: "Linkedin", path: "/" },
    { id: 3, name: "Twitter", path: "/" },
  ]


  return (
    <div className=" py-4">

      <div className="flex flex-col justify-between gap-2">

         {/* start-menu */}
         <div className="flex flex-col md:flex-row justify-between bg-black dark:bg-background backdrop-blur-2xl p-5  border-2 ">

           {/* left */}
            <div className="flex flex-row gap-2">
              {
                socialMenu.map((footMenu) => (
                  <Link href={footMenu.path} key={footMenu.id}>
                    <p className="py-2 px-4 rounded-sm bg-background dark:bg-background text-foreground dark:text-foreground border-white">{footMenu.name}</p>
                  </Link>
                ))
              }
            </div>
            {/* center */}
            {/* <div className="w-auto h-px bg-white"></div> */}
            {/* center */}
            <div className="flex flex-row gap-2">
              {
                footermenu.map((footMenu) => (
                  <Link href={footMenu.path} key={footMenu.id}>
                    <p className="py-2 px-4 rounded-sm bg-background dark:bg-background text-foreground dark:text-foreground">{footMenu.name}</p>
                  </Link>
                ))
              }
            </div>
            {/* right */}
            {/* <div className="w-auto h-px bg-white"></div> */}
            {/* right */}
            <div className="flex flex-row gap-2 ">
              {
                legalmenu.map((footMenu) => (
                  <Link href={footMenu.path} key={footMenu.id}>
                    <p className="py-2 px-4 rounded-sm bg-background dark:bg-background text-foreground dark:text-foreground">{footMenu.name}</p>
                  </Link>
                ))
              }
            </div>
            {/* end */}
         </div>
         
         
         {/* center-logo */}
         <div className="text-center border ">
          <h2 className="text-7xl lg:text-[260px] font-bold">Techtwen</h2>
         </div>


         {/* bottom- copy right */}
         <div className="container mx-auto text-center">
           <p>&copy; {new Date().getFullYear()} Techtwen. All rights reserved.</p>
         </div>

      </div>

    </div>
  );
}
