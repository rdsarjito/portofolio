import Image from "next/image";
import Header from "./Header";
import NavLink from "./NavLink";

const Projects = () => {
  return (
    <section id="projects" className="p-section">
      <Header title="Experiments" />
      <div className="mt-2">
        <div className="card group">
          <div className="card-overlay" />

          <div className="relative my-2 h-24 sm:col-span-2 lg:max-h-20">
            <Image
              className="object-cover object-top"
              alt="project"
              src="/ss1.png"
              fill
            />
          </div>
          <div className="sm:col-span-6">
            <NavLink href="https://github.com/k3sha7/kanban/blob/main/README.md">
              Kanban
            </NavLink>
            <p className="mt-2 text-sm leading-normal">
              This is a task management app with kanban view build with React,
              with all the basic features like drag and drop, creating new task,
              subtask and boards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
