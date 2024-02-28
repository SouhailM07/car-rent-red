"use client";
import "./cars.css";
// ? types
import { carTypes } from "@/types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// assets
import Image from "next/image";
import ford_logo from "/public/brands/ford.svg";
import mercedes_logo from "/public/brands/mercedes.svg";
import audi_logo from "/public/brands/audi.svg";
import bmw_logo from "/public/brands/bmw.svg";
import skoda_logo from "/public/brands/skoda.svg";
import vw_logo from "/public/brands/vw.svg";
import mazda_logo from "/public/brands/mazda.svg";
// assets cars
import ford_car from "/public/carImgs/car01.png";
import toyota_car from "/public/carImgs/car02.png";
import hyundai_car from "/public/carImgs/car03.png";
// components
import { Car } from "@/components";

export default function Cars() {
  const cars: carTypes[] = [
    {
      img: ford_car,
      carType: "HATCHBACK",
      rate: 3.5,
      carName: "FORD FOCUS",
      price: 29,
      gear: "MANUAL",
      seats: "5",
      gas: "GAS",
      hp: "1000",
      wheel: "FRONT",
    },
    {
      img: toyota_car,
      carType: "SEADAN",
      rate: 5,
      carName: "TOYOTA COROLLA",
      price: 25,
      gear: "AUTOMATIC",
      seats: "5",
      gas: "GAS",
      hp: "1200",
      wheel: "FRONT",
    },
    {
      img: hyundai_car,
      carType: "SUV",
      rate: 4.5,
      carName: "HONDA CR-V",
      price: 25,
      gear: "AUTOMATIC",
      seats: "5",
      gas: "GAS",
      hp: "2000",
      wheel: "ALL WHEEL",
    },
    {
      img: ford_car,
      carType: "HATCHBACK",
      rate: 3.5,
      carName: "FORD FOCUS",
      price: 29,
      gear: "MANUAL",
      seats: "5",
      gas: "GAS",
      hp: "1000",
      wheel: "FRONT",
    },
  ];
  const brands: string[] = [
    ford_logo,
    mercedes_logo,
    audi_logo,
    bmw_logo,
    skoda_logo,
    vw_logo,
    mazda_logo,
  ];

  return (
    <>
      <article className="px-[1rem] relative max-w-[70rem] mx-auto !z-[0] space-y-[2rem]">
        <section>
          <ul className="flex items-center md:justify-around justify-center flex-wrap gap-y-[1rem] gap-x-[2rem]">
            {brands.map((e, i) => {
              return (
                <li key={i}>
                  <Image
                    src={e}
                    alt="logo"
                    width="60"
                    height="60"
                    className="h-[3rem] w-[3rem]"
                  />
                </li>
              );
            })}
          </ul>
        </section>
        {/* Garage */}
        <section>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            role="list"
            className="mySwiper flex flex-col "
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              855: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {cars.map((e, i) => {
              return (
                <SwiperSlide key={i} className="">
                  <Car
                    carName={e.carName}
                    carType={e.carType}
                    gas={e.gas}
                    price={e.price}
                    seats={e.seats}
                    gear={e.gear}
                    hp={e.hp}
                    img={e.img}
                    rate={e.rate}
                    wheel={e.wheel}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </article>
    </>
  );
}
