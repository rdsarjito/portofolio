import clsx from "clsx";
import Cursor from "components/Cursor";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramadhani Nur Sarjito",
  description:
    "Ramadhani Nur Sarjito portfolio website, web developer, software engineer, frontend developer and fullstack development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "min-h-screen bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
        )}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
