"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
  const router = useRouter();
  return (
    <main className="h-screen exp-transition-model bg-orange-100">
      <AnimatePresence initial={false} mode="wait">
        <header className="text-lg p-6">
          <span>Experiments</span>
        </header>
        <div className="px-[10vw]">
          <section className="max-h-[620px] max-w-[524px] overflow-hidden mx-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={transition}
              onClick={() => router.push("/")}
            >
              <Image
                width={524}
                height={620}
                src="/transition/yasmeen.webp"
                alt="background"
              />
            </motion.div>
          </section>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className="flex justify-between max-w-[524px] mx-auto  pt-3"
          >
            <p className="title">Yasmeen Tariq</p>
            <p className="location">
              <span>28.538336</span>
              <span>-81.379234</span>
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
