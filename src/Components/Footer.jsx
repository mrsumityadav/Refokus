import React from "react";
import Cards from "./Cards";

function Footer() {
  return (
    <div className="w-full py-[2vw] fixed bottom-0 h-[39vw] flex items-end justify-center bg-slate-600 text-white">
      <Cards />
      <div className="video w-full z-10 h-full absolute">
        <video
          className="w-full h-[130vh] object-cover"
          autoPlay
          loop
          muted
          src="https://files.refokus.com/storage/v1/object/public/Website%20Assets/Glass%20background.webm"
        ></video>
      </div>
    </div>
  );
}

export default Footer;
