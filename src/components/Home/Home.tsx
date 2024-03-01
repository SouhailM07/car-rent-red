import "./home.css";
// ? types
import { download } from "@/types";
// assets
import Image from "next/image";
import heroImg from "/public/car.webp";
import playStore from "/public/google-play-badge-2022-2.svg";
import appStore from "/public/appstore-btn.svg";

/*=============================================================================================*/
// main component section
/*=============================================================================================*/

export default function Home() {
  let download: download[] = [
    { img: appStore, ariaLabel: "download from appstore" },
    { img: playStore, ariaLabel: "download from google play" },
  ];
  return (
    <>
      <article id="Home">
        <section className="space-y-[1.5rem] max-w-[21rem]">
          <h1 className="lg:text-[2rem] text-[1.5rem] font-bold leading-[2.8rem]">
            Explore the finest <br />
            <span className="text-primaryRed">Global </span>
            Offers
          </h1>
          <p className="text-secondaryText text-[0.75rem]">
            Find your ideal ride for any adventure with our diverse range of
            affordable and dependable car rentals
          </p>
          <div className="flex h-[2.5rem] max-md:justify-center ">
            {download.map((e, i) => {
              return <DownloadBtn img={e.img} aria={e.ariaLabel} key={i} />;
            })}
          </div>
        </section>
        <section
        >
          <Image
            draggable={false}
            fetchPriority="high"
            loading="eager"
            className="md:max-h-[22rem] max-h-[17rem] max-md:w-[90%] max-md:mx-auto max-md:mt-[2rem]"
            alt="hero img"
            src={heroImg}
          />
        </section>
      </article>
    </>
  );
}

/*=============================================================================================*/
// small components section
/*=============================================================================================*/

let DownloadBtn = ({ img, aria }: { img: string; aria: string }) => {
  return (
    <>
      <Image
        draggable={false}
        src={img}
        alt="logo"
        role="button"
        aria-label={aria}
        className="h-full w-[8.7rem]"
      />
    </>
  );
};
