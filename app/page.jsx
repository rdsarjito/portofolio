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
            <div className="relative aspect-square w-full max-w-[10rem] sm:max-w-[14rem] md:max-w-[18rem] lg:max-w-[24rem]">
              <Image
                src="/rama.png"
                alt="Ramadhani Nur Sarjito"
                fill
                priority
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 18rem, 24rem"
                className="rounded-full object-cover border border-slate-700"
              />
            </div>
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
