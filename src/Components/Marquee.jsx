import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  var img = [
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8ce1_63aedb7c8792abd626a31e65_doxel-ai.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d304ad489e305be8dad7_sevdesk-white.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b7042241_65b2ca2282d921d99755eaf6_Logo%2520White%25201.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg",
    "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",
    ,
  ];
  return (
    <>
    <div className="w-full flex relative overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 pr-10"
      >
        {img.map((item, index) => (
          <img src={item} key={index} className="w-[7vw] flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 pr-10"
      >
        {img.map((item, index) => (
          <img src={item} key={index} className="w-[7vw] flex-shrink-0" />
        ))}
      </motion.div>
    </div>
    </>
  );
}

export default Marquee;