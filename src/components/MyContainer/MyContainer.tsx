import "./mycontainer.css";
// components
import { Navbar, Home } from "@/components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}
