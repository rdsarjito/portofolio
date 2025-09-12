import NavLink from "./NavLink";
import Tags from "./Tags";

const Experience = () => {
  return (
    <section id="experience" className="p-section">
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Jan 2025 - Sep 2025</div>
        <div className="sm:col-span-6">
          <NavLink href="https://vgts.tech/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Full Stack Developer - BRI MarCom
          </NavLink>
          <p className="mt-3 text-sm">
            Designed and developed a marketing content management platform for BRI’s MarCom unit, 
            eaturing analytics dashboards, content workflows, and real-time notifications. 
            Improved business workflow (upload/curation, approvals, distribution) 
            and user experience with smart filters, structured forms, and live data updates. 
            Collaborated with marketing and backend teams to design data schemas, 
            role-based authentication, rate limiting, and Socket.IO integration for notifications and upload progress.
          </p>
          <Tags tags={[
            "TypeScript", 
            "Next.js", 
            "React", 
            "Tailwind CSS", 
            "Radix UI"
          ]} />
          <Tags tags={[
            "Socket.IO", 
            "Bun", 
            "Elysia", 
            "MySQL", 
            "JWT", 
            "Zod"
          ]} />
          <Tags tags={[
            "React Query", 
            "Zustand", 
            "Recharts"
          ]} />
        </div>
      </div>
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Feb 2024 - May 2024</div>
        <div className="sm:col-span-6">
          <NavLink href="https://vgts.tech/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Full Stack Developer - Traspac
          </NavLink>
          <p className="mt-3 text-sm">
            Developed high-quality, robust web application for a diverse array
            of projects for clients with consumer and enterprise focused
            Web-Apps including analytical viewer, CRM, marketplace, dashboards,
            static sites, survey pages etc
            Designed and developed a CRUD application for military data (Laravel backend + Nuxt frontend) 
            for internal administrators to manage personnel, ranks, and units. Improved business workflow 
            (automated input/validation, search filters, sorting) and user experience (dynamic forms, loading states, clear error feedback). 
            Collaborated with operations stakeholders, designer, and QA to define requirements, draft API contracts, and complete UAT.
          </p>
          <Tags tags={[
            "TypeScript", 
            "Nuxt 3", 
            "Vue 3", 
            "Vite", 
            "PHP", 
          ]} />
          <Tags tags={[
            "Laravel", 
            "REST API", 
            "MySQL", 
            "Axios", 
            "Pinia"
          ]} />
        </div>
      </div>
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Feb 2019 - Apr 2019</div>
        <div className="sm:col-span-6">
          <NavLink href="https://vgts.tech/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Front End Web Developer - PPPA Daarul Qur'an
          </NavLink>
          <p className="mt-3 text-sm">
            Develop and design web pages using JavaScript and Bootstrap
          </p>
          <Tags tags={[
            "Javascript", 
            "HTML", 
            "CSS", 
            "Bootstrap", 
          ]} />
        </div>
      </div>
      <NavLink href="/resume.pdf" underline>
        View Full Resume
      </NavLink>
    </section>
  );
};

export default Experience;
