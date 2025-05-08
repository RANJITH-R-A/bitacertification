"use client";
import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // className="fixed top-0 left-0 w-full p-4 z-50"
    <nav 
    className={`fixed top-0 left-0 w-full z-[99] p-4 transition-all duration-300 ${
      scrolling ? "bg-white shadow-md" : "bg-white md:bg-transparent"
    }`}

    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div>
          <Image src="/homepageimages/bitalogo.png" width={120} height={120} alt="BITA Logo"/>
          {/* <img src="/homepageimages/bitalogo.png" alt="BITA Logo" className="w-full h-full"/> */}
        </div>

        {/* Right - Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl">Home</Link>
          </li>
          <li>
            <Link href="/aboutus" className="hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl">AboutUs</Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl">ContactUs</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full z-50 bg-white shadow-md overflow-hidden transition-all duration-300 ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-md">
          <li>
            <Link href="/" className="block hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/aboutus" className="block hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contactus" className="block hover:text-white hover:bg-themeblue transition duration-75 ease-linear px-3 py-1 rounded-xl" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
