"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hello%20BiharStack%2C%20I%20would%20like%20to%20discuss%20a%20project!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] transition-colors group cursor-pointer"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
      
      {/* Official WhatsApp Logo SVG */}
      <svg className="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.483 1.333 5.001L2 22l5.127-1.341a9.96 9.96 0 004.881 1.28h.005c5.507 0 9.99-4.478 9.99-9.984 0-2.667-1.038-5.174-2.925-7.06A9.923 9.923 0 0012.012 2zm5.82 14.161c-.244.686-1.42 1.31-1.956 1.393-.497.077-1.139.11-1.838-.113-.424-.135-.97-.313-1.673-.618-2.957-1.282-4.887-4.285-5.035-4.482-.147-.197-1.205-1.603-1.205-3.058 0-1.455.762-2.17 1.034-2.463.272-.292.597-.365.795-.365.197 0 .394.002.565.01.182.008.428-.069.67.511.244.58.831 2.03.903 2.178.073.147.121.32.024.512-.097.193-.146.313-.292.483-.147.171-.309.382-.44.514-.147.147-.3.308-.13.6.17.292.757 1.25 1.624 2.023 1.116.995 2.057 1.303 2.35 1.45.292.146.463.121.634-.073.171-.194.733-.854.928-1.147.195-.292.39-.244.659-.146.268.098 1.708.805 2.001.952.293.146.488.219.561.341.073.122.073.71-.171 1.396z" />
      </svg>

      <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs text-slate-200 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md border border-slate-700 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
