import Image from "next/image";
import { socials } from "utils/constants";

const Intro = () => {
  return (
    <section className="pt-40">
      <h1 className="font-times text-8xl italic tracking-tighter">
        Keshav Kannan
      </h1>
      <p className="font- pt-6 text-4xl">
        Full-stack developer / Software engineer <br />
        specialised in <span className="font-times">Websites</span> &{" "}
        <span className="font-times">Web-Apps</span>
      </p>
      <ul className="mt-12 flex space-x-8">
        {socials.map((el) => (
          <li title={el.title} key={el.title} className="social-ball gap-y-10">
            {el.img}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Intro;
