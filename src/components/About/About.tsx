"use client";
import "./about.css";
// ? types
import { aboutDetails } from "@/types";
import CountUp from "react-countup";
// shadcn-ui
import { Button } from "../ui/button";
// assets
import Image from "next/image";
import aboutBg from "/public/car01.png";
import carLogo from "/public/car-solid.svg";
import buildingLogo from "/public/building-solid.svg";
import repairLogo from "/public/wrench-solid.svg";

export default function About() {
  let details: aboutDetails[] = [
    { img: carLogo, endV: 50, txt: "CAR TYPES" },
    { img: buildingLogo, endV: 135, txt: "RENTAL OUTLETS" },
    { img: repairLogo, endV: 35, txt: "REPAIR POINTS" },
  ];
  return (
    <>
      <article
        id="About"
        className="grid grid-cols-2 gap-x-[2rem] componentSize"
      >
        <section>
          <Image src={aboutBg} alt="img" className="h-[20rem] w-[24rem]" />
        </section>
        <section className="flex flex-col justify-between items-start">
          <h1 className="text-[1.8rem] font-bold">Car services simplified.</h1>
          <p className="text-[0.8rem] text-secondaryText max-w-[20rem] ">
            Rent, choose, and repair with ease. OUr convenient locations,
            diverse car types, and relabel repair points ensure a seamiest car
            experience.
          </p>
          <ul className="flex space-x-[3rem] my-[2rem]">
            {details.map((e, i) => {
              return (
                <li key={i} className="grid-rows-3 space-y-[0.2rem] text-start">
                  <Image
                    src={e.img}
                    alt="logo"
                    className="h-[1.5rem] w-[1.5rem]"
                  />
                  <p>
                    <CountUp
                      className="font-bold text-[1.2rem]"
                      start={0}
                      end={e.endV}
                      duration={6}
                    />
                  </p>
                  <p className="text-[0.6rem] font-medium w-[3rem]">{e.txt}</p>
                </li>
              );
            })}
          </ul>
          <Button className="bg-primaryRed hover:bg-red-700">
            SEE ALL CARS
          </Button>
        </section>
      </article>
    </>
  );
}
