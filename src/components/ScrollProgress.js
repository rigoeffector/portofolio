import React, { useState, useEffect } from "react";

function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollY(height > 0 ? (winScroll / height) * 100 : 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      role="progressbar"
      aria-valuenow={Math.round(scrollY)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: `${scrollY}%` }}
    />
  );
}

export default ScrollProgress;
