"use client";

import { useEffect } from "react";

export default function RippleEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";

      const size = 100;
      ripple.style.width = size + "px";
      ripple.style.height = size + "px";

      ripple.style.left = e.clientX - size / 2 + "px";
      ripple.style.top = e.clientY - size / 2 + "px";

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}