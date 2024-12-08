"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function PostProgress({ post }: { post: any }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full  bg-white dark:bg-black">
        <Progress value={scrollProgress} />
      </div>
    </>
  );
}
