"use client";

import Link from "next/link";
import Image from "next/image";
import { Header, Intro } from "components/minimal";
import Projects from "components/minimal/Projects";
import TechStack from "components/minimal/section/TechStack";
import Footer from "components/minimal/Footer";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ blobRef }) => {
  const style = {
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "100px",
    borderRadius: "50% 22% 40% 80%",
    filter: "blur(20px)",
    backgroundColor: "rgb(255, 67, 75)",
    background: "linear-gradient(#43d9ad, #4d5bce)",
    opacity: 0.4,
  };

  const variants = {
    default: {
      // scale: [1, 2, 2, 1, 1],
      // rotate: [0, 0, 270, 270, 0],
      // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    },
  };

  return (
    <motion.div
      ref={blobRef}
      className="fixed top-0 left-0 -z-20 transition-all ease-linear"
      style={style}
      variants={variants}
      animate="default"
      transition={{
        left: {
          duration: 0.3,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 80,
        },
        top: {
          duration: 0.3,
          ease: "linear",
          repeat: 0,
          type: "spring",
          stiffness: 80,
        },
        default: {
          duration: 2.5,
          repeat: Infinity,
        },
      }}
    />
  );
};

export default function Minimal() {
  const blobRef = useRef(null);

  const updateMousePosition = (e) => {
    blobRef.current.style.left = e.clientX + "px";
    blobRef.current.style.top = e.clientY + "px";
  };

  return (
    <main id="minimal" className="bg-neutral-50">
      <Header />
      <div
        onMouseMove={updateMousePosition}
        className="px-8 paper-overlay relative w-full min:px-10 mb-[530px] z-10"
      >
        {/* <div className="paper-overlay" /> */}
        <CustomCursor blobRef={blobRef} />
        <Intro />
        {/* <div className="border-t text-right mt-6 border-black">
            <p className="pt-6">Portfolio ©2022</p>
          </div> */}
        <Projects />
        <TechStack />
        <div className="ml-auto max-w-sm my-20">
          <p className="text-lg mb-8">
            I enjoy writing clean, efficient code and build apps that live on
            the internet
          </p>
          <Link href="/minimal/about-me">
            <button className="relative group h-40 w-40 border rounded-full border-black">
              <div className="p-10 -rotate-[120deg]">
                <Image
                  className="absolute"
                  src="/minimal/arrow.svg"
                  alt="arrow"
                  height={60}
                  width={30}
                />
              </div>
              <Image
                className="absolute transition-opacity ease-linear duration-300 animate-spin-slow opacity-0 group-hover:opacity-100"
                src="/minimal/about-me.svg"
                alt="about-me"
                fill
              />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
