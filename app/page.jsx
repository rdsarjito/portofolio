import {
  About,
  Certifications,
  Experience,
  Footer,
  Hero,
  Projects,
} from "components/main";

export default function Page() {
  return (
    <main className="mx-auto px-8 md:px-24 lg:max-w-7xl">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <div className="mb-16 lg:mb-24 lg:w-1/2">
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Footer />
        </div>
      </div>
    </main>
  );
}
