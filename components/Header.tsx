import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex items-center sticky top-0">
      <motion.div
        className="flex mx-auto p-5 cursor-pointer"
        initial={{
          y: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <BsFacebook className="mx-3" />
        <BsTwitter className="mx-3" />
        <BsInstagram className="mx-3" />
        <BsYoutube className="mx-3" />
      </motion.div>
    </header>
  );
}

export default Header;
