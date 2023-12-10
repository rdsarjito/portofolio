import Link from "next/link";

const SimpleLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="whitespace-nowrap px-1 font-medium text-slate-400 hover:text-teal-300"
    >
      {text}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="max-w-md pt-24 text-sm text-slate-500">
      <p>
        Built with
        <SimpleLink href="/" text="Next.js" />
        and
        <SimpleLink href="/" text="Tailwind CSS," />
        deployed with
        <SimpleLink href="/" text="Vercel." />
        All text is set in the
        <SimpleLink href="/" text="Inter" />
        typeface. Awesomely designed by
        <SimpleLink href="/" text="Brittany Chiang" />
        and coded in
        <SimpleLink href="/" text="VS Code" />
        by yours truly.
      </p>
    </footer>
  );
};

export default Footer;
