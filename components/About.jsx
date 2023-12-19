import Header from "./Header";

const BoldFont = ({ text }) => (
  <span className="font-medium text-slate-200"> {text}</span>
);
const keyStyle = "";

const About = () => {
  return (
    <section id="about" className="lg:pt-20">
      <Header title="About" />
      <p className="mb-4">
        My journey began during the lockdown of 2020. What started as a
        <BoldFont text="curiosity" /> turned into a<BoldFont text="passion" />,
        leading me to the exciting world of web development. Fast forward to
        today, and I find myself crafting innovative and sleek
        <BoldFont text="Web applications" />.
      </p>
      <p className="mb-4">
        I have professional experience using
        <BoldFont text="React " />
        with
        <BoldFont text="Next.js " />
        and
        <BoldFont text="Vue " />
        with
        <BoldFont text="Nuxt.js " />
        to create responsive designs and animations for front-end and use
        <BoldFont text="Express " />
        with
        <BoldFont text="PostgreSQL " />
        and
        <BoldFont text="MongoDB " />
        for back-end development.
      </p>
      <p className="mb-4">
        Recently i have been learning the ropes of <BoldFont text="Svelte" />,
        <BoldFont text="Go" />, and micro-transitions (<BoldFont text="CSS " />
        , <BoldFont text="Motion " />, <BoldFont text="GSAP " />
        ), it's like a whole new playground for building interactive experience.
      </p>
      <p>
        When I'm not typing away, you'll catch me leveling up in PC games,
        working out, catching up on anime, doing culinary experiments, chilling
        with friend or petting strays.
      </p>
    </section>
  );
};

export default About;
