import NavLink from "./NavLink";
import Tags from "./Tags";
import VideoModal from "./VideoModal";

const Experience = () => {
  return (
    <section id="experience" className="p-section cursor-pointer">
      {/* KCIC Experience */}
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Januari 2026 - Sekarang</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/keretacepatindonesiachina/">
            Full Stack Developer & Mobile Application Developer — KCIC
          </NavLink>

          <VideoModal 
            videoId="axBlrTVjrFQ" 
            title="KCIC Whoosh Platform Demo" 
            liveUrl="https://app.dev-kcic-fwc.me/"
          />

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Developed and maintained a comprehensive operational platform for Indonesia's high-speed railway (Whoosh), 
            encompassing a web-based dashboard for real-time device monitoring, station management, and passenger flow analytics. 
            Built a cross-platform device agent in Go for automated self-registration and heartbeat monitoring across station terminals. 
            Implemented Firebase Cloud Messaging for push notifications, PDF/Excel report generation, and a multi-environment CI/CD pipeline 
            with self-hosted GitHub Actions runners. Managed self-hosted infrastructure with Docker, Caddy reverse proxy, and PostgreSQL.
          </p>

          <Tags tags={[
            "TypeScript", "Next.js", "React", "Bun", "Elysia", 
            "PostgreSQL", "Prisma", "JWT", "Go", "Firebase", 
            "Docker", "Zustand", "SWR", "Recharts", "Zod", "Radix UI"
          ]} />
        </div>
      </div>

      {/* Sucofindo Experience */}
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Oktober 2025 - Desember 2025</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/pt-bank-rakyat-indonesia-persero-tbk/">
            Full Stack Developer — Sucofindo
          </NavLink>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Developed and maintained a full-featured web platform for inspection and certification workflows, 
            covering scheduling, reporting, and role-based user management. Led requirements discovery with cross-functional teams, 
            designed scalable system architecture, and implemented features using modern web technologies (Laravel, MySQL, REST APIs, queues, 
            PDF/Excel exports, and Docker). Optimized performance, ensured data integrity and auditability, and delivered 
            automated notifications and analytics to improve operational efficiency.
          </p>
          <Tags tags={["Laravel", "MySQL", "REST API", "Docker"]} />
        </div>
      </div>

      {/* BRI MarCom Experience */}
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Jan 2025 - Sep 2025</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/pt-bank-rakyat-indonesia-persero-tbk/">
            Full Stack Developer — BRI MarCom
          </NavLink>

          <VideoModal 
            videoId="jjOmd7IUPFs" 
            title="BRI MarCom Platform Demo" 
            liveUrl="https://app.dev-bri-markom.me/login"
          />

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Designed and developed a marketing content management platform for BRI’s MarCom unit, 
            featuring analytics dashboards, content workflows, and real-time notifications. 
            Improved business workflow (upload/curation, approvals, distribution) 
            and user experience with smart filters, structured forms, and live data updates. 
            Collaborated with marketing and backend teams to design data schemas, 
            role-based authentication, rate limiting, and Socket.IO integration for notifications and upload progress.
          </p>

          <Tags tags={[
            "TypeScript", "Next.js", "React", "Socket.IO", "Bun", 
            "Elysia", "MySQL", "JWT", "Zod", "React Query", "Zustand", "Recharts"
          ]} />
        </div>
      </div>

      {/* Traspac Experience */}
      <div className="card group mt-3">
        <div className="card-overlay" />
        <div className="mt-[6px] text-xs sm:col-span-2">Feb 2024 - May 2024</div>
        <div className="sm:col-span-6">
          <NavLink href="https://www.linkedin.com/company/pt.-traspac-makmur-sejahtera/">
            Full Stack Developer — Traspac
          </NavLink>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Developed high-quality, robust web applications for client projects including analytical viewers, 
            CRM, marketplaces, dashboards, static sites, and survey pages. Designed and developed a CRUD application 
            for military data (Laravel backend + Nuxt frontend) for internal administrators to manage personnel, ranks, and units. 
            Improved business workflow (automated input/validation, search filters, sorting) and user experience.
          </p>
          <Tags tags={[
            "TypeScript", "Nuxt 3", "Vue 3", "Vite", "PHP", 
            "Laravel", "REST API", "MySQL", "Axios", "Pinia"
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
