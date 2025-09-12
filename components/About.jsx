import Header from "./Header";

const BoldFont = ({ text }) => (
  <span className="font-medium text-slate-200"> {text}</span>
);
const keyStyle = "";

const About = () => {
  return (
    <section id="about" className="lg:pt-20">
      <p className="mb-4">
        Hello! I’m Rama, and my journey in coding started in 2019 when I was inspired by my older brother. 
        However, it was the encouragement from lecturers on 
        <BoldFont text="campus in 2021 " /> that made me really focus and be consistent in learning. 
        Since then, I have become increasingly interested in exploring various aspects of the programming world.
      </p>
      <p className="mb-4">
        I started by learning <BoldFont text="Python" />, but soon realized that I was more interested in user interfaces. 
        This led me to switch to frontend web development. Mastering <BoldFont text="HTML" />, <BoldFont text="CSS" />, and
        <BoldFont text="JavaScript" /> became my priority, 
        and I started exploring different technologies that support the creation of engaging and interactive web applications.
      </p>
      <p className="mb-4">
        Currently, I`m developing into fullstack <BoldFont text="JavaScript" /> and <BoldFont text="TypeScript" />, 
        focusing on <BoldFont text="frontend" /> and <BoldFont text="backend" /> development as a whole. 
        I love learning new things every day and am always open to feedback to keep growing and improving my skills.
      </p>
    </section>
  );
};

export default About;
