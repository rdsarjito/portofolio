import Header from "./Header";
import NavLink from "./NavLink";
import Tags from "./Tags";

const Experience = () => {
  return (
    <section id="experience" className="p-section">
      <Header title="Experience" />
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">2021 - PRESENT</div>
        <div className="sm:col-span-6">
          <NavLink href="https://vgts.tech/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Software Engineer - VGTS
          </NavLink>
          <p className="text-sm font-medium text-slate-500">
            Jr. Software Engineer
          </p>
          <p className="mt-3 text-sm">
            Developed high-quality, robust web application for a diverse array
            of projects for clients with consumer and enterprise focused
            Web-Apps including analytical viewer, CRM, marketplace, dashboards,
            static sites, survey pages etc
          </p>
          <Tags tags={["Front-end", "Back-end"]} />
        </div>
      </div>
      <NavLink href="/resume.pdf" underline>
        View Full Resume
      </NavLink>
    </section>
  );
};

export default Experience;
