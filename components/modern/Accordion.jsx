"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { techSvg } from "../../utils/constants";
// import Image from "next/image";

const variants = {
  rotate: { rotate: [-90, 0] },
  stop: { rotate: [0, -90] },
};

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full cursor-pointer border-b border-black px-3 py-10 text-3xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className=" flex ">
        <p className="w-24 font-times">02/</p>
        <div className="flex w-full justify-between">
          <p className="text-gray-800">Design</p>
          <p className="relative flex items-center">
            <span className="h-0 w-4 border border-black"></span>
            <motion.span
              variants={variants}
              transition={{ duration: 0.4 }}
              animate={isOpen ? "rotate" : "stop"}
              className={
                " absolute right-0 h-0 w-4 rotate-90 border border-black"
              }
            ></motion.span>
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ml-20 overflow-hidden text-base"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ height: 0, y: 0 }}
          >
            <p className="mt-5 max-w-md">
              A strong foundation is essential for any project. I deliver
              beautiful and intuitive designs that align with your brands
              essence. I believe usability and aesthetics go hand-in-hand to
              make better products.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
