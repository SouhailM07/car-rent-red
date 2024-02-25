"use client";
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
//
import Image from "next/image";
import quoteLogo from "/public/quote.svg";
import avatar from "/public/avatar.png";

export default function Testimonials() {
  let arr = [1, 2];
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper flex flex-col justify-center text-center "
      >
        {arr.map((e) => {
          return (
            <li key={e}>
              <SwiperSlide className="!space-y-[2rem] ">
                <Image src={quoteLogo} alt="logo" className="mx-auto" />
                <p className="text-[1.6rem] font-bold mx-auto max-w-[40rem]">
                  They truly exceeded my expectations and made my car rental
                  experience a delight
                </p>
                <div className="space-y-[0.7rem]">
                  <Image src={avatar} alt="logo" className="mx-auto" />
                  <h1 className="text-[0.9rem]">Jane Doe</h1>
                  <p className="text-[0.8rem] text-secondaryText">
                    Photographer & Videographer
                  </p>
                </div>
              </SwiperSlide>
            </li>
          );
        })}
      </Swiper>
    </>
  );
}
