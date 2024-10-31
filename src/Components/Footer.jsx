import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer({ anchorClick }) {
  return (
    <>
      <div className="flex h-20 flex-1 items-center justify-center text-white">
        <a
          onClick={(e) => anchorClick(e, "intro")}
          className="group mx-auto flex w-fit cursor-pointer flex-col items-center text-white transition-all duration-200 hover:text-blue-500"
        >
          <motion.svg
            className="transition duration-200"
            whileHover={{ y: -10 }}
            initial={{ y: "200%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <pathg
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </motion.svg>
          <p className="text-blue-500 opacity-0 transition-all duration-200 group-hover:opacity-100">
            Back to Top
          </p>
        </a>
      </div>
      <div className="flex h-20 flex-col items-center justify-center overflow-hidden text-sm text-white md:flex-row md:bg-blue-500 md:text-base">
        <div className="flex-1 text-center">
          <p>
            <p>© 2024 Tobias Sheets. All rights reserved.</p>
          </p>
        </div>

        <div className="flex-1 text-center text-white">
          <p>
            Icons From Flaticon by&nbsp;
            <Link to="/Credits" className="text-blue-500 md:text-black">
              Various Authors
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
