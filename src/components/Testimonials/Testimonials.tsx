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
  return (
    <>
      <article id="Testimonials">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper flex flex-col justify-center text-center "
        >
          <ul role="list">
            {Array(2)
              .fill("")
              .map((_e, i) => {
                return (
                  <li key={i + 1} role="listitem">
                    <SwiperSlide className="!space-y-[2rem] ">
                      <Image src={quoteLogo} alt="logo" className="mx-auto" />
                      <p className="Testimonials__quote ">
                        They truly exceeded my expectations and made my car
                        rental experience a delight
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
          </ul>
        </Swiper>
      </article>
    </>
  );
}
