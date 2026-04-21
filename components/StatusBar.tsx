"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("21:47");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`,
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="statusbar">
      <span>{time}</span>
      <span className="right">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor" aria-hidden>
          <rect x="0" y="6" width="2" height="4" rx=".5" />
          <rect x="4" y="4" width="2" height="6" rx=".5" />
          <rect x="8" y="2" width="2" height="8" rx=".5" />
          <rect x="12" y="0" width="2" height="10" rx=".5" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
          <rect x=".5" y=".5" width="18" height="9" rx="2" />
          <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
          <rect x="20" y="3.5" width="1.5" height="3" rx=".5" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
