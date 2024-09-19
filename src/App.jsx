import React from "react";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Marquee from "./Components/Marquee";
import Products from "./Components/Products";
import LocomotiveScroll from "locomotive-scroll";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full z-20 relative pt-[0.1vw] bg-[#0F1215] text-white pb-52">
        <Navbar />
        <Portfolio />
        <Marquee />
        <Products />
      </div>
      <div className="w-full h-[39vw] "></div>
      <Footer />
    </>
  );
}
