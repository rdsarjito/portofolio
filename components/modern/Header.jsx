import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useState } from "react";
import { socials } from "utils/constants";

const navLink = "group block transition duration-500 pt-3 ",
  navHover =
    "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neutral-600 ",
  navActive = " cursor-default";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "About me", to: "/" },
  { title: "Contact me", to: "/" },
  { title: "Theme", to: "/" },
];
const sideVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const itemVariants = {
  closed: { opacity: 0, y: -100, transition: { duration: 0.4 } },
  open: { opacity: 1, y: 0, transition: { ease: "linear" } },
};
const Header = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <header className="">
      <div className="min:block fixed m-10 hidden font-light opacity-90">
        <a href="#" className={navLink + " pt-0 " + navActive}>
          <span className="relative overflow-hidden">
            Keshav
            <span className="absolute -left-5 top-2 h-0.5 w-3 bg-neutral-600"></span>
          </span>
        </a>
        <a href="#" className={navLink}>
          About me
          <span className={navHover}></span>
        </a>
        <a href="#" className={navLink}>
          Contact me
          <span className={"navHover"}></span>
        </a>
        <a href="#" className={navLink}>
          Theme
          <span className={"navHover"}></span>
        </a>
      </div>
      <button
        className="min:hidden fixed right-9 top-8 z-50 flex space-x-2"
        onClick={() => toggle(true)}
      >
        <svg
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg"
          height={20}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            stroke="none"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 flex w-screen overflow-hidden border-l border-min-b bg-black pl-8 text-white"
            initial={{ height: 0 }}
            animate={{ height: "100%", transition: { duration: 0.6 } }}
            exit={{
              height: 0,
              transition: { duration: 0.4, delay: 0.5 },
            }}
          >
            <motion.ul
              className="flex flex-auto flex-col border-l border-min-b font-times"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {navLinks.map(({ title, to }) => (
                <li key={title} className="border-y border-min-b">
                  <a className="my-[7.5vh] flex items-center overflow-clip pl-3 text-[10vh] leading-none">
                    <motion.span variants={itemVariants} href={to}>
                      {title}
                    </motion.span>
                  </a>
                </li>
              ))}
            </motion.ul>
            <div className="h-full w-32 border-l border-min-b font-sans ">
              <button
                className="w-full border-b border-min-b py-8"
                onClick={() => toggle(false)}
              >
                X Close
              </button>
              <div className="flex h-full flex-col items-center justify-center gap-y-10 pb-[20vh]">
                {socials.map((el) => {
                  return (
                    <a className="social-ball" key={el.title} href="">
                      {el.img}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
