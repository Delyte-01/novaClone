"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface NavProps {
  id: string;
  label: string;
}
const Header = () => {
  const navItems: NavProps[] = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About us" },
    { id: "/services", label: "services" },
    { id: "/faq", label: "Faq" },
    { id: "/contact", label: "Contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  console.log(pathname);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // close mobile menu
  };
  return (
    <header className="container-padding shadow-md sticky top-0  w-full  z-50  bg-white  border-b border-gray-200 transition-all duration-300  ">
      <div className="flex justify-between items-center py-4 h-[90px]">
        <div className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1750532895/ChatGPT_Image_Jun_21_2025_07_07_33_PM_qjr3ck.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-sm"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8  ">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick()}
              className={`relative text-sm font-bold transition-colors duration-200 ${
                item.id === pathname
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Link href={item.id} className="uppercase">
                {item.label}
              </Link>
            </button>
          ))}
          <Button className="uppercase bg-[#1F64E7] hover:bg-[#1F64E7]/80 cursor-pointer">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  dark:bg-gray-900/80  dark:border-gray-800 py-4 bg-white/80  backdrop-blur-md  w-full ">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick()}
              className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                pathname === item.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Link href={item.id}> {item.label}</Link>
            </button>
          ))}
        </div>
      )}
      {/* </div> */}
    </header>
  );
};

export default Header;
