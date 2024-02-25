import "./contact.css";
// ? types
import { download } from "@/types";
// assets
import contact_logo from "/public/cta.svg";
import Image from "next/image";
import playStore from "/public/google-play-badge-2022-2.svg";
import appStore from "/public/appstore-btn.svg";

export default function Contact() {
  let download: download[] = [
    { img: appStore, ariaLabel: "download from appstore" },
    { img: playStore, ariaLabel: "download from google play" },
  ];
  return (
    <>
      <article className="flex justify-around max-w-[70rem] px-[1rem] items-center mx-auto">
        <section className="space-y-[1rem] max-w-[25rem]">
          <h1 className="text-[1.8rem] font-bold">
            Download our App now and hit the road with ease
          </h1>
          <p className="text-secondaryText text-[0.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            molestiae libero harum ipsa corporis, nesciunt incidunt numquam illo
            sequi praesentium?
          </p>
          <div className="flex h-[2.5rem]">
            {download.map((e, i) => {
              return <DownloadBtn img={e.img} aria={e.ariaLabel} key={i} />;
            })}
          </div>
        </section>
        <section>
          <Image alt="img" src={contact_logo} width="315" height="560" />
        </section>
      </article>
    </>
  );
}
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
