import {
  About,
  Certifications,
  Experience,
  Footer,
  Hero,
  Projects,
} from "components";
import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto px-8 md:px-24 lg:max-w-7xl">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <div className="mb-16 lg:mb-24 lg:w-1/2">
          <div className="mb-8 flex justify-center lg:pt-20">
            <Image
              src="/rama.png"
              alt="Ramadhani Nur Sarjito"
              width={384}
              height={384}
              priority
              className="h-96 w-96 rounded-full object-cover border border-slate-700"
            />
          </div>
          <About />
          <Experience />
          <Projects />
          {/* <Certifications /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
