import "./home.css";
// ? types
import { download } from "@/types";
// assets
import Image from "next/image";
import heroImg from "/public/car.svg";
import playStore from "/public/google-play.svg";
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
          <h1 className="text-[2.2rem] font-bold leading-[2.8rem]">
            Explore the finest <br />
            <span className="text-primaryRed">Global </span>
            Offers
          </h1>
          <p className="text-gray-400 text-[0.75rem]">
            Find your ideal ride for any adventure with our diverse range of
            affordable and dependable car rentals
          </p>
          <div className="flex space-x-[1rem]">
            {download.map((e, i) => {
              return <DownloadBtn img={e.img} aria={e.ariaLabel} key={i} />;
            })}
          </div>
        </section>
        <section>
          <Image
            className="h-[22rem]"
            alt="hero img"
            src={heroImg}
            width="861"
            height="543"
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
      <Image src={img} alt="logo" role="button" aria-label={aria} />
    </>
  );
};
