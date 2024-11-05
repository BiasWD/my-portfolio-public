import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function Skill({ logo, title, inView, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: { duration: 1 },
      }}
    >
      <div className="animate-tilt absolute -inset-0.5 mx-5 my-5 rounded-lg bg-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative mx-5 my-5 flex h-28 w-28 flex-col items-center justify-center rounded-lg bg-black px-10 py-10 text-center text-xl text-gray-400 transition duration-200 group-hover:text-white md:h-40 md:w-40">
        <div>
        <img
          src={logo}
          className="h-12 md:h-20 w-full pt-4 opacity-75 transition duration-200 group-hover:opacity-100 object-contain"
        />
        <span className="font-orbitron pt-1 b-auto text-xs leading-tight lg:text-sm">
          {title}
        </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
