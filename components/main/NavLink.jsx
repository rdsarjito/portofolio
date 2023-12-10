import clsx from "clsx";
import Link from "next/link";

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1 inline-block h-5 transition-transform duration-300 group-hover:-rotate-45"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12h14m-6 6 6-6m-6-6 6 6" />
  </svg>
);

const NavLink = ({ href, children, underline = false }) => {
  return (
    <Link
      className="group font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
      target="_blank"
      href={href}
    >
      <span
        className={clsx({
          "relative my-2 inline-block w-fit font-semibold transition duration-500 after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-teal-400 after:transition after:duration-500 after:content-[''] group-hover:text-teal-400 after:group-hover:scale-x-100 lg:my-4":
            underline,
        })}
      >
        {children}
      </span>
      <Arrow />
    </Link>
  );
};

export default NavLink;
