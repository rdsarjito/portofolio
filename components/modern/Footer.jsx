import { socials } from "utils/constants";

export default function Footer() {
  return (
    <div className="min:px-10 fixed bottom-0 -z-10 grid w-screen grid-cols-4 bg-black px-8 text-white">
      <div className="min:block hidden border-b border-min-b"></div>
      <div className="min:col-span-3 col-span-4 border-b border-l border-min-b py-32 pl-3 text-m2 font-light">
        <h2 className="leading-none">Let`s get in Touch</h2>
        <a className="border-b-2 border-white font-times">Contact me</a>
      </div>
      <div className="min:block hidden"></div>
      <div className="min:col-span-3 col-span-4 flex justify-between border-l border-min-b pb-20 pl-3 pt-6 font-light">
        <div>
          <p>Reach out for collaboration or say hi at</p>
          <p className="inline border-b border-white">k3sha7@gmail.com</p>
          <button
            onClick={() => navigator.clipboard.writeText("k3sha7@gmail.com")}
          >
            c
          </button>
        </div>
        <div className="flex items-center justify-center space-x-2">
          {socials.map((el) => {
            if (el.title === "email") return null;
            return (
              <a key={el.title} href="">
                {el.img}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
