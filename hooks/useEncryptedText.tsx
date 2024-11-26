"use client";
import { useEffect, useState } from "react";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?"; // Define the `chars` variable

const TextEncrypted = ({ text, children, interval = 50 }: any) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer: any;

    if (outputText !== text) {
      timer = setInterval(() => {
        setOutputText((prev) => {
          if (prev.length < text.length) {
            return prev + text[prev.length];
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <span className="text-2xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center gap-2">
      {outputText}
      {remainder}
      {outputText.length === text.length && children} {/* Render children after text completes */}
    </span>
  );
};

export default TextEncrypted;
