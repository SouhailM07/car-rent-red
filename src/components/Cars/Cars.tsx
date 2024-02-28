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
import ford_logo from "/public/brands/ford.webp";
import mercedes_logo from "/public/brands/mercedes.webp";
import audi_logo from "/public/brands/audi.webp";
import bmw_logo from "/public/brands/bmw.webp";
import skoda_logo from "/public/brands/skoda.webp";
import vw_logo from "/public/brands/vw.webp";
import mazda_logo from "/public/brands/mazda.webp";
// assets cars
import ford_car from "/public/carImgs/car01.webp";
import toyota_car from "/public/carImgs/car02.webp";
import hyundai_car from "/public/carImgs/car03.webp";
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
  const brands = [
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
          <ul
            role="list"
            className="flex items-center md:justify-around justify-center flex-wrap gap-y-[1rem] gap-x-[2rem]"
          >
            {brands.map((e, i) => {
              return (
                <li role="listitem" key={i}>
                  <Image
                    src={e}
                    fetchPriority="high"
                    loading="eager"
                    alt="logo"
                    // width="60"
                    // height="60"
                    className="max-w-[3rem]"
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
            <ul role="list">
              {cars.map((e, i) => {
                return (
                  <li role="listitem">
                    <SwiperSlide>
                      <Car
                        key={i}
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
                  </li>
                );
              })}
            </ul>
          </Swiper>
        </section>
      </article>
    </>
  );
}
