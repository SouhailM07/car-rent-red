"use client";
import "./footer.css";
//
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// shadcn-ui
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// assets
import Image from "next/image";
import logo from "/public/logo.svg";
import phone_logo from "/public/phone-solid.svg";
import email_logo from "/public/envelope-solid.svg";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
});

export default function Footer() {
  return (
    <>
      <footer className="mt-[10rem] px-[1rem] max-w-[70rem] mx-auto">
        <article className="flex justify-between flex-wrap">
          <S1 />
          <S2 />
          <S3 />
          <S4 />
        </article>
        <section>
          <p className="text-center text-secondaryText mb-[2rem] mt-[4rem] text-[0.8rem]">
            Copyright @ Carland 2023. All rights reserved
          </p>
        </section>
      </footer>
    </>
  );
}

let S1 = () => {
  interface arrOfContact_type {
    img: string;
    label: string;
  }
  let arrOfContacts: arrOfContact_type[] = [
    { img: phone_logo, label: "(123456-7890)" },
    { img: email_logo, label: "office@carland.com" },
  ];
  return (
    <>
      <section className="max-w-[16rem] space-y-[1.4rem]">
        <Image src={logo} alt="logo" width="194" height="64" />
        <p className="text-secondaryText text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul role="list" className="text-[0.8rem] space-y-[0.7rem]">
          {arrOfContacts.map((e, i) => {
            return (
              <li
                role="listitem"
                key={i}
                className="flex items-center space-x-[0.5rem]"
              >
                <Image src={e.img} alt="logo" className="h-[1rem] w-[1rem]" />
                <p>{e.label}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

const S2 = () => {
  let company: string[] = [
    "New York",
    "Careers",
    "Mobile",
    "Blog",
    "How we work",
  ];
  return (
    <>
      <section>
        <h1 className="listTitle">Company</h1>
        <ul className="sectionList" role="list">
          {company.map((e, i) => {
            return (
              <li role="listitem" key={i}>
                {e}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

const S3 = () => {
  interface workingHours_type {
    title: string;
    txt: string;
  }
  let workingHours: workingHours_type[] = [
    { title: "Mon-fri", txt: "09:00AM - 09:00PM" },
    { title: "Sat", txt: "09:00AM - 07:00PM" },
    { title: "Sun", txt: "Closed" },
  ];
  return (
    <>
      <section>
        <h1 className="listTitle">Working Hours</h1>
        <ul className="sectionList" role="list">
          {workingHours.map((e, i) => {
            return (
              <li key={i} role="listitem">
                <p>
                  <span className="text-secondaryText">{e.title}: </span>
                  {e.txt}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

let S4 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // ! default values
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <>
      <section className="max-w-[20rem] space-y-[1rem]">
        <h1 className="listTitle">Newsletter</h1>
        <p className="text-[0.8rem] text-secondaryText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          quas?
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email@example" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-primaryRed hover:bg-red-700">
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
};
