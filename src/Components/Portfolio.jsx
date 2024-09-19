import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Portfolio() {
  const [images, setImages] = useState([
    {
      url: "https://avatars.mds.yandex.net/i?id=0fc603a79221448e0334c1f2e737da1c-4245511-images-thumbs&ref=rim&n=33&w=334&h=250",
      top: "20%",
      right: "10%",
      isActive: false,
    },
    {
      url: "https://cdn.dribbble.com/users/2621335/screenshots/9184435/ranex_logo_branding_4x.jpg",
      top: "25%",
      right: "14%",
      isActive: false,
    },
    {
      url: "https://cdn.dribbble.com/userupload/5360345/file/original-b7e769714911266317cc46f27adc6a27.jpg?crop=0x0-2800x2100&resize=1600x1200",
      top: "30%",
      right: "6%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/originals/65/6c/89/656c894cfe8e4f09901ebd67fd285184.png",
      top: "36%",
      right: "12%",
      isActive: false,
    },
    {
      url: "https://cdn.dribbble.com/users/5172731/screenshots/16643375/media/7cd30c1314221ac972dc9ff2530a2812.jpg",
      top: "40%",
      right: "5%",
      isActive: false,
    },
    {
      url: "https://avatars.mds.yandex.net/i?id=f9b7c8867fc8b2bab8147f823c212ce4956ec699-6254930-images-thumbs&ref=rim&n=33&w=334&h=250",
      top: "45%",
      right: "10%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imgShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imgShow([]);
        break;
      case 1:
        imgShow([0]);
        break;
      case 3:
        imgShow([0, 1]);
        break;
      case 5:
        imgShow([0, 1, 2]);
        break;
      case 6:
        imgShow([0, 1, 2, 3]);
        break;
      case 7:
        imgShow([0, 1, 2, 3, 4]);
        break;
      case 9:
        imgShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="py-[10vw] mt-[5vw] px-10 relative">
      <div className="flex flex-col gap-6">
        <h1 className="text-[9vw] font-medium leading-none">Portfolio</h1>
        <h2 className="font-regular text-[2.3vw] leading-none">
          Web Design, Webflow, Creative Development, and beyond
        </h2>
        <div className="w-full border-[.1vw] mt-[1vw] border-zinc-400"></div>
        <p className="text-[1.2vw] mt-1 w-[40vw]">
          Refokus is a top Webflow Agency combining high-end design with Webflow
          Development expertise.
        </p>
      </div>
      <div className="absolute w-full h-full pointer-events-none top-0 left-0">
        {images.map(
          (img, index) =>
            img.isActive && (
              <img
                style={{ top: img.top, right: img.right }}
                key={index}
                src={img.url}
                className={`w-[15vw] h-[15vw] object-cover rounded-lg absolute transition-transform ease-in-out duration-300`}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Portfolio;
