"use client";
import "./selecttime.css";
// hooks
import * as React from "react";
import { useState } from "react";
// shadcn-ui
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
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
      <article className="bg-white lg:flex hidden sticky top-[3rem] justify-between mx-auto max-w-[62rem] px-[1rem] border border-gray-600 py-[0.3rem]">
        <section className="grid grid-cols-3 gap-x-[1rem]">
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
              src={gps_logo}
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
                {/* <CalendarIcon className="mr-2 h-3 w-3" /> */}
                <p className="font-medium text-[0.8rem]">SELECT DATE</p>
                <p className="text-[0.7rem]">
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")}{" "}
                        <span className="text-primaryRed">{"->"}</span>{" "}
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
  let locations: string[] = ["New york", "2", "3", "4"];
  let [toggleSelect, setToggleSelect] = useState<boolean>(false);
  const handleSelect = (choice) => {
    setPlace(choice);
    setToggleSelect(false);
  };
  return (
    <>
      <div>
        <div className="">
          <button
            onClick={() => setToggleSelect(!toggleSelect)}
            className="font-medium text-[0.8rem]"
          >
            SELECT LOCATION
          </button>
          <p className="text-[0.7rem] text-secondaryText">{place}</p>
        </div>
        {toggleSelect && (
          <ul className="absolute translate-y-[1rem] py-[1rem] border-2 space-y-[0.5rem] w-[10rem] text-center px-[1rem] rounded-xl shadow-lg">
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
        )}
      </div>
    </>
  );
};

let SelectHours = () => {
  let [hour, setHour] = useState<string>("SELECT THE HOURS");
  let [toggleSelect, setToggleSelect] = useState<boolean>(false);
  let locations: string[] = ["New york", "2", "3", "4"];
  const handleSelect = (choice) => {
    setToggleSelect(false);
    setHour(choice);
  };
  return (
    <>
      <div>
        <div className="">
          <button
            onClick={() => setToggleSelect(!toggleSelect)}
            className="font-medium text-[0.8rem]"
          >
            SELECT LOCATION
          </button>
          <p className="text-[0.7rem] text-secondaryText">{hour}</p>
        </div>
        {toggleSelect && (
          <ul className="absolute translate-y-[1rem] py-[1rem] border-2 space-y-[0.5rem] w-[10rem] text-center px-[1rem] rounded-xl shadow-lg">
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
        )}
      </div>
    </>
  );
};
