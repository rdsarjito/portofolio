import { socials } from "utils/constants";

export default function Footer() {
  return (
    <div className="bg-black fixed w-screen -z-10 bottom-0 text-white grid grid-cols-4 px-8 min:px-10">
      <div className="border-b border-min-b hidden min:block"></div>
      <div className="pl-3 text-m2 font-light py-32 border-l border-b border-min-b col-span-4 min:col-span-3">
        <h2 className="leading-none">Let`s get in Touch</h2>
        <a className="font-times border-b-2 border-white">Contact me</a>
      </div>
      <div className="hidden min:block"></div>
      <div className="pl-3 flex justify-between font-light pt-6 pb-20 border-l border-min-b col-span-4 min:col-span-3">
        <div>
          <p>Reach out for collaboration or say hi at</p>
          <p className="inline border-b border-white">k3sha7@gmail.com</p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          {socials.map((el) => {
            if (el.title === "email") return;
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
