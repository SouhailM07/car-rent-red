import "./mycontainer.css";
// components
import {
  Navbar,
  Home,
  Cars,
  SelectTime,
  About,
  WhyUs,
  Testimonials,
  Contact,
  Footer,
} from "@/components";
export default function MyContainer() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="space-y-[10rem]">
        {/* <Home /> */}
        {/* <SelectTime /> */}
        {/* <Cars /> */}
        {/* <About /> */}
        {/* <WhyUs /> */}
        <Testimonials />
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
