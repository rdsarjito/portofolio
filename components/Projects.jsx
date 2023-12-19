import Image from "next/image";
import Header from "./Header";
import NavLink from "./NavLink";

const projects = [
  {
    title: "Kanban",
    description:
      "A task management app with kanban view build with React, with all the basic features like drag and drop, creating new task, subtask and boards",
    link: "https://github.com/k3sha7/kanban#readme",
    image: "/kanban.webp",
  },
  {
    title: "Portfolio",
    description:
      "A Portfolio site built on NextJs to show case the thing I am working on.",
    link: "https://github.com/k3sha7/portfolio#readme",
    image: "/portfolio.webp",
  },
  {
    title: "PlayGround",
    description:
      "A sandbox environment, where i try experimenting new things that catch my eye or implement some thing that i recently learned",
    link: "https://github.com/k3sha7/react-playground#readme",
    image: "/playground.png",
  },
  {
    title: "Apple Store(demo)",
    description:
      "A demo apple store e-commerce application built using NextJs, Sanity CMS and stripe",
    link: "https://github.com/k3sha7/nextjs-appleStore#readme",
    image: "/apple-store.png",
  },
];

const Showcase = ({ project }) => {
  const { title, description, link, image } = project;

  return (
    <div className="card group">
      <div className="card-overlay" />
      <div className="relative z-10 my-2 h-24 sm:col-span-2 lg:max-h-20">
        <Image
          className="rounded border-2 border-slate-200/10 object-cover object-top transition group-hover:border-slate-200/30"
          alt="project"
          src={image}
          fill
        />
      </div>
      <div className="z-10 sm:col-span-6">
        <NavLink
          href={link}
          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
        >
          {title}
          <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
        </NavLink>
        <p className="mt-2 text-sm leading-normal">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="p-section">
      <Header title="Projects" />
      <div className="mt-2">
        {projects.map((project) => (
          <Showcase project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
