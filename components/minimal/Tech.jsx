import Image from "next/image";
import React from "react";
import { techSvg } from "../../utils/constants";
// import { AnimatePresence, motion } from "framer-motion";

const Tech = () => {
  return (
    <section className="w-full text-white py-10 px-10 bg-neutral-800">
      <div className="mx-auto max-w-[1010px] rounded-2xl border-dashed ">
        <h1 className="text-3xl font-bold mb-2">
          Tech Stack 
          <span className="text-2xl align-top ml-2">♟</span>
        </h1>
        <p className="text-lg align-baseline">
          A list of few technologies i love working with
        </p>
        <div className="mt-5 flex flex-wrap space-x-5">
          {techSvg.map((tech) => {
            return <a
              key={tech.name}
              href=""
              target="_blank"
              className={`relative w-16 rounded-full p-3 group hover:text-[${tech.color}]`}
            >
              <span className="tooltip">{tech.name}</span>
              <Image src={tech.path} alt="" />
            </a>
          }
          )}
        </div>
      </div>
    </section>
  );
};

export default Tech;
