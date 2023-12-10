"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project",
    summary: "Redesign of apple-store",
    src: "/background.webp",
  },
  {
    title: "Project",
    summary: "Redesign of apple-store",
    src: "/background.webp",
  },
  {
    title: "Project",
    summary: "Redesign of apple-store",
    src: "/background.webp",
  },
];

const Card = ({ project }) => {
  const { title, summary, src } = project;

  return (
    <div className="group border-2 border-black bg-white">
      <div className="relative h-44">
        <Image src="/background.webp" alt="background" fill objectFit="cover" />
      </div>
      <div className="px-4 py-4">
        <p className="font-times text-lg">{title}</p>
        <span className="text-sm text-neutral-700">{summary}</span>
        <div className="mt-3 flex gap-3">
          <Link href={src} className="link">
            Website
          </Link>
          <Link href={src} className="link">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="mt-24">
      <h3 className="mb-6 text-2xl">Experiments</h3>

      <div className="gap grid grid-cols-1 gap-8 md:grid-cols-2 ">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
