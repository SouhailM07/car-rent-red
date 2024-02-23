import "./mycontainer.css";
// components
import { Navbar, Home, SelectTime, About } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main className="h-[200vh]">
        <Home />
        <SelectTime />
        <About />
      </main>
    </>
  );
}
