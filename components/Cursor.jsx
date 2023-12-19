"use client";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  const style = {
    background: `radial-gradient(60vmin at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 100%)`,
  };

  const updateMousePosition = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setPosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useLayoutEffect(() => {
    if (cursorRef) {
      const { clientWidth } = cursorRef.current;
      if (clientWidth < 1024) {
        setPosition({ x: clientWidth - 100, y: 100 });
      }
    }
  }, [cursorRef]);

  return (
    <div
      className="pointer-events-none fixed z-30 h-screen w-screen lg:p-1"
      ref={cursorRef}
      style={style}
    />
  );
};

export default Cursor;
