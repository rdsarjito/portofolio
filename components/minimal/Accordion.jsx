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
      className="w-full text-3xl px-3 py-10 border-b cursor-pointer border-black"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className=" flex ">
        <p className="font-times w-24">02/</p>
        <div className="flex justify-between w-full">
          <p className="text-gray-800">Design</p>
          <p className="relative flex items-center">
            <span className="w-4 h-0 border border-black"></span>
            <motion.span
              variants={variants}
              transition={{ duration: 0.4 }}
              animate={isOpen ? "rotate" : "stop"}
              className={
                " w-4 h-0 border border-black absolute right-0 rotate-90"
              }
            ></motion.span>
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-base overflow-hidden ml-20"
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
