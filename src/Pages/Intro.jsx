import Portrait from "../images/portfolioportrait.png";
import Typewriter from "typewriter-effect";

function Intro({ anchorClick }) {
  return (
    <section
      id="intro"
      className="min-h-lvh place-content-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      <div className="my-40 flex flex-col items-center">
        <div className="text-center text-2xl font-normal leading-normal text-white sm:text-4xl md:text-5xl">
          Hi, I'm <span className="text-blue-500">Toby</span>.
          <div className="flex flex-row">
            {" "}
            I'm a&nbsp;
            <Typewriter
              options={{
                strings: ["Front-end Developer.", " Web Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <img
          className="mx-12 my-12 flex max-w-52 rounded-full bg-blue-500 md:max-w-96"
          src={Portrait}
          alt="Toby"
        />
        <button
          href="#about"
          onClick={(e) => anchorClick(e, "about")}
          class="rounded-md border-2 border-white px-10 py-2 text-white transition-all duration-200 hover:border-blue-500 hover:text-blue-500 active:text-opacity-50 active:transition-none sm:text-xl"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Intro;
