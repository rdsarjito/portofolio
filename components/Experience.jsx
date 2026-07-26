import NavLink from "./NavLink";
import Tags from "./Tags";

const Experience = () => {
  return (
    <section id="experience" className="p-section cursor-pointer">
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Januari 2026 - Sekarang</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/keretacepatindonesiachina/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Full Stack Developer & Mobile Application Developer - KCIC
          </NavLink>
          <p className="mt-3 text-sm">
            Developed and maintained a comprehensive operational platform for Indonesia's high-speed railway (Whoosh), 
            encompassing a web-based dashboard for real-time device monitoring, station management, and passenger flow analytics. 
            Built a cross-platform device agent in Go for automated self-registration and heartbeat monitoring across station terminals. 
            Implemented Firebase Cloud Messaging for push notifications, PDF/Excel report generation, and a multi-environment CI/CD pipeline 
            with self-hosted GitHub Actions runners. Managed self-hosted infrastructure with Docker, Caddy reverse proxy, and PostgreSQL.
          </p>
          <Tags tags={[
            "TypeScript",
            "Next.js",
            "React",
            "Bun",
          ]} />
          <Tags tags={[
            "Elysia",
            "PostgreSQL",
            "Prisma",
            "JWT",
          ]} />
          <Tags tags={[
            "Go",
            "Firebase",
            "Docker",
            "Zustand",
          ]} />
          <Tags tags={[
            "SWR",
            "Recharts",
            "Zod",
            "Radix UI",
          ]} />
        </div>
      </div>
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Oktober 2025 - Desember 2025</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/pt-bank-rakyat-indonesia-persero-tbk/">
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            Full Stack Developer - Sucofindo
          </NavLink>
          <p className="mt-3 text-sm">
            Developed and maintained a full-featured web platform for inspection and certification workflows, 
            covering scheduling, reporting, and role-based user management. Led requirements discovery with cross-functional teams, 
            designed scalable system architecture, and implemented features using modern web technologies (Laravel, MySQL, REST APIs, queues, 
            PDF/Excel exports, and Docker). Optimized performance, ensured data integrity and auditability, and delivered 
            automated notifications and analytics to improve operational efficiency.
          </p>
          <Tags tags={[
            "Laravel", "MySQL"
          ]} />
        </div>
      </div>
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Jan 2025 - Sep 2025</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/pt-bank-rakyat-indonesia-persero-tbk/">
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
            "TypeScript", 
          ]} />
          <Tags tags={[
            "Next.js", 
            "React", 
            "Socket.IO", 
            "Bun", 
          ]} />
          <Tags tags={[
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
          <NavLink href="https://www.linkedin.com/company/pt.-traspac-makmur-sejahtera/">
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


      <NavLink href="/resume.pdf" underline>
        View Full Resume
      </NavLink>
    </section>
  );
};

export default Experience;
