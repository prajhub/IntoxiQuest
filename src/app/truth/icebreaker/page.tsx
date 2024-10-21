"use client";

import { useState, useEffect } from "react";

export default function Icebreaker() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const delta = Date.now() - start;
      setSeconds(Math.floor(delta / 1000)); // Update the state
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return <div className="text-black">{seconds}</div>;
}
