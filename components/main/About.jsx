import Header from "./Header";

const keyStyle = "font-medium text-slate-200";

const About = () => {
  return (
    <section id="about" className="lg:pt-20">
      <Header title="About" />
      <p className="mb-4">
        My journey began during the lockdown of 2020. What started as a hobby
        turned into a <span className={keyStyle}>Passion</span>, leading me to
        the exciting world of web development. Fast forward to today, and I find
        myself crafting innovative and sleek
        <span className={keyStyle}> Web applications</span>.
      </p>
      <p className="mb-4">
        I have professional experience using
        <span className={keyStyle}> React </span>
        with<span className={keyStyle}> Next.js</span> and
        <span className={keyStyle}> Vue</span> with
        <span className={keyStyle}> Nuxt.js</span> to create responsive designs
        and animations for front-end and use
        <span className={keyStyle}> Express</span> with
        <span className={keyStyle}> PostgreSQL</span> and
        <span className={keyStyle}> MongoDB</span> for back-end development.
      </p>
      <p className="mb-4">
        But personally I'm all about
        <span className={keyStyle}> Svelte </span>
        with
        <span className={keyStyle}> Sveltekit </span>
        upfront, and
        <span className={keyStyle}> Go </span>
        with
        <span className={keyStyle}> Fiber </span>
        in the backend a combo that never fails to impress.
      </p>
      <p>
        When I'm not typing away, you'll catch me leveling up in PC games,
        working out, catching up on anime's, doing culinary experiments,
        chilling with friend or petting strays.
      </p>
    </section>
  );
};

export default About;
