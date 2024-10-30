import { Link } from "react-router-dom";
import Back from "../images/back.svg";
import { HashLink } from "react-router-hash-link";

function Credits() {
  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full bg-blue-500 text-white transition-all duration-200">
          <div className="container mx-auto items-center gap-6 px-4 md:flex">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link
                to="/"
                className="font-orbitron flex-1 px-2 py-4 text-3xl font-bold opacity-75 transition-all ease-in-out hover:opacity-100"
              >
                TS
              </Link>
            </div>
            <div className="navigation-menu hidden flex-1 flex-col items-center justify-end pb-3 md:flex md:flex-row md:space-x-1 md:pb-0"></div>
          </div>
        </nav>
      </header>

      <section
        id="contact"
        className="relative flex min-h-screen flex-col overflow-hidden border-t-[1px] border-white border-opacity-30 bg-black pt-20"
      >
        <div className="mx-auto flex max-w-7xl flex-1 flex-col overflow-hidden pt-16 text-white md:pt-40">
          <h2 className="mb-10 w-fit px-4 text-left text-4xl font-semibold text-white md:px-12 md:text-6xl">
            Credits
          </h2>
          <div>
            <p className="px-4 text-left text-lg font-bold leading-relaxed md:px-12 md:text-xl">
              Icons used in About Me section obtained from&nbsp;
              <a
                href="https://www.flaticon.com/"
                className="text-blue-500 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaticon.com
              </a>
              ...
            </p>
          </div>
          <div>
            <ul className="my-4 px-4 text-left text-lg leading-relaxed text-blue-500 md:px-12 md:text-xl">
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/html-5"
                  title="html 5 icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Html 5 icons created by Pixel perfect - Flaticon
                </a>
              </li>
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/css"
                  title="css icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Css icons created by Pixel perfect - Flaticon
                </a>
              </li>
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/javascript"
                  title="javascript icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Javascript icons created by Freepik - Flaticon
                </a>
              </li>
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/graphic-design"
                  title="graphic design icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Graphic design icons created by Freepik - Flaticon
                </a>
              </li>
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/figma"
                  title="figma icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma icons created by Freepik - Flaticon
                </a>
              </li>
              <li className="py-4 hover:text-blue-200">
                <a
                  href="https://www.flaticon.com/free-icons/meta"
                  title="meta icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta icons created by Freepik - Flaticon
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <HashLink
              to="/#contact"
              className="mx-auto my-10 flex max-w-12 cursor-pointer text-blue-500 opacity-75 transition-all hover:opacity-100"
            >
              <img src={Back} alt="Back" className="flex" />
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
}
export default Credits;
