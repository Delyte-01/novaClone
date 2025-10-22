"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  const dropdownLinks = [
    {
      id: "/services/#fractional-cfo-service",
      label: "Fractional CFO Services",
    },
    {
      id: "/services/#outsourced-accounting",
      label: "Outsourced Accounting Services",
    },
    {
      id: "/services/#accounting-system-automation",
      label: "Accounting System Automation",
    },
    {
      id: "/services/#company-registration-compliance",
      label: "Business Registration and Compliance",
    },
    {
      id: "/services/#supply-chain-management",
      label: "Supply Chain Management",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // small timeout to avoid accidental close while moving pointer to dropdown
  const desktopCloseTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (desktopCloseTimeout.current) {
        clearTimeout(desktopCloseTimeout.current);
      }
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false); // close mobile menu
    setMobileServicesOpen(false);
  };

  return (
    <header className="container-padding shadow-md sticky top-0 w-full z-50 bg-white border-b border-gray-200 transition-all duration-300">
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
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.id === "/services" ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  // cancel any pending close and open immediately
                  if (desktopCloseTimeout.current) {
                    clearTimeout(desktopCloseTimeout.current);
                    desktopCloseTimeout.current = null;
                  }
                  setDesktopServicesOpen(true);
                }}
                onMouseLeave={() => {
                  // delay close slightly so pointer can move into the menu
                  if (desktopCloseTimeout.current)
                    clearTimeout(desktopCloseTimeout.current);
                  desktopCloseTimeout.current = window.setTimeout(() => {
                    setDesktopServicesOpen(false);
                    desktopCloseTimeout.current = null;
                  }, 150);
                }}
              >
                <button
                  onClick={() => setDesktopServicesOpen((s) => !s)}
                  aria-expanded={desktopServicesOpen}
                  className={`flex items-center gap-2 text-sm font-bold transition-colors duration-200 ${
                    item.id === pathname
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Link href={item.id} className="uppercase">
                    {item.label}
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      desktopServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute right-0 top-full mt-3 w-69 bg-white  border border-gray-200 rounded-md shadow-lg overflow-hidden transform origin-top-right z-50
                    transition-all duration-200 ${
                      desktopServicesOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                    }`}
                >
                  <nav className="flex flex-col">
                    {dropdownLinks.map((d) => (
                      <Link
                        href={d.id}
                        key={d.id}
                        onClick={() => {
                          setDesktopServicesOpen(false);
                          handleNavClick(d.id);
                        }}
                        className="block px-5 uppercase py-3 text-sm text-gray-700 hover:text-blue-900 poppins-bold hover:bg-gray-50 transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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
            )
          )}
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
        <div className="md:hidden dark:bg-gray-900/80 dark:border-gray-800 py-4 bg-white/80 backdrop-blur-md w-full">
          {navItems.map((item) =>
            item.id === "/services" ? (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className={`justify-between w-full text-left py-2 px-4 text-sm flex items-center font-medium transition-colors duration-200 ${
                    pathname === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  <Link href={item.id} className="text-[18px] uppercase"> {item.label}</Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`px-4 overflow-hidden transition-[max-height,opacity] duration-300 ${
                    mobileServicesOpen
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <nav className="flex flex-col">
                    {dropdownLinks.map((d) => (
                      <Link
                        href={d.id}
                        key={d.id}
                        onClick={() => {
                          handleNavClick(d.id);
                        }}
                        className="block py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <Link href={item.id} className="text-[18px] uppercase"> {item.label}</Link>
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
