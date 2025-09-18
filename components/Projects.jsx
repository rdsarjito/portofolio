import Image from "next/image";
import Header from "./Header";
import NavLink from "./NavLink";
import Tags from "./Tags";

const projects = [
  {
    title: "PAKSA (Pengelola Kas Siswa)",
    description:
      "PaksaSite is a web application for classroom and school cash management that records income and expenses, manages student data, monitors balances via an interactive dashboard, provides detailed histories and reports, and includes user authentication, profile settings, dynamic data tables (DataTables), charts (Chart.js/Morris), modern notifications (SweetAlert2), and a responsive AdminLTE-based interface.",
    link: "https://github.com/rdsarjito/paksa",
    image: "/paksa.png",
    tags: ["PHP", "Laravel", "AdminLTE", "DataTables", "Chart.js", "SweetAlert2", "MySQL"]
  },
  
  {
    title: "NYC Property Sales Dashboard",
    description:
      "NYC Property Sales Dashboard is a web-based interactive analytics app that visualizes New York City property sales (Sep 2016–Aug 2017) with date/borough/ZIP filters, KPI cards, rich charts (Chart.js + D3), a geospatial map (Leaflet), and searchable/sortable tables (DataTables), enabling fast exploration of trends by neighborhood, building class, year built, and unit mix on a responsive interface.",
    link: "https://github.com/rdsarjito/nyc-property-sales-dashboard",
    image: "/nyc-dashboard.png",
    tags: ["JavaScript", "Chart.js", "D3", "Leaflet", "DataTables"]
  },

  {
    title: "Brushing Teeth Reminder",
    description:
      "Brushing Teeth Reminder is a cross-platform Flutter app that helps build a consistent tooth-brushing habit through customizable scheduled reminders and reliable local notifications, supports Android auto-start and battery-optimization exemptions to keep alerts on time, offers QR scanning to log compliance, stores preferences and history locally, and runs fast and responsively across iOS, Android, web, macOS, Windows, and Linux.",
    link: "https://github.com/rdsarjito/brushing-teeth-reminder",
    image: "/brushing-teeth-reminder.jpg",
    tags: ["Flutter", "Dart", "Cross-platform", "Local Notifications", "QR Scanner"]
  },

  {
    title: "Covid-19",
    description:
      "COVID-19 Tracker is a lightweight, browser-based web app that lets you explore up-to-date global and country-level COVID-19 statistics through instant search, clear numeric summaries, and a browsable country list; built with modular JavaScript components, an event-bus architecture, and Webpack for optimal performance, it consumes a public API, formats numbers for readability, and runs fast and responsively across modern desktop and mobile browsers.",
    link: "https://github.com/rdsarjito/covid_19",
    image: "/covid-19.png",
    tags: ["JavaScript", "Webpack", "API", "HTML", "CSS", "Responsive Design"]
  },

  {
    title: "D-Budget",
    description:
      "D‑Budget is a personal finance web application that helps you track income and expenses, organize transactions by categories, monitor balances and cash flow via an interactive dashboard, review detailed histories, and manage data through a fast, responsive React interface powered by Redux, Tailwind, and Chart.js, with secure Google-based authentication and a Node.js/Express + MongoDB backend API.",
    link: "https://github.com/rdsarjito/d-budget-frontend",
    image: "/d-budget.png",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js", "Google Auth"]
  },
];

const Showcase = ({ project }) => {
  const { title, description, link, image, tags } = project;

  return (
    <div className="card group">
      <div className="card-overlay" />
      <div className="relative z-10 my-2 h-40 sm:col-span-2 lg:max-h-20">
        <Image
          className="rounded border-2 border-slate-200/10 object-cover object-top transition group-hover:border-slate-200/30"
          alt={title}
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
        <Tags tags={tags} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="p-section">
      <div className="mt-2">
        {projects.map((project) => (
          <Showcase key={project.title} project={project} />
        ))}
      </div>
      <NavLink href="https://github.com/rdsarjito" underline>
        View Full Project Archive
      </NavLink>
    </section>
  );
};

export default Projects;
