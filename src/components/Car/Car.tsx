import "./car.css";
// ? types
import { carTypes } from "@/types";
// assets
import Image from "next/image";
import star_logo from "/public/star-solid.svg";
import half_star from "/public/star-half-stroke-solid.svg";
import empty_star from "/public/star-regular.svg";
// assets car details
import gearshift_logo from "/public/carSlider/gearshift.svg";
import gas_logo from "/public/carSlider/gas.svg";
import seat_logo from "/public/carSlider/seat.svg";
import engine_logo from "/public/carSlider/engine.svg";
import wheel_logo from "/public/carSlider/wheel.svg";
// shadcn-ui
import { Button } from "../ui/button";
export default function Car({
  img,
  carName,
  carType,
  gas,
  gear,
  hp,
  price,
  rate,
  seats,
  wheel,
}: carTypes) {
  interface car_details_type {
    img: string;
    detail: string;
  }
  const details: car_details_type[] = [
    { img: gearshift_logo, detail: gear },
    { img: seat_logo, detail: `${seats} SEATS` },
    { img: gas_logo, detail: gas },
    { img: engine_logo, detail: `${hp} HP` },
    { img: wheel_logo, detail: wheel },
  ];
  return (
    <>
      <li className="max-w-[18rem] mx-auto relative z-[-1]">
        <Image src={img} alt="car img" />
        <div className="space-y-[1.5rem]">
          <div>
            <div className="flex justify-between">
              <span className="text-secondaryText text-[0.7rem]">
                {carType}
              </span>
              <Stars rate={rate} />
            </div>
            <h1 className="font-bold text-[0.9rem]">{carName}</h1>
            <p className="text-primaryRed text-[0.7rem] font-bold">
              ${price}/DAY
            </p>
          </div>
          <ul
            role="list"
            className="flex space-x-[1rem] text-[0.55rem] font-medium text-secondaryText uppercase "
          >
            {details.map((e, i) => {
              return (
                <li
                  key={i}
                  role="listitem"
                  className="flex flex-col items-center space-y-[0.4rem]"
                >
                  <Image
                    src={e.img}
                    alt="logo"
                    width={40}
                    height={40}
                    className="bg-slate-900 p-[0.3rem] rounded-full"
                  />
                  <p>{e.detail}</p>
                </li>
              );
            })}
          </ul>
          <Button className="bg-primaryRed hover:bg-red-700 w-full text-[0.8rem] rounded-sm">
            SEE DETAILS
          </Button>
        </div>
      </li>
    </>
  );
}

let Stars = ({ rate }: { rate: number }) => {
  return (
    <>
      <div className="flex items-center space-x-[0.4rem]">
        {Array(Math.floor(rate))
          .fill("")
          .map((_e, i) => {
            return (
              <Image
                key={i}
                src={star_logo}
                alt="logo"
                className="h-[1rem] w-[1rem]"
              />
            );
          })}
        {Math.floor(rate) !== Math.ceil(rate) && (
          <Image src={half_star} alt="logo" className="h-[1rem] w-[1rem]" />
        )}
        {Array(5 - Math.ceil(rate))
          .fill("")
          .map((_e, i) => {
            return (
              <Image
                key={i}
                src={empty_star}
                alt="logo"
                className="h-[1rem] w-[1rem]"
              />
            );
          })}
      </div>
    </>
  );
};
