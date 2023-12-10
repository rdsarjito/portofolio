"use client";
import { useState } from "react";
import { cn } from "utils";

export default function Footer() {
  const [showMsg, setShowMsg] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("k3sha7@gmail.com");
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000);
    } catch (e) {
      console.error("failed to copy!!");
    }
  };

  return (
    <footer className="w-full bg-black px-20 py-12 text-white">
      <div className="mx-auto max-w-[1140px] px-20">
        <h2 className="text-2xl">Let's get in Touch</h2>
        <p
          style={{ display: "flex" }}
          className="link group mt-4 items-center pb-1"
          onClick={copyEmail}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="mr-1 h-5 transition-transform duration-500 group-hover:rotate-45"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M17 7 7 17M8 7h9v9" />
          </svg>
          k3sha7@gmail.com
          <span
            className={cn(
              "text-lack invisible absolute -right-24 rounded-md bg-neutral-500 p-2 text-white transition delay-500",
              { visible: showMsg }
            )}
          >
            Copied 😉
          </span>
        </p>
      </div>
    </footer>
  );
}
