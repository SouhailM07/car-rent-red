import "./whyus.css";
// ? types
import { why } from "@/types";
// assets
import Image from "next/image";
import whyUsBg from "/public/whyCarImg.svg";
import keyLogo from "/public/bx-key.svg";
import arrowTrendLogo from "/public/arrow-trend-up-solid.svg";
import handsLogo from "/public/handshake-solid.svg";

export default function WhyUs() {
  let reasons: why[] = [
    {
      img: keyLogo,
      title: "Rent simply and quickly",
      txt: "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.",
    },
    {
      img: arrowTrendLogo,
      title: "Modern & well maintained vehicles",
      txt: "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.",
    },
    {
      img: handsLogo,
      title: "Prompt and flexible services",
      txt: "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding.",
    },
  ];
  return (
    <>
      <article id="WhyUs" className="text-center componentSize">
        <section>
          <h1 className="md:text-[1.8rem] text-[1.3rem] font-bold mb-[1rem]">
            Unmatched excellence and customer satisfaction
          </h1>
          <p className="text-secondaryText text-[0.8rem] max-w-[34rem] mx-auto">
            Our dedication to providing exceptional services sets us apart from
            the competition. From the moment you engage with us , we strive to
            exceed your expectations in every interaction.
          </p>
        </section>
        <Image
          draggable={false}
          src={whyUsBg}
          alt="img"
          width="1216"
          height="420"
          className=" mx-auto  max-md:hidden "
        />
        <section id="WhyUs__s2">
          <ul>
            {reasons.map((e, i) => {
              return <Why key={i} img={e.img} title={e.title} txt={e.txt} />;
            })}
          </ul>
        </section>
      </article>
    </>
  );
}

let Why = ({
  img,
  title,
  txt,
}: {
  img: string;
  title: string;
  txt: string;
}) => {
  return (
    <>
      <li className="tex-center space-y-[0.7rem]">
        <Image
          draggable={false}
          src={img}
          alt="logo"
          className="h-[2rem] mx-auto w-[2rem]"
        />
        <h1 className="font-bold">{title}</h1>
        <p className="text-secondaryText text-[0.72rem] mx-auto max-w-[20rem]">
          {txt}
        </p>
      </li>
    </>
  );
};
