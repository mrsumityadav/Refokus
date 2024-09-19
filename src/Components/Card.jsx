import React from "react";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";
import { motion } from "framer-motion";

function Card({ width, bg, para, start, title, heading }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "white" }}
      style={{ backgroundColor: bg }}
      className={`${width} bg-${bg} hover:text-black p-6 rounded-md h-[100%] flex flex-col justify-between`}
    >
      <div>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xs font-semibold">{title}</h2>
          <GoArrowRight />
        </div>
        <h1 className="mt-7 font-semibold text-3xl">{heading}</h1>
      </div>
      <div>
        {para === true && (
          <p className="w-[14vw] text-sm">
            News and Insights on Web Design, Webflow Development, and Creative
            Development.{" "}
          </p>
        )}
        {start && (
          <div className="w-full flex justify-between items-end">
            <h2 className="text-[5.5vw] tracking-tight font-medium">
              Start a Project
            </h2>
            <div className="w-[11.25vw]">
              <Button ctn="Contact us" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
