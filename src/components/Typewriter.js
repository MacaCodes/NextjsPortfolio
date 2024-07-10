"use client";

import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
