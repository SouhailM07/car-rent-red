"use client";
import "./navbar.css";
// ? types
import { navLinks } from "@/types";
// hooks
import { useState, createContext } from "react";
// components
import { NavbarMobile } from "@/components";
// assets
import Image from "next/image";
import logo from "/public/logo.svg";
import menubar_logo from "/public/bars-solid.svg";
import xmark_logo from "/public/xmark-solid.svg";

export const ToggleContext: any = createContext("");

export default function Navbar() {
  const navLinks: navLinks[] = [
    { txt: "Home", link: "#Home" },
    { txt: "Cars", link: "#Cars" },
    { txt: "About", link: "#About" },
    { txt: "WhyUs", link: "#WhyUs" },
    { txt: "Testimonials", link: "#Testimonials" },
    { txt: "Contact", link: "#Contact" },
  ];
  let [toggleNav, setToggleNav] = useState<boolean>(false);
  return (
    <>
      <ToggleContext.Provider value={{ setToggleNav }}>
        <header className="sticky top-0 bg-white z-[99] ">
          <nav>
            <Image src={logo} alt="logo" width="194" height="64" />
            <ul className="space-x-[1.5rem] text-[0.8rem] hidden lg:flex">
              {navLinks.map((e, i) => {
                return (
                  <li key={i} className="cursor-pointer hover:text-primaryRed">
                    <a href={e.link}>{e.txt}</a>
                  </li>
                );
              })}
            </ul>
            <Image
              alt="logo"
              src={toggleNav ? xmark_logo : menubar_logo}
              className="h-[1rem] w-[1rem] lg:hidden cursor-pointer"
              role="button"
              aria-label="toggle navbar"
              onClick={() => setToggleNav(!toggleNav)}
            />
          </nav>
        </header>
        {toggleNav && <NavbarMobile />}
      </ToggleContext.Provider>
    </>
  );
}
