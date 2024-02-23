import "./mycontainer.css";
// components
import { Navbar, Home, SelectTime, About, WhyUs } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="space-y-[10rem]">
        <Home />
        <SelectTime />
        <About />
        <WhyUs />
      </main>
    </>
  );
}
