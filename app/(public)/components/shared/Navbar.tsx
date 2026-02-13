'use client';

import { useRouter } from "next/navigation";
import Button from "../button/Button";
import { DarkMode } from "../button/DarkMode";
import Link from "next/link";


interface NavMenu{
  id: number,
  name: string,
  path: string
}

export default function Navbar() {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact-us");
  };


  const navMenus: NavMenu[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Career", path: "/contact-us" },
];

  return (
    <nav className="bg-background dark:bg-background text-foreground dark:text-foreground shadow border-b-2 ">
      <div className="w-[98%] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* logo */}
          <div className="text-2xl font-bold">
            <Link href={'/'}>Techtwen</Link>
          </div>
          
          {/* center menu */}
          <div className="hidden md:flex flex-flex justify-between items-center gap-5">
            {
              navMenus.map((menu) => (
                <Link href={menu.path} key={menu.id} >
                  {menu.name}
                </Link>
              ))
            }
          </div>
          
          {/* right button */}
          <div className="flex flex-row justify-end items-center gap-1">
            <Button variant="outline" size="md" onClick={handleContact}>
              Contact Us
            </Button>

            <DarkMode ></DarkMode>
          </div>

        </div>
      </div>
    </nav>
  );
}