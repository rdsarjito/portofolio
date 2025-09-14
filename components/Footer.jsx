import Link from "next/link";

const SimpleLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="whitespace-nowrap px-1 font-medium text-slate-400 hover:text-teal-300"
    >
      {text}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-md pt-24 text-sm text-slate-500">

    </footer>
  );
};

export default Footer;
