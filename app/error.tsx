"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f0f0] text-black p-6 text-center select-none">
      <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        Try again
      </button>
    </div>
  );
}
