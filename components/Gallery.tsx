import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type Props = {};

function Gallery({}: Props) {
  const artworks = [
    "/joker.png",
    "/kobe.png",
    "/tony.png",
    "/dog.png",
    "/sketch.png",
  ];
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex flex-row flex-wrap max-w-3xl justify-center cursor:pointer gap-3">
          <img
            src="/joker.png"
            className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce"
          ></img>
          <img
            src="/kobe.png"
            className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce"
          ></img>
          <img
            src="/tony.png"
            className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce"
          ></img>
          <img
            src="/dog.png"
            className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce"
          ></img>
          <img
            src="/sketch.png"
            className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce"
          ></img>
        </div>
      </div>

      <div className="sm:hidden flex items-center">
        <GrFormPrevious
          className="bg-gray-600 rounded-full mr-2"
          onClick={() => setCount(count - 1)}
        />
        <motion.img
          key={count}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
          src={`${artworks[Math.abs(count % 5)]}`}
          className="rounded h-48 w-48"
        ></motion.img>
        <GrFormNext
          className="bg-gray-600 rounded-full ml-2"
          onClick={() => setCount(count + 1)}
        />
      </div>
    </>
  );
}

export default Gallery;
