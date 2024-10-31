import Header from "./Components/Header.jsx";
import Intro from "./Pages/Intro.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header anchorClick={handleAnchorClick} />
      <Intro anchorClick={handleAnchorClick} />
      <AboutMe />
      <Projects />
      <Contact anchorClick={handleAnchorClick} />
    </>
  );
}

export default App;
