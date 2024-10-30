import Skill from "./Skill.jsx";
import Html from "../images/html-5.png";
import CSS from "../images/css-3.png";
import JS from "../images/js.png";
import ReactLogo from "../images/react.svg";
import TailWindIcon from "../images/tailwind-svgrepo-com.svg";
import PS from "../images/photoshop.png";
import AI from "../images/illustrator.png";
import Figma from "../images/figma.png";

function TechStack() {
  return (
    <div className="mx-auto flex max-w-4xl select-none flex-row flex-wrap justify-center py-10">
      <Skill logo={Html} title="HTML" delay="0.1" />
      <Skill logo={CSS} title="CSS" delay="0.2" />
      <Skill logo={JS} title="JavaScript" delay="0.3" />
      <Skill logo={ReactLogo} title="React" delay="0.4" />
      <Skill logo={TailWindIcon} title="Tailwind" delay="0.5" />
      <Skill logo={PS} title="Photoshop" delay="0.6" />
      <Skill logo={AI} title="Illustrator" delay="0.7" />
      <Skill logo={Figma} title="Figma" delay="0.8" />
    </div>
  );
}

export default TechStack;
