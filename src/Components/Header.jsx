import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useActiveSection from "../assets/useActiveSection.jsx";

function Header({ anchorClick }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll:", latest);
    if (latest > 100 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 100) {
      setScrolled(false);
    }
  });

  const defaultClasses =
    "fixed top-0 z-50 w-full text-white transition-all duration-200";
  let navBarClasses = scrolled
    ? `${defaultClasses} bg-black/75`
    : `${defaultClasses} bg-blue-500`;

  const sections = ["intro", "about", "projects", "contact"];
  const sectionsInNav = ["about", "projects", "contact"];

  const sectionInView = useActiveSection(sections);

  const defaultAnchorClasses = "block px-3 py-2 text-lg";

  return (
    <header>
      <nav className={navBarClasses}>
        <div className="container mx-auto items-center gap-6 px-4 md:flex">
          <div className="flex w-full items-center justify-between md:w-auto">
            <motion.a
              href="#intro"
              onClick={(e) => anchorClick(e, "intro")}
              className="font-orbitron flex-1 px-2 py-4 text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: sectionInView === "intro" ? 1 : 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              TS
            </motion.a>
          </div>
          <div className="navigation-menu hidden flex-1 flex-col items-center justify-end pb-3 md:flex md:flex-row md:space-x-1 md:pb-0">
            {sectionsInNav.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={(e) => anchorClick(e, section)}
                className={defaultAnchorClasses}
                animate={{ opacity: sectionInView === section ? 1 : 0.7 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
