import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import githubLogo from "../images/github.png";

function ProjectRight({ title, image, desc, liveLink, ghlink }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const cardVariants = {};
  return (
    <motion.div
      className="my-10 ml-auto max-w-3xl select-none flex-col px-5"
      whileHover="hoverProject"
      tabIndex={0}
      onBlur={handleBlur}
      layout
    >
      <motion.div
        className="relative z-10 mx-auto flex max-w-fit cursor-pointer rounded-lg"
        animate={{ x: isOpen ? 0 : isHovered ? -30 : 0 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setIsHovered(false); toggleOpen(); }}
        layout
      >
        <motion.img
          src={image}
          alt="Project Image"
          className="rounded-lg opacity-50"
          variants={{
            hoverProject: { opacity: 1 },
          }}
          animate={
            isOpen
              ? {
                  opacity: 1,
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }
              : { opacity: 1 }
          }
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h3
            className="font-orbitron text-2xl font-semibold text-white md:text-4xl"
            style={{textShadow: "0px 4px 10px rgba(0, 0, 0, 1)"}}
            variants={{
              hoverProject: {
                scale: 1.1,
                textShadow: "0px 4px 15px rgba(0, 0, 0, 1)",
              },
            }}
            animate={
              isOpen
                ? { scale: 1.1, textShadow: "0px 4px 15px rgba(0, 0, 0, 1)" }
                : { undefined }
            }
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="rounded-b-lg bg-black bg-opacity-75 px-10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            layout
          >
            <div className="flex items-end justify-center pt-5">
              {ghlink && (
                <motion.a
                  className="mx-5 h-12 w-12 cursor-pointer"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      mass: 0.5,
                      delay: 0.2,
                    },
                  }}
                  whileHover={{ opacity: 0.75 }}
                  href={ghlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubLogo}
                    alt="Github logo"
                    className="rounded-full bg-white border-2"
                  />
                </motion.a>
              )}
              {liveLink && (
                <motion.a
                  className="font-orbitron mx-5 flex h-12 w-12 border-2 cursor-pointer items-center justify-center rounded-full bg-white text-sm font-bold text-black"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      mass: 0.5,
                      delay: 0.1,
                    },
                  }}
                  whileHover={{ opacity: 0.75 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </motion.a>
              )}
            </div>

            {desc}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectRight;
