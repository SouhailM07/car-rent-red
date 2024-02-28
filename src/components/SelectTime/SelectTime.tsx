"use client";
import "./selecttime.css";
// hooks
import * as React from "react";
import { useState } from "react";
// shadcn-ui
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// assets
import Image from "next/image";
import gps_logo from "/public/location-dot-solid.svg";
import calendar_logo from "/public/calendar-days-regular.svg";
import clock_logo from "/public/clock-solid.svg";
export default function SelectTime() {
  return (
    <>
      <article className="bg-white lg:flex shadow-lg hidden sticky top-[2.8rem] justify-between mx-auto max-w-[62rem] px-[1rem] z-[10] py-[0.3rem]">
        <section className="grid grid-cols-3 gap-x-[1rem] items-end">
          <SelectPlace />
          <SelectTimeOptions />
          <SelectHours />
        </section>
        <Button className="bg-primaryRed hover:bg-red-700">SEARCH</Button>
      </article>
    </>
  );
}

const SelectTimeOptions = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex space-x-[0.5rem]">
            <Image
              src={calendar_logo}
              alt="logo"
              className="h-[1rem] w-[1rem] mt-[0.4rem]"
            />
            <div>
              <button
                id="date"
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <p className="font-medium text-[0.8rem]">SELECT DATE</p>
                <p className="text-[0.7rem]">
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")}{" "}
                        <span className="text-primaryRed font-bold">
                          {"->"}
                        </span>{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </p>
              </button>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

let SelectPlace = () => {
  let [place, setPlace] = useState<string>("SELECT THE PLACE");
  let locations: string[] = [
    "MAIN STREET 123, UNITED STATES",
    "BUSINESS AVENUE 456, CANADA",
    "PARK ROAD 789, UNITED KINGDOM",
  ];
  const handleSelect = (choice) => {
    setPlace(choice);
  };
  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger className="font-medium text-[0.8rem] flex space-x-[0.5rem] text-start">
            <>
              <Image
                src={gps_logo}
                alt="logo"
                className="h-[1rem] w-[1rem] mt-[0.3rem]"
              />
              <div>
                <h1>SELECT LOCATION</h1>
                <p className="text-[0.7rem] text-secondaryText">{place}</p>
              </div>
            </>
          </PopoverTrigger>
          <PopoverContent className=" translate-y-[1rem] py-[1rem] border-2 text-[0.7rem] min-w-[14rem] text-center px-[1rem] rounded-xl shadow-lg">
            <ul className="space-y-[1rem] ">
              {locations.map((e, i) => {
                return (
                  <li
                    onClick={() => handleSelect(e)}
                    key={i}
                    className="cursor-pointer"
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

let SelectHours = () => {
  let [hour, setHour] = useState<string>("SELECT THE HOURS");
  let locations: string[] = ["10:00 AM", "12:00 AM", "14:00 AM", "16:00 AM"];
  const handleSelect = (choice) => {
    setHour(choice);
  };
  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger className="font-medium text-[0.8rem] text-start flex space-x-[0.5rem]">
            <>
              <Image
                src={clock_logo}
                alt="logo"
                className="h-[1rem] w-[1rem] mt-[0.3rem]"
              />
              <div>
                <h1>SELECT THE HOURS</h1>
                <p className="text-[0.7rem] text-secondaryText">{hour}</p>
              </div>
            </>
          </PopoverTrigger>
          <PopoverContent className=" translate-y-[1rem] py-[1rem] border-2  w-[10rem] text-center px-[1rem] rounded-xl shadow-lg">
            <ul className="space-y-[1rem]">
              {locations.map((e, i) => {
                return (
                  <li
                    onClick={() => handleSelect(e)}
                    key={i}
                    className="cursor-pointer"
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
