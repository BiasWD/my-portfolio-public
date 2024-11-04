import ProjectLeft from "../Components/ProjectLeft.jsx";
import ProjectRight from "../Components/ProjectRight.jsx";
import EdenRoots from "../images/edenrootssite1.jpg";
import LittleLemon from "../images/littlelemonwebapp1.jpg";
import PetCompanion from "../images/petcompanionsite1.jpg";
import Portfolio from "../images/portfoliosite1.jpg";
import ToDo from "../images/todolist1.jpg";

function Projects() {
  const EdenDesc = (
    <>
      <p className="pt-3">
        In this project, I developed the Eden Roots Lawn Care website using{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript</strong> to create an engaging and user-friendly
        experience. The site features a clean and modern design that showcases
        the lawn care services offered, with a focus on easy navigation and
        accessibility.
      </p>
      <p className="pb-10 pt-5">
        I utilized <strong>HTML</strong> to structure the content, ensuring
        semantic elements are used for improved SEO and readability. For
        styling, I employed <strong>CSS</strong> to create a responsive layout,
        utilizing Flexbox and media queries for optimal display across devices.{" "}
        <strong>JavaScript</strong> was used to enhance interactivity, including
        dynamic content loading and smooth scrolling effects.
      </p>
    </>
  );

  const PetDesc = (
    <>
      <p className="pb-10 pt-3">
        Using pure <strong>HTML</strong> and <strong>CSS</strong>, I created
        this site for a class project. Additionally, I utilized{" "}
        <strong>Photoshop</strong> and <strong>Illustrator</strong> for the
        branding of Pet Companion.
      </p>
    </>
  );

  const ToDoDesc = (
    <>
      <p className="pb-10 pt-3">
        I developed a straightforward to-do list application that allows a user
        to create, arrange, and delete tasks. Built with <strong>React</strong>
      </p>
    </>
  );

  const LemonDesc = (
    <>
      <p className="pb-10 pt-3">
        I designed this application following the Little Lemon style guide
        provided by Meta. Starting with UX/UI planning, I used{" "}
        <strong>Figma</strong> to create wireframes, mockups, and an interactive
        prototype. I then developed a functional table booking application,
        using <strong>React</strong> for state management, semantic{" "}
        <strong>HTML</strong> for accessibility, and <strong>CSS</strong> for
        styling and the grid layout.
      </p>
    </>
  );

  const PortfolioDesc = (
    <>
      <p className="pb-10 pt-3">
        While developing this portfolio, I used <strong>Vite</strong> along with{" "}
        <strong>Tailwind CSS</strong> for a fast development experience and
        efficient, responsive styling. I explored and utilized several{" "}
        <strong>React</strong> libraries such as <strong>Formik</strong> for
        form handling, <strong>Yup</strong> for validation, the{" "}
        <strong>Intersection Observer API</strong> to trigger effects based on
        scroll position, and <strong>Framer Motion</strong> to animate
        components and bring the interface to life.
      </p>
    </>
  );

  return (
    <section
      id="projects"
      className="border-t-[1px] border-white border-opacity-30 bg-black bg-cover bg-fixed bg-center"
    >
      <div className="mx-2 flex max-w-7xl flex-col overflow-hidden py-20 text-white md:mx-auto md:py-40">
        <h2 className="mx-auto mb-10 w-fit px-12 text-center text-4xl font-semibold text-white md:text-6xl">
          Projects
        </h2>
        <div className="bg-projects-bg rounded-xl bg-fixed bg-center">
          <ProjectLeft
            title="Eden Roots Website"
            image={EdenRoots}
            desc={EdenDesc}
            liveLink="https://edenrootslawncare.com"
            ghlink="https://github.com/BiasWD/EdenRLC.git"
          />
          <ProjectRight
            title="Table Reservation"
            image={LittleLemon}
            desc={LemonDesc}
            ghlink="https://github.com/BiasWD/LLWebApp.git"
          />
          <ProjectLeft
            title="Pet Hospital Site"
            image={PetCompanion}
            desc={PetDesc}
          />
          <ProjectRight
            title="My Portfolio Site"
            image={Portfolio}
            desc={PortfolioDesc}
          />
          <ProjectLeft
            title="To-Do List App"
            image={ToDo}
            desc={ToDoDesc}
            ghlink="https://github.com/BiasWD/To-do-List.git"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
