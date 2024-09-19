import React from "react";
import { GoArrowRight } from "react-icons/go";

function Button({ ctn = "View Case Study" }) {
  return (
    <div
      className="group overflow-hidden flex items-center relative
       after:w-[100%] after:h-[0.1vw] after:absolute after:bg-white after:bottom-0 after:left-[0] hover:after:left-[100%] after:duration-500 after:ease-in-out
       before:w-[100%] before:h-[0.1vw] before:absolute before:bg-white before:bottom-0 before:left-[-100%] hover:before:left-[0] before:duration-500 before:ease-in
       cursor-pointer justify-between py-3"
    >
      <div className="w-fit h-[2vw] overflow-hidden">
        <h3 className="text-[1.2vw] font-light ease-in-out duration-300  group-hover:translate-y-[-100%]">
          {ctn}
        </h3>
        <h3 className="text-[1.2vw] font-light ease-in-out duration-300  group-hover:translate-y-[-100%]">
          {ctn}
        </h3>
      </div>
      <div className="w-[1.5vw] overflow-hidden flex">
        <GoArrowRight className="text-[1.5vw] ease-in-out duration-300 flex-shrink-0 translate-x-[-100%] group-hover:translate-x-[0%]" />
        <GoArrowRight className="text-[1.5vw] ease-in-out duration-300 flex-shrink-0 translate-x-[-100%] group-hover:translate-x-[0%]" />
      </div>
    </div>
  );
}

export default Button;
