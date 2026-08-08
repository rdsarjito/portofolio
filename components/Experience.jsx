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
            Managing transport service products — such as membership cards and vouchers — isn't just about sales. 
            Every step from creation to customer use must be controlled and traceable. Previously, processes like card generation, 
            distribution, and transaction validation were handled manually, making them slow, error-prone, and difficult to monitor. 
            Two core products also needed to be managed within the same ecosystem: <span className="text-slate-200 font-medium">Frequent Whoosh Card (FWC)</span> as 
            a membership program for regular commuters, and <span className="text-slate-200 font-medium">Vouchers</span> as a prepaid travel product. 
            To address this, I helped build an integrated platform that manages both products end-to-end — from product creation 
            and serial number generation, to stock distribution across locations, field transaction recording, and real-time validation and redemption.
          </p>

          <Tags tags={[
            "TypeScript", "Next.js", "React", "Bun", "Elysia", 
            "PostgreSQL", "Prisma", "JWT", "Go", "Firebase", 
            "Docker", "Zustand", "SWR", "Recharts", "Zod", "Radix UI"
          ]} />

          {/* Reference */}
          <div className="mt-4 flex items-start gap-3 border-t border-slate-700/40 pt-3">
            <span className="mt-0.5 shrink-0 text-[9px] font-semibold uppercase tracking-widest text-slate-600">ref</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-slate-400">Eko Budi</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
                <a
                  href="https://wa.me/6287885461923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 transition-colors hover:text-teal-400"
                >
                  0878-8546-1923
                </a>
                <span className="text-[10px] text-slate-700">·</span>
                <a
                  href="mailto:eko.agustavia@kcic.co.id"
                  className="text-[11px] text-slate-500 transition-colors hover:text-teal-400"
                >
                  eko.agustavia@kcic.co.id
                </a>
              </div>
            </div>
          </div>
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
          {/* Reference */}
          <div className="mt-4 flex items-start gap-3 border-t border-slate-700/40 pt-3">
            <span className="mt-0.5 shrink-0 text-[9px] font-semibold uppercase tracking-widest text-slate-600">ref</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-slate-400">Aris Kurniawan</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0">
                <a
                  href="https://wa.me/628119476622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 transition-colors hover:text-teal-400"
                >
                  0811-9476-622
                </a>
                <span className="text-[10px] text-slate-700">·</span>
                <a
                  href="mailto:arisjiratkurniawan@gmail.com"
                  className="text-[11px] text-slate-500 transition-colors hover:text-teal-400"
                >
                  arisjiratkurniawan@gmail.com
                </a>
              </div>
            </div>
          </div>
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

      <NavLink href="/CV_Ramadhani_Nur_Sarjito.pdf" underline>
        View Full Resume
      </NavLink>
    </section>
  );
};

export default Experience;
