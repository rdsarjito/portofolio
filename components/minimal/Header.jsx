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
      <div className="fixed m-10 hidden font-light opacity-90 min:block">
        <a href="#" className={navLink + " pt-0 " + navActive}>
          <span className="relative overflow-hidden">
            Keshav
            <span className="h-0.5 w-3 absolute -left-5 top-2 bg-neutral-600"></span>
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
        className="flex fixed top-8 right-9 z-50 space-x-2 min:hidden"
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
            className="flex w-screen text-white fixed bg-black z-50 pl-8 overflow-hidden border-l border-min-b"
            initial={{ height: 0 }}
            animate={{ height: "100%", transition: { duration: 0.6 } }}
            exit={{
              height: 0,
              transition: { duration: 0.4, delay: 0.5 },
            }}
          >
            <motion.ul
              className="flex font-times flex-col flex-auto border-l border-min-b"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {navLinks.map(({ title, to }) => (
                <li key={title} className="border-y border-min-b">
                  <a className="flex items-center overflow-clip pl-3 my-[7.5vh] text-[10vh] leading-none">
                    <motion.span variants={itemVariants} href={to}>
                      {title}
                    </motion.span>
                  </a>
                </li>
              ))}
            </motion.ul>
            <div className="h-full w-32 border-l font-sans border-min-b ">
              <button
                className="w-full py-8 border-b border-min-b"
                onClick={() => toggle(false)}
              >
                X Close
              </button>
              <div className="flex flex-col h-full pb-[20vh] gap-y-10 justify-center items-center">
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
