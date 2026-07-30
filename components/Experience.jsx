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
          <div className="mt-4 flex items-center gap-2 border-t border-slate-700/50 pt-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Reference</span>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-slate-300">Eko Budi</span>
            </div>
            <span className="text-slate-600">·</span>
            <a
              href="https://wa.me/6287885461923"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-teal-400"
            >
              <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>0878-8546-1923</span>
            </a>
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
          ]} />

          {/* Reference */}
          <div className="mt-4 flex items-center gap-2 border-t border-slate-700/50 pt-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Reference</span>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-slate-300">Aris Kurniawan</span>
            </div>
            <span className="text-slate-600">·</span>
            <a
              href="https://wa.me/628119476622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-teal-400"
            >
              <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>0811-9476-622</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="mailto:arisjiratkurniawan@gmail.com"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 transition-colors hover:text-teal-400"
            >
              <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>arisjiratkurniawan@gmail.com</span>
            </a>
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
