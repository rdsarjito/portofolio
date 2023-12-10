import Accordion from "components/modern/Accordion";

export default function TechStack() {
  return (
    <section className="pt-32">
      <span className="sec-title">[ Tech ]</span>
      <p className="min:hidden pl-3 pb-8">What I use</p>
      <h2 className="text-5xl font-light pl-3 w-[38rem]">
        Delivering
        <span className="font-times italic"> modern, </span>
        <span className="font-times italic"> cohesive </span>&
        <span className="font-times italic"> intuitive </span>
        web solutions.
      </h2>
      <div className="pt-10">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </section>
  );
}
