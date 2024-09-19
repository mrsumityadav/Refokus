import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var product = [
    {
      title: "Cula",
      smone: "Web Design",
      smtwo: "Webflow Development",
      smthree: "Creative Development",
      smfour: "3D Animations",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      title: "BCG Platinion",
      smone: "Strategy",
      smtwo: "Web Design",
      smthree: "Webflow Development",
      smfour: "Creative Development",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
    },
    {
      title: "Arqitel",
      smone: "Web Design",
      smtwo: "3D Animations",
      smthree: "Webflow Development",
      smfour: "Creative Development",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
    },
    {
      title: "Sevdesk",
      smone: "Strategy",
      smtwo: "Webflow Development",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
    },
    {
      title: "Layout Land",
      smone: "Strategy",
      smtwo: "Web Design",
      smthree: "Webflow Development",
      smfour: "Creative Development",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow",
    },
    {
      title: "Singularity",
      smone: "Web Design",
      smtwo: "Webflow Development",
      smthree: "Creative Development",
      smfour: "3D Animations",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
    },
    {
      title: "Brightwave",
      smone: "Branding",
      smtwo: "Creative Development",
      smthree: "Strategy",
      smfour: "Web Design",
      smfive: "Webflow Development",
      description:
        "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
    },
    {
      title: "Botify",
      smone: "Strategy",
      smtwo: "Web Design",
      smthree: "Webflow Development",
      description:
        "A new website for a leading SEO solution for enterprise brands with a deep Wordpress to Webflow migration.",
    },
  ];

  const [pos, setPos] = useState(0);

  const move = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="w-full mt-40 relative">
      {product.map((item, index) => (
        <Product val={item} key={index} index={index} move={move} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `vw` }}
          className="w-[25vw] h-[20vw] overflow-hidden absolute left-[40%] -translate-x-1/2"
        >
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/users/2621335/screenshots/9184435/ranex_logo_branding_4x.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/userupload/5360345/file/original-b7e769714911266317cc46f27adc6a27.jpg?crop=0x0-2800x2100&resize=1600x1200"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/originals/65/6c/89/656c894cfe8e4f09901ebd67fd285184.png"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/users/5172731/screenshots/16643375/media/7cd30c1314221ac972dc9ff2530a2812.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/users/401821/screenshots/16990606/media/1168aac29a30c3b7f9fa477670906e91.png"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://i.ytimg.com/vi/7Ca1dGDWLGY/maxresdefault.jpg"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://dr.savee-cdn.com/things/6/2/4f542226ce852c3dc08cd5.webp"
              alt=""
            />
          </motion.div>
          <motion.div animate={{ y: -pos + `vw` }} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://en.idei.club/uploads/posts/2023-06/1686119557_en-idei-club-p-uber-office-dizain-instagram-27.png"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
