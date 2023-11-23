import Image from "next/image";
import { socials } from "utils/constants";

const Intro = () => {
  return (
    <section className="pl-3 pt-40">
      <h1 className="text-8xl font-times italic tracking-tighter">
        Keshav Kannan
      </h1>
      <p className="text-4xl font- pt-6">
        Full-stack developer / Software engineer <br />
        specialised in <span className="font-times">Websites</span> &{" "}
        <span className="font-times">Web-Apps</span>
      </p>
      <ul className="flex space-x-8 mt-12">
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
