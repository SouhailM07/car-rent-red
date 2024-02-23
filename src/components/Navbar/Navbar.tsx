import "./navbar.css";
// ? types
import { navLinks } from "@/types";
// assets
import Image from "next/image";
import logo from "/public/logo.svg";

export default function Navbar() {
  const navLinks: navLinks[] = [
    { txt: "Home", link: "#Home" },
    { txt: "Cars", link: "#Cars" },
    { txt: "About", link: "#About" },
    { txt: "WhyUs", link: "#WhyUs" },
    { txt: "Testimonials", link: "#Testimonials" },
    { txt: "Contact", link: "#Footer" },
  ];
  return (
    <>
      <header className="sticky top-0 bg-white">
        <nav>
          <Image src={logo} alt="logo" width="194" height="64" />
          <ul className="flex space-x-[1.5rem] text-[0.8rem] ">
            {navLinks.map((e, i) => {
              return (
                <li key={i} className="cursor-pointer hover:text-primaryRed">
                  <a href={e.link}>{e.txt}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
