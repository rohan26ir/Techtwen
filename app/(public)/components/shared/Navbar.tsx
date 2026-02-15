'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../button/Button";
import { DarkMode } from "../button/DarkMode";
import Link from "next/link";
import { X, Menu } from "lucide-react"; // You'll need lucide-react for icons

interface NavMenu {
  id: number;
  name: string;
  path: string;
}

export default function Navbar() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleContact = () => {
    router.push("/contact-us");
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navMenus: NavMenu[] = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Career", path: "/contact-us" },
  ];

  return (
    <>
      <nav className="bg-background dark:bg-background text-foreground dark:text-foreground shadow border-b-2">
        <div className="w-[98%] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* logo */}
            <div className="text-2xl font-bold">
              <Link href={'/'}>Techtwen</Link>
            </div>
            
            {/* center menu - desktop only */}
            <div className="hidden md:flex flex-row justify-between items-center gap-5">
              {navMenus.map((menu) => (
                <Link 
                  href={menu.path} 
                  key={menu.id}
                  className="hover:text-primary transition-colors"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            
            {/* right buttons */}
            <div className="flex flex-row justify-end items-center gap-1">
              <div className="hidden md:block">
                <Button 
                variant="outline" 
                size="md" 
                onClick={handleContact}
              >
                Contact Us
              </Button>
              </div>

              <DarkMode />

              {/* hamburger menu - mobile only */}
              <button
                onClick={toggleSidebar}
                className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* sidebar - slides from LEFT */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-background dark:bg-background text-foreground dark:text-foreground shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          
          {/* sidebar header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold">Menu</span>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* sidebar menu */}
          <div className="flex flex-col gap-2 p-4 flex-1">
            {navMenus.map((menu) => (
              <Link
                href={menu.path}
                key={menu.id}
                onClick={() => setIsSidebarOpen(false)}
                className="px-4 py-3 rounded-md hover:bg-accent transition-colors"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* sidebar footer */}
          <div className="p-4 border-t mb-5 flex justify-center">
            <Button 
              variant="outline" 
              size="md" 
              onClick={handleContact}
            >
              Contact Us
            </Button>
          </div>

        </div>
      </aside>
    </>
  );
}