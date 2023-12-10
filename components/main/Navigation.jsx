"use client";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { cn } from "utils/cn";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");
  console.log(activeLink);

  useEffect(() => {
    const handleScroll = () => {
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el.getBoundingClientRect().bottom > 0) {
          setActiveLink(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onClick = (id) => document.getElementById(id).scrollIntoView();

  return (
    <div className="mt-16 hidden flex-col uppercase lg:flex">
      {sections.map(({ id, label }) => (
        <span
          key={id}
          onClick={() => onClick(id)}
          className={cn(
            "group flex w-fit items-center py-3 text-xs font-bold tracking-widest text-slate-500 hover:text-slate-200 focus-visible:text-slate-200",
            {
              "text-slate-200": activeLink === id,
            }
          )}
        >
          <span
            className={cn(
              "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
              {
                "w-16 bg-slate-200 group-focus-visible:bg-slate-200":
                  activeLink === id,
              }
            )}
          />
          {label}
        </span>
      ))}
    </div>
  );
};

export default Navigation;
