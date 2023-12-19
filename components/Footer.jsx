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
      <p>
        Built with
        <SimpleLink href="https://nextjs.org/" text="Next.js" />
        and
        <SimpleLink href="https://tailwindcss.com/" text="Tailwind CSS," />
        deployed with
        <SimpleLink href="https://vercel.com/" text="Vercel." />
        All text is set in the
        <SimpleLink href="/https://rsms.me/inter/" text="Inter" />
        typeface. Awesomely designed by
        <SimpleLink
          href="https://www.linkedin.com/in/bchiang7/"
          text="Brittany Chiang"
        />
        and coded in
        <SimpleLink href="https://code.visualstudio.com/" text="VS Code" />
        by yours truly.
      </p>
    </footer>
  );
};

export default Footer;
