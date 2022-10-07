import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Profile({}: Props) {
  return (
    <motion.div
      className="flex flex-col items-center text-5xl mt-9 mb-6 md:mt-40 md:mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="/boredape1.jpg" className="rounded-full h-32 w-32" />
      <p className="text-lg md:text-5xl p-5">Dom Chan</p>
    </motion.div>
  );
}

export default Profile;
