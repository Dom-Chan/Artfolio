import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";

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
  const [openModal, setOpenModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  return (
    <>
      <div className="hidden sm:block justify-center items-center">
        <div className="flex flex-row flex-wrap max-w-3xl justify-center cursor:pointer gap-3">
          {artworks.map((file, delay = 2) => {
            delay++;
            return (
              <motion.img
                key={file}
                initial={{ scale: 0.25, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: delay }}
                src={`${file}`}
                className="rounded h-24 w-24 lg:h-48 lg:w-48 lg:hover:animate-bounce cursor-pointer"
                onClick={() => {
                  setOpenModal(true), setModalImg(file);
                }}
              ></motion.img>
            );
          })}
        </div>
      </div>

      {openModal && (
        <>
          
          <div className="h-fit w-fit absolute">
          <div className="cursor-pointer" onClick={() => setOpenModal(false)}> <FaRegWindowClose/> </div>
            <img className="rounded" src={modalImg}></img>
          </div>
        </>
      )}

      <div className="sm:hidden flex items-center">
        <GrFormPrevious
          className="bg-gray-600 rounded-full mr-2"
          onClick={() => setCount(count - 1)}
        />
        <motion.img
          key={count}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
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
