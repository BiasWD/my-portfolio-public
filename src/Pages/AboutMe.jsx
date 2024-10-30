import Hat from "../images/education.png";
import Meta from "../images/meta.png";
import TechStack from "../Components/TechStack";
import { motion, useInView } from "framer-motion";

function AboutMe() {

  return (
    <section id="about" className="border-t-2 border-blue-500 bg-black overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="my-20 md:my-40">
          <h2 className="w-full px-6 text-4xl font-semibold text-white md:px-12 md:text-6xl">
            About Me
          </h2>

          <div className="mt-10">
            <p className="px-6 text-lg leading-relaxed text-white md:px-12 md:text-xl">
              {" "}
              After spending a few years completing general courses and
              exploring different career paths in college, I rekindled my
              interest in graphic design and technology as a whole, which
              ultimately led me to discover my passion for web development.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="mt-10">
              <h3 className="font-orbitron mx-7 text-xl font-semibold leading-relaxed text-blue-500 md:mx-12 md:text-2xl">
                Education...
              </h3>
              <p className="px-6 text-lg leading-relaxed text-white md:px-12 md:text-xl">
                {" "}
                I hold an <i>Associate of Arts</i> degree in Information and
                Communications Technology, specializing in web design and
                development. Through that degree, I gained a solid understanding
                of HTML, CSS, the Adobe Suite, and many web and graphic design
                concepts. Additionally, I gained experience working with
                Database Systems, Java, Unix, PHP, and more. I have also
                completed the Meta Front-End Developer Professional Certificate,
                where I learned React and honed my skills in building dynamic
                and user-friendly web applications.
              </p>
            </div>
            <motion.div
              className="mx-12 mt-10 flex items-center justify-center text-center"
              initial={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex w-96 flex-row items-center divide-x divide-gray-400 rounded-lg bg-white p-4">
                <div className="px-4">
                  <img
                    src={Hat}
                    alt="Graduate Hat"
                    className="mx-auto flex max-w-full"
                  />
                  <span className="py-4 font-bold text-blue-500">
                    Information and Communications Technolgy
                  </span>
                </div>

                <div className="px-4">
                  <img
                    src={Meta}
                    alt="Meta Logo"
                    className="mx-auto flex max-w-full"
                  />
                  <span className="py-4 font-bold text-blue-500">
                    Front-End Developer Meta Certification
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <h3 className="font-orbitron text-whitetext-2xl relative z-40 mx-auto -mb-16 mt-20 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-12 py-4 text-center font-semibold md:text-4xl">
            Technolgy I work best with...
          </h3>
            <TechStack />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
