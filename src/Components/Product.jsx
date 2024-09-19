import React from "react";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

function Product({ val, move, index }) {
  return (
    <div
      onMouseEnter={() => move(index)}
      onMouseLeave={() => move(0)}
      className="w-full px-10 py-7 h-[20vw] flex border border-x-0 border-[#727A83] justify-between"
    >
      <div className="heading flex flex-col justify-between py-6">
        <h1 className="text-3xl font-medium">{val.title}</h1>
        <div>
          <h3 className="text-xs font-medium uppercase">{val.smone}</h3>
          <h3 className="text-xs font-medium uppercase">{val.smtwo}</h3>
          <h3 className="text-xs font-medium uppercase">{val.smthree}</h3>
          <h3 className="text-xs font-medium uppercase">{val.smfour}</h3>
          <h3 className="text-xs font-medium uppercase">{val.smfive}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-12 py-6 w-1/3 text-xl">
        <p className="text-lg leading-6">{val.description}</p>
        <Button />
      </div>
    </div>
  );
}

export default Product;
