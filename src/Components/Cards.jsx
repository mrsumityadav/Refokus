import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full h-full z-20 relative px-10 flex flex-col gap-10">
      <div className="w-full h-full flex gap-1">
        <Card
          width={"basis-[30%]"}
          para={true}
          start={false}
          title="BLOG"
          heading="News & Insights"
          bg={"#46289A"}
        />
        <Card
          width={"basis-[70%]"}
          para={false}
          start={true}
          title="GET IN TOUCH"
          heading={`Let’s get to it. together.`}
          bg={"#7542FF"}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-8">
          {["Privacy Policy", "Cookie Policy", "Terms", "Webflow Agency"].map(
            (elem, index) => (
              <a
                href="#" key={index}
                className="text-sm hover:translate-x-[0.2vw] hover:text-gray-400 duration-200"
              >
                {elem}
              </a>
            )
          )}
        </div>
        <img
          className="w-[16.25vw]"
          src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cards;
