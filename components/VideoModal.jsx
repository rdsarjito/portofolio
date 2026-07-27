"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const useIsServerLive = () => {
  const [isLive, setIsLive] = useState(null); // null = loading

  useEffect(() => {
    const check = () => {
      // WIB = UTC+7
      const now = new Date();
      const wibHour = (now.getUTCHours() + 7) % 24;
      setIsLive(wibHour >= 9 && wibHour < 18);
    };
    check();
    const interval = setInterval(check, 60_000); // recheck every minute
    return () => clearInterval(interval);
  }, []);

  return isLive;
};

const VideoModal = ({ videoId, title = "Demo Video", liveUrl = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLive = useIsServerLive();
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div className="relative z-20 mt-3 flex w-fit flex-col gap-2">
        {/* Compact Media Preview Button */}
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }
          }}
          className="group/video relative aspect-video w-36 sm:w-44 cursor-pointer overflow-hidden rounded-md border border-slate-700/60 bg-slate-900 shadow-sm transition-all duration-300 hover:border-teal-400/60 hover:shadow-md hover:shadow-teal-500/10"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/video:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/40 transition-opacity duration-300 group-hover/video:bg-slate-950/20" />

          {/* Play Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-slate-200 backdrop-blur-sm shadow-md transition-all duration-300 group-hover/video:scale-110 group-hover/video:bg-teal-400 group-hover/video:text-slate-950 group-hover/video:border-teal-400">
              <svg className="ml-0.5 h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-1 right-1.5 rounded bg-black/60 px-1 py-0.5 text-[9px] font-medium tracking-wider text-slate-300">
            VIDEO
          </div>
        </div>

        {/* Live URL & Dynamic Status — stacked below video */}
        {liveUrl && (
          <div className="flex flex-col gap-1">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/arrow inline-flex items-center gap-0 text-xs font-semibold text-slate-200 transition-colors hover:text-teal-400 focus-visible:text-teal-400"
            >
              <span>{liveUrl.replace(/^https?:\/\//, '')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 inline-block h-3.5 w-3.5 transition-transform duration-300 group-hover/arrow:-rotate-45"
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
            </a>

            {isLive === true && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Live · 09:00 – 18:00 WIB</span>
              </div>
            )}

            {isLive === false && (
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                <span>Sorry, server offline · available 09:00 – 18:00 WIB</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 bg-slate-900/90">
                <span className="text-xs font-semibold text-slate-300">
                  {title}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoModal;
