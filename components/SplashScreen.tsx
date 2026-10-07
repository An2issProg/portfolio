"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const loadDuration = 3000; // 3 seconds to reach 100%
    const waitDuration = 3000; // 3 seconds to stay at 100%
    const interval = 30; // Update every 30ms
    const increment = 100 / (loadDuration / interval);

    // First phase: animate from 0% to 100% over 3 seconds
    const loadTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadTimer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    // Second phase: wait 3 seconds at 100%, then hide splash
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, loadDuration + waitDuration);

    return () => {
      clearInterval(loadTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center">
      {/* Logo Icon */}
      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
        <span className="text-blue-900 font-bold text-4xl">AB</span>
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-blue-950/30 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-blue-200 text-2xl font-bold mb-4">
        {Math.round(progress)}%
      </p>

      {/* Welcome Text */}
      <p className="text-blue-200 text-lg tracking-widest animate-pulse">
        BIENVENU ...
      </p>
    </div>
  );
}
