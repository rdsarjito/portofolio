"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project",
    summary: "Redesign of apple-store",
    src: "/background.webp",
  },
];

// const textParentVariants = {
//   leave: {
//     transition: {
//       staggerChildren: 0.02,
//       staggerDirection: -1,
//       type: "tween",
//       ease: "easeIn",
//     },
//   },
//   enter: {
//     transition: {
//       staggerChildren: 0.02,
//       type: "tween",
//       ease: "easeOut",
//     },
//   },
// };
// const titleVariants = {
//   normal: {
//     leave: {
//       y: 0,
//       rotate: 0,
//       opacity: 1,
//       transition: {
//         y: { stiffness: 1000 },
//       },
//     },
//     enter: {
//       y: -50,
//       rotate: -25,
//       opacity: 0,
//       transition: {
//         y: { stiffness: 1000, velocity: 1000 },
//       },
//     },
//   },
//   italic: {
//     leave: {
//       y: 50,
//       rotate: 25,
//       opacity: 15,
//       transition: {
//         y: { stiffness: 1000 },
//       },
//     },
//     enter: {
//       y: 0,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         y: { stiffness: 1000 },
//       },
//     },
//   },
// };

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = event => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");

//     if(iteration >= event.target.dataset.value.length){
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// }

const Projects = () => {
  return (
    <motion.section
      initial="leave"
      whileHover="enter"
      animate="leave"
      className="mt-24"
    >
      <span className="sec-title">[ Projects ]</span>
      {projects.map(({ title, summary, src }, index) => (
        <div className="grid grid-cols-5 group" key={index}>
          <div className="col-span-2 relative self-end p-4 pl-3 border-b">
            <h2 className="text-5xl font-times overflow-hidden relative">
              <motion.h3
                className="tracking-tighter"
                // variants={textParentVariants}
              >
                {title.split("").map((letter) => (
                  <motion.span
                    key={index + letter}
                    className="inline-block leading-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.5 }}
                    // variants={titleVariants.normal}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h3>
              {/* <motion.span
                // variants={textParentVariants}
                className="absolute left-0 italic tracking-tighter"
              >
                {title.split("").map((el) => (
                  <motion.span
                    key={index + el + 2}
                    className="inline-block leading-3"
                    // variants={titleVariants.italic}
                  >
                    {el}
                  </motion.span>
                ))}
              </motion.span> */}
            </h2>
            <p>{summary}</p>
          </div>
          <div className="col-span-3 relative grayscale group-hover:grayscale-0">
            <Image src={src} alt="background" fill />
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Projects;
