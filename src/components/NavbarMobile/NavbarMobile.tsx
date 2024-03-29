import "./navbarmobile.css";
// ? types
import { navLinks } from "@/types";
// shadcn-ui
import { Button } from "../ui/button";
// components
import { SelectTimeMobile } from "@/components";

export default function NavbarMobile() {
  const navLinks: navLinks[] = [
    { txt: "Home", link: "#Home" },
    { txt: "Cars", link: "#Cars" },
    { txt: "About", link: "#About" },
    { txt: "WhyUs", link: "#WhyUs" },
    { txt: "Testimonials", link: "#Testimonials" },
    { txt: "Contact", link: "#Contact" },
  ];
  return (
    <>
      <article>
        <ul
          role="list"
          className="text-[0.9rem] font-medium  flex-col flex items-center space-y-[1.1rem]"
        >
          {navLinks.map((e, i) => {
            return (
              <li role="listitem" key={i} className=" hover:text-primaryRed">
                <a href={e.link}>{e.txt}</a>
              </li>
            );
          })}
          <li>
            <Button className="p-[1.4rem] ">SEE ALL CARS</Button>
          </li>
          <SelectTimeMobile />
        </ul>
      </article>
    </>
  );
}
