"use client";

import React from "react";
import { motion } from "framer-motion";

// SVGs for each Tech Logo (Enhanced with 3D Glossy Filters & Glowing Aura)
const iconClass = "w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9";

const JSIcon = () => (
  <svg viewBox="0 0 630 630" className={`${iconClass} rounded-sm filter drop-shadow-[0_0_10px_rgba(247,223,30,0.85)]`}>
    <rect width="630" height="630" fill="#f7df1e" rx="80" />
    <path
      d="m424.2 429.6c.4 12.3 2 24.2 9.2 33.1 8 10 19 15.5 35.8 15.5 18 0 31-8.2 38-20 7-11.4 8-27.4 8-40.8v-176.4h55.2v177.4c0 23.4-3.3 46.6-16 65.4-18.6 27.6-51.4 39.4-89.2 39.4-42.6 0-71.2-14.3-88.2-39.8-13.8-20.7-17-46-17-73.8zm-155.9 29.3c5.3 9.6 15 16.5 28.9 16.5 15.8 0 25-7.6 25-24.5 0-18.3-15-24.4-33.8-32.5-32.9-14-63.4-25-63.4-67.9 0-38.4 29.8-63.4 70.1-63.4 35.2 0 60.5 16.2 70.2 44.8l-44.5 26.2c-5.7-12.8-16.2-19.6-28.7-19.6-13.8 0-21 7.2-21 17.5 0 12.4 10.8 17.7 28.5 25.1 36.2 15 68.6 27.8 68.6 71.3 0 45-35.5 69.7-78.5 69.7-44.5 0-75.1-21.3-86.8-49.4z"
      fill="#000000"
    />
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} rounded-sm filter drop-shadow-[0_0_10px_rgba(49,120,198,0.85)]`}>
    <rect width="100" height="100" fill="#3178c6" rx="16" />
    <path
      d="M70 70h-9V37h-8v-7h25v7h-8v33zM34.8 55.4c1.2 2.4 3.4 4 6.3 4 3.2 0 5-1.8 5-4.4 0-3.6-3.8-4.8-7.7-6.2-4.8-1.7-10-3.8-10-9.8 0-6 4.7-10.4 11-10.4 5.3 0 9.3 2.3 11 6.8l-6 3.6c-1-2.2-2.7-3.4-5-3.4-2.5 0-4.2 1.4-4.2 3.6 0 3 3.4 4 7 5.3 5.4 2 10.7 4 10.7 10.7 0 6.6-5 11.2-12 11.2-6.5 0-11-3-12.8-8.2z"
      fill="#ffffff"
    />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 110 110" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(55,118,171,0.85)]`}>
    <path
      d="M55.88 5.03c-13.82 0-22.97 1.2-22.97 6.88v9.18h23.53v3.44H23.73c-6.13 0-10.71 4.58-10.71 10.71v18.37c0 6.13 4.58 10.71 10.71 10.71h5.36v-7.65c0-8.44 6.89-15.31 15.31-15.31h22.97V27.97c0-6.13-4.58-10.71-10.71-10.71H55.88v-9.18c0-2.3 1.2-3.06 1.2-3.06z"
      fill="#3776ab"
    />
    <path
      d="M54.12 104.97c13.82 0 22.97-1.2 22.97-6.88v-9.18H53.56v-3.44h32.71c6.13 0 10.71-4.58 10.71-10.71V56.39c0-6.13-4.58-10.71-10.71-10.71h-5.36v7.65c0 8.44-6.89 15.31-15.31 15.31H43.19v23.53c0 6.13 4.58 10.71 10.71 10.71h10.71v9.18s-1.2 3.06-1.2 3.06z"
      fill="#ffd343"
    />
    <circle cx="43" cy="15" r="2.5" fill="#ffffff" />
    <circle cx="67" cy="95" r="2.5" fill="#111111" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={`${iconClass} text-[#00d8ff] animate-spin-slow filter drop-shadow-[0_0_12px_rgba(0,216,255,0.95)]`}>
    <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
    <g stroke="#00d8ff" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 180 180" className={`${iconClass} rounded-full bg-black border border-neutral-700 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]`}>
    <path
      d="M140 135.5L83.5 60h-13v60.5h10.5V74.5l50 67c3.5-6.5 6-13.5 7.5-20.5zM122 60.5h10.5V110H122z"
      fill="#ffffff"
    />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(51,153,51,0.85)]`}>
    <path
      d="M115.4 30.5L68.5 3.5c-2.8-1.6-6.2-1.6-9 0L12.6 30.5C9.8 32.1 8 35.2 8 38.4v54c0 3.2 1.8 6.3 4.6 7.9l46.9 27c2.8 1.6 6.2 1.6 9 0l46.9-27c2.8-1.6 4.6-4.7 4.6-7.9v-54c0-3.2-1.8-6.3-4.6-7.9z"
      fill="#339933"
    />
    <path d="M64 24.3l37.2 21.5v43L64 110.3 26.8 88.8v-43L64 24.3z" fill="#ffffff" opacity="0.25" />
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} rounded-sm filter drop-shadow-[0_0_10px_rgba(16,185,129,0.85)]`}>
    <rect width="100" height="100" fill="#092e20" rx="16" />
    <path d="M25 35h10v18c0 4.4-3.6 8-8 8h-2v-5h2c1.7 0 3-1.3 3-3V40h-5v-5zm18 0h12v5h-7v5h5v5h-5v11h-5V35zm19 0h12v5h-7v5h5v5h-5v6c0 1.7 1.3 3 3 3h2v5h-4c-4.4 0-8-3.6-8-8V35z" fill="#ffffff" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className={`${iconClass} fill-[#38bdf8] filter drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]`}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className={`${iconClass} fill-[#2496ed] filter drop-shadow-[0_0_10px_rgba(36,150,237,0.85)]`}>
    <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.902a.185.185 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.991c0 .102.083.185.185.185m-2.954-5.43h2.118a.185.185 0 0 0 .186-.186V3.47a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.186.185v1.99c0 .102.084.186.186.186m0 2.774h2.118c.103 0 .186-.083.186-.185V6.248a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.186.185v1.99c0 .102.084.186.186.186m-2.953 2.656h2.119a.185.185 0 0 0 .185-.185V8.902a.185.185 0 0 0-.185-.186H8.076a.185.185 0 0 0-.186.186v1.991c0 .102.084.185.186.185m0-2.773h2.119a.185.185 0 0 0 .185-.186V6.248a.185.185 0 0 0-.185-.185H8.076a.185.185 0 0 0-.186.185v1.99c0 .102.084.186.186.186m-2.955 2.773h2.119c.102 0 .185-.083.185-.185V8.902a.185.185 0 0 0-.185-.186H5.121a.185.185 0 0 0-.185.186v1.991c0 .102.083.185.185.185m0-2.773h2.119c.102 0 .185-.083.185-.186V6.248a.185.185 0 0 0-.185-.185H5.121a.185.185 0 0 0-.185.185v1.99c0 .102.083.186.185.186m-2.955 2.773h2.119a.185.185 0 0 0 .185-.185V8.902a.185.185 0 0 0-.185-.186H2.166a.185.185 0 0 0-.185.186v1.991c0 .102.083.185.185.185m-2.955-2.773h2.119a.185.185 0 0 0 .185-.186V6.248a.185.185 0 0 0-.185-.185H2.166a.185.185 0 0 0-.185.185v1.99c0 .102.083.186.185.186m-2.952 5.43h2.119a.185.185 0 0 0 .185-.185v-1.99a.185.185 0 0 0-.185-.186H8.076a.185.185 0 0 0-.186.186v1.99c0 .102.084.185.186.185m12.443-2.97c-.09-.32-.236-.615-.436-.884l-.128-.15c-.244-.27-.58-.456-.98-.553-1.077-.253-1.78-.052-2.3.473-.342.34-.51.785-.506 1.343l.006.126h2.89c.12 0 .227-.08.24-.197.02-.18.156-.3.33-.3.197 0 .324.135.324.33 0 .428-.316.732-.88.732h-4.32a.185.185 0 0 0-.185.186v.44c0 1.25.334 2.186 1 2.802.766.708 2.01.815 3.033.456 1.055-.37 1.833-1.4 2.16-2.83.125-.544.152-1.096.082-1.63M0 12.78c.078.07.153.14.235.208.573.472 1.332.748 2.228.748h18.257c.365 0 .673-.133.918-.363a.185.185 0 0 0 .076-.145c.01-.137.008-.282-.008-.432a.183.183 0 0 0-.083-.128c-.068-.047-.145-.09-.23-.135-.8-.415-1.96-.64-3.4-.64a13.3 13.3 0 0 0-4.045.626 15.6 15.6 0 0 1-5.753.642 16.3 16.3 0 0 1-6.19-1.282A6.6 6.6 0 0 0 0 12.783z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} text-[#f05032] fill-current filter drop-shadow-[0_0_10px_rgba(240,80,50,0.85)]`}>
    <path d="M91.8 42.9L57.1 8.2c-3.6-3.6-9.4-3.6-13 0L33.7 18.6l11 11c2.6-1 5.8-.3 7.9 1.8 2.1 2.1 2.8 5.3 1.8 7.9l11 11c2.6-1 5.8-.3 7.9 1.8 3.1 3.1 3.1 8.1 0 11.2-3.1 3.1-8.1 3.1-11.2 0-2.3-2.3-2.9-5.6-1.8-8.2L49.3 50.4c-1 2.6-.3 5.8 1.8 7.9-2.1 2.1-5.3 2.8-7.9 1.8L32.2 71.1c1 2.6.3 5.8-1.8 7.9-3.1 3.1-8.1 3.1-11.2 0-3.1-3.1-3.1-8.1 0-11.2 2.1-2.1 5.2-2.8 7.8-1.9l10.9-10.9c-1-2.6-.3-5.8 1.8-7.9 1.6-1.6 3.8-2.3 5.9-2.2v-11c-2.1-.2-4.3.5-5.9 2.2L8.2 42.9c-3.6 3.6-3.6 9.4 0 13l34.7 34.7c3.6 3.6 9.4 3.6 13 0l35.9-35.9c3.6-3.6 3.6-9.3 0-12.8z" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 32 32" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,160,0,0.85)]`}>
    <path d="M6.027 24.873L15.314 3.447c.28-.644 1.092-.644 1.372 0l2.366 5.441z" fill="#ffca28" />
    <path d="M6.064 24.847L14.773 8.358c.28-.532 1.036-.532 1.316 0l1.834 3.493z" fill="#ffa000" />
    <path d="M25.973 24.873L16.686 3.447c-.28-.644-1.092-.644-1.372 0l-2.366 5.441z" fill="#f57c00" />
    <path d="M5.8 24.78l10.2-10.2 10.2 10.2c.4.4.4 1.04 0 1.44l-9.48 9.48c-.4.4-1.04.4-1.44 0L5.8 26.22c-.4-.4-.4-1.04 0-1.44z" fill="#ff7043" />
    <path d="M16 31.86c-.28 0-.56-.11-.77-.32L5.75 22.06c-.43-.43-.43-1.12 0-1.55s1.12-.43 1.55 0L16 29.23l8.7-8.72c.43-.43 1.12-.43 1.55 0s.43 1.12 0 1.55l-9.48 9.48c-.21.21-.49.32-.77.32z" fill="#d84315" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 256 154" className={`${iconClass} text-[#ff9900] fill-current filter drop-shadow-[0_0_10px_rgba(255,153,0,0.85)]`}>
    <path d="M228.3 84.1c0 6.6-4.5 13.9-10.9 17.5-12.7 7.1-33.8 6-47.5 1.5-4.2-1.4-4-5.3.6-4.7 13.2 1.7 32 .6 39.8-3 5.4-2.5 7.1-6.1 7.1-10.4 0-6.1-5.1-9.9-17-13.8-21.2-6.8-37.4-15.5-37.4-38.3 0-21.9 18.2-34.9 41-34.9 11.2 0 25.1 3 34.5 7.6 3.9 1.9 3 5.7-.9 4.8-10.2-2.4-22.3-4.5-31.5-4.5-16 0-28.7 8.2-28.7 23.3 0 14.8 11.6 20.8 30.6 26.7 19.3 6.1 39.7 14.5 39.7 33.2zm-97.1-59.8c-1.9-5-6-4.2-9.3-2.1-12.3 8.1-28.7 26.4-37.3 43.1-1.9 3.7.8 5.6 3.3 3.6 9.6-7.8 29.5-27.1 38.3-39.7 1.8-2.6 1.4-5.1-.8-7.3zm-56 30.4c-.6-12.4-9.3-19.3-20.8-19.3-12.7 0-22 8.7-27.2 21.7-4.4 11-5 24.3-5 36.5 0 22.3 11 31.9 29 31.9 8.7 0 17-3 23-8.1 1.7-1.4 3-1 2.2 1.7-1.9 6.5-6.5 13.8-14.8 18.2-7.1 3.7-16.3 5.3-25.1 5.3C15 142.5 0 128.9 0 98.4c0-36.5 19-67 48.6-67 17.5 0 28.7 10 32.3 22 1.1 3.6-2 5.1-4.1 3.1-6.1-5.9-13.9-9.1-23.3-9.1-20.5 0-33.8 17.5-33.8 45.4 0 25.1 11.2 38 29.3 38 12.4 0 22-8.4 25.1-22.3v-23.7c0-6.1-5.4-8.1-11.8-9.1-2.5-.4-2.2-4.1.3-4.1H84c2.5 0 2.2 3.7-.3 4.1-5.1.8-8.4 2.8-8.4 9.1V82c0 2.5 1.9 4.1 4.1 2.4 8.7-6.8 14.5-17.5 16-29.7zm171.6 90c-72.2 47-169 57.6-249.2 26.4-5.6-2.2-11.5 3.3-6.5 7.6 78.5 68 182.2 60.5 258 11.2 4.9-3.2 3.3-8.8-2.3-7.2zm11.8 12.4c-6.8-5.3-22.6-2.5-30.9-1.2-2.2.3-2.1 2.8.2 3.2 7.6 1.4 23.9.9 28.8-4.2.8-.8.2-2-1.9-2.2v4.4z" />
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 512 512" className={`${iconClass} text-[#e34f26] fill-current filter drop-shadow-[0_0_10px_rgba(227,79,38,0.85)]`}>
    <path d="M71 460 L37 0 L475 0 L441 460 L256 512 L71 460 Z" />
    <path fill="#EF652A" d="M256 472 L407 430 L435 40 L256 40 L256 472 Z" />
    <path fill="#EBEBEB" d="M256 208 L181 208 L176 150 L256 150 L256 96 L121 96 L137 262 L256 262 L256 208 Z M256 355 L256 410 L191 392 L187 343 L133 343 L141 430 L256 462 L256 355 Z" />
    <path fill="#FFFFFF" d="M256 208 L256 262 L320 262 L314 329 L256 348 L256 404 L327 384 L338 262 L256 262 Z M256 96 L256 150 L331 150 L336 96 L256 96 Z" />
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 512 512" className={`${iconClass} text-[#1572b6] fill-current filter drop-shadow-[0_0_10px_rgba(21,114,182,0.85)]`}>
    <path d="M71 460 L37 0 L475 0 L441 460 L256 512 L71 460 Z" />
    <path fill="#33A9DC" d="M256 472 L407 430 L435 40 L256 40 L256 472 Z" />
    <path fill="#EBEBEB" d="M256 208 L181 208 L176 150 L256 150 L256 96 L121 96 L137 262 L256 262 L256 208 Z M256 355 L256 410 L191 392 L187 343 L133 343 L141 430 L256 462 L256 355 Z" />
    <path fill="#FFFFFF" d="M256 208 L256 262 L320 262 L314 329 L256 348 L256 404 L327 384 L338 262 L256 262 Z M256 96 L256 150 L331 150 L336 96 L256 96 Z" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} text-[#00758f] fill-current filter drop-shadow-[0_0_10px_rgba(0,117,143,0.85)]`}>
    <path d="M49.1 76.5c-15.1 0-26.6-8.9-26.6-20.9 0-10 8-17.2 18.5-17.2 11.8 0 19.3 8.3 19.3 17.8 0 11.4-8.8 20.3-20.3 20.3-8.1 0-14-5.1-14-11.8 0-6.3 4.7-10.4 10.4-10.4 5.9 0 9.8 4.1 9.8 9.8 0 5.6-4.5 9-9 9-2.3 0-4.1-1.1-4.1-2.9 0-1.8 1.4-2.9 2.9-2.9 1 0 1.8.6 1.8 1.8 0 1.2-.8 1.8-1.8 1.8-2.1 0-3.6-1.8-3.6-4.1 0-2.6 1.9-4.7 4.7-4.7s4.7 1.9 4.7 4.7c0 4.1-3.2 7.2-7.2 7.2s-6.6-3.1-6.6-6.6 2.9-6.6 6.6-6.6 6.6 2.9 6.6 6.6c0 5.9-4.7 10.4-10.4 10.4s-9.8-4.5-9.8-9.8 4.5-9.8 9.8-9.8c8.1 0 14 5.9 14 14s-5.9 14-14 14zm.9 3.5c17.5 0 31.9-14.3 31.9-31.9S67.5 16.2 50 16.2 18.1 30.6 18.1 48.1 32.5 80 50 80z" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(234,45,46,0.85)]`}>
    <path
      d="M37.5 75.8c-2.3 0-4.4-.3-6.4-1-6.8-2.2-9.6-7-9.6-11.8 0-8 8.1-15 16.4-15h2.5c2.3 0 4.4.3 6.4 1 6.8 2.2 9.6 7 9.6 11.8 0 8-8.1 15-16.4 15h-2.5zm0-22c-5.7 0-11.2 5.1-11.2 10.2 0 2.6 1.5 5 4.9 6.1 1.3.4 2.8.7 4.3.7s2.8-.3 4.1-.7c3.4-1.1 4.9-3.5 4.9-6.1 0-5.1-5.5-10.2-11.2-10.2h-1.8z"
      fill="#ea2d2e"
    />
    <path d="M50 43.8c-2.3 0-4.4-.3-6.4-1-6.8-2.2-9.6-7-9.6-11.8 0-8 8.1-15 16.4-15h2.5c2.3 0 4.4.3 6.4 1 6.8 2.2 9.6 7 9.6 11.8 0 8-8.1 15-16.4 15h-2.5z" fill="#007396" />
    <path
      d="M33.2 87.8c-3.1 0-6.1-.5-8.8-1.5-8.6-3.1-12.2-9.6-12.2-16.4 0-11 11-20.7 22.6-20.7h3.4c3.1 0 6.1.5 8.8 1.5 8.6 3.1 12.2 9.6 12.2 16.4 0 11-11 20.7-22.6 20.7h-3.4zm0-32.8c-8 0-16.1 7.1-16.1 14.9 0 4.1 2.3 7.8 7.4 9.6 1.9.7 4.1 1 6.4 1s4.4-.3 6.4-1c5.1-1.8 7.4-5.6 7.4-9.6 0-7.8-8-14.9-16.1-14.9H32z"
      fill="#007396"
    />
  </svg>
);

const PHPIcon = () => (
  <svg viewBox="0 0 100 100" className={`${iconClass} fill-[#777bb4] filter drop-shadow-[0_0_10px_rgba(119,123,180,0.85)]`}>
    <ellipse cx="50" cy="50" rx="45" ry="30" stroke="#777bb4" strokeWidth="2" fill="none" />
    <path d="M32 40h7c4.4 0 7 2 7 5.5s-2.6 5.5-7 5.5h-4v9h-3V40zm3 3v5h4c2.5 0 4-1 4-2.5s-1.5-2.5-4-2.5h-4zm24-3h3v8h7c4.4 0 7 2 7 5.5s-2.6 5.5-7 5.5h-10V40zm3 11h7c2.5 0 4-1 4-2.5s-1.5-2.5-4-2.5h-7v5zm-14-11h3v20h-3V40z" />
  </svg>
);

const CSharpIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(147,51,234,0.85)]`}>
    <path d="M64 8L14 37v54l50 29 50-29V37L64 8z" fill="#35007F" />
    <path
      d="M60 40c-11 0-18 7-18 18s7 18 18 18c5 0 9-2 12-6l-7-5c-2 2-4 3-5 3-5 0-9-3-9-10s4-10 9-10c2 0 4 1 5 3l7-5c-3-4-7-6-12-6zm22 10h5v6h-5v5h-5v-5h-6v-6h6v-5h5v5zm10 5h5v6h-5v5h-5v-5h-6v-6h6v-5h5v5z"
      fill="#ffffff"
    />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(51,103,145,0.85)]`}>
    <path d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8zm0 102c-25.4 0-46-20.6-46-46s20.6-46 46-46 46 20.6 46 46-20.6 46-46 46z" fill="#336791" />
    <path d="M64 34c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#ffffff" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(71,162,72,0.85)]`}>
    <path d="M64 12c-2.4 0-4.3.9-5.7 2.7C46.8 30.6 28 61 28 80.4c0 19.8 16.1 35.6 36 35.6s36-15.8 36-35.6c0-19.4-18.8-49.8-30.3-65.7-1.4-1.8-3.3-2.7-5.7-2.7zm0 94c-13.3 0-24-10.7-24-24 0-12.7 13.6-36.9 24-51.5 10.4 14.6 24 38.8 24 51.5 0 13.3-10.7 24-24 24z" fill="#47A248" />
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(220,56,45,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#DC382D" rx="24" />
    <path d="M36 40h56v16H36zm0 24h56v16H36zm0 24h36v16H36z" fill="#ffffff" />
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(229,53,171,0.85)]`}>
    <path d="M64 12L18 38.5v53L64 116l46-24.5v-53L64 12zm0 18l32 17.5v35L64 97.5 32 82.5v-35L64 30z" fill="#E535AB" />
    <circle cx="64" cy="12" r="10" fill="#E535AB" />
    <circle cx="18" cy="38.5" r="10" fill="#E535AB" />
    <circle cx="110" cy="38.5" r="10" fill="#E535AB" />
    <circle cx="18" cy="91.5" r="10" fill="#E535AB" />
    <circle cx="110" cy="91.5" r="10" fill="#E535AB" />
    <circle cx="64" cy="116" r="10" fill="#E535AB" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(0,89,156,0.85)]`}>
    <path d="M64 8L14 37v54l50 29 50-29V37L64 8z" fill="#00599C" />
    <path d="M50 48c-8 0-14 6-14 16s6 16 14 16c4 0 7-2 9-5l-5-4c-1 2-2 3-4 3-4 0-7-3-7-10s3-10 7-10c2 0 3 1 4 3l5-4c-2-3-5-5-9-5zm18 9h4v6h-4v4h-4v-4h-4v-6h4v-4h4v4zm16 0h4v6h-4v4h-4v-4h-4v-6h4v-4h4v4z" fill="#ffffff" />
  </svg>
);

const RustIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]`}>
    <circle cx="64" cy="64" r="50" stroke="#DEA584" strokeWidth="12" fill="none" />
    <path d="M44 44h24c8 0 14 4 14 12 0 6-4 10-9 11l11 17H70L60 68H54v16H44V44zm10 16h12c3 0 5-1 5-4s-2-4-5-4H54v8z" fill="#DEA584" />
  </svg>
);

const GoIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(0,173,216,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#00ADD8" rx="24" />
    <path d="M34 50c-6 0-10 4-10 14s4 14 10 14c4 0 8-2 10-5v-6H34v-6h16v18c-4 4-10 6-16 6-12 0-20-8-20-21s8-21 20-21c6 0 12 2 16 6l-5 5c-3-3-7-4-11-4zm42 0c-11 0-19 8-19 21s8 21 19 21 19-8 19-21-8-21-19-21zm0 32c-6 0-10-5-10-11s4-11 10-11 10 5 10 11-4 11-10 11z" fill="#ffffff" />
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(2,86,155,0.85)]`}>
    <path d="M72 16L24 64l16 16 64-64H72zm0 48L48 88l24 24h32L80 88l24-24H72z" fill="#02569B" />
    <path d="M80 88l-16 16h32l16-16H80z" fill="#0175C2" />
  </svg>
);

const SwiftIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(240,81,35,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#F05123" rx="24" />
    <path d="M96 90c-16-12-32-8-44 4 14-8 28-4 36 2-18 8-38 0-48-12-8-10-10-24-2-34-4 6-4 14 2 20 8 8 20 12 32 8 8-3 14-8 18-14-4 4-10 8-16 9 12-8 18-20 16-32 8 10 12 22 8 34 8-6 14-14 16-24-2 14-10 26-18 39z" fill="#ffffff" />
  </svg>
);

const KotlinIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(127,82,255,0.85)]`}>
    <path d="M16 112L112 16H16v96z" fill="#7F52FF" />
    <path d="M112 112L64 64 112 16v96z" fill="#C757BC" />
    <path d="M64 64L16 112v-48l48-48" fill="#E44857" />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(65,184,131,0.85)]`}>
    <path d="M78 16L64 40 50 16H16l48 84 48-84H78z" fill="#41B883" />
    <path d="M78 16L64 40 50 16H34l30 52 30-52H78z" fill="#35495E" />
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(221,0,49,0.85)]`}>
    <path d="M64 12L14 30l8 66 42 20 42-20 8-66-50-18zm0 20l24 52h-10l-5-12H55l-5 12H40l24-52zm8 32l-8-18-8 18h16z" fill="#DD0031" />
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,214,0,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#FFD600" rx="24" />
    <path d="M64 24c-12 0-20 10-20 24 0 8 4 16 8 20v24c-6 2-12 6-12 12h48c0-6-6-10-12-12V68c4-4 8-12 8-20 0-14-8-24-20-24z" fill="#000000" />
    <circle cx="56" cy="40" r="3" fill="#ffffff" />
    <circle cx="72" cy="40" r="3" fill="#ffffff" />
    <polygon points="64,48 58,54 70,54" fill="#FF9100" />
  </svg>
);

const K8sIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(50,108,229,0.85)]`}>
    <path d="M64 12L18 38.5v53L64 116l46-24.5v-53L64 12zm0 18l32 17.5v35L64 97.5 32 82.5v-35L64 30z" fill="#326CE5" />
    <circle cx="64" cy="64" r="16" fill="#ffffff" />
  </svg>
);

const NginxIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(0,150,57,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#009639" rx="24" />
    <path d="M40 36v56h12V58l24 34h12V36H76v34L52 36H40z" fill="#ffffff" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(242,78,30,0.85)]`}>
    <circle cx="48" cy="36" r="16" fill="#F24E1E" />
    <circle cx="80" cy="36" r="16" fill="#FF7262" />
    <circle cx="48" cy="64" r="16" fill="#A259FF" />
    <circle cx="80" cy="64" r="16" fill="#1ABCFE" />
    <path d="M32 92c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16z" fill="#0ACF83" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]`}>
    <polygon points="64,20 116,108 12,108" fill="#ffffff" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]`}>
    <path d="M64 12C35.3 12 12 35.3 12 64c0 23 14.9 42.4 35.5 49.3 2.6.5 3.6-1.1 3.6-2.5v-8.8c-14.4 3.1-17.5-6.9-17.5-6.9-2.4-6-5.8-7.6-5.8-7.6-4.7-3.2.4-3.1.4-3.1 5.2.4 7.9 5.3 7.9 5.3 4.6 7.9 12.1 5.6 15.1 4.3.5-3.3 1.8-5.6 3.3-6.9-11.5-1.3-23.6-5.8-23.6-25.6 0-5.6 2-10.3 5.3-13.9-.5-1.3-2.3-6.6.5-13.7 0 0 4.3-1.4 14.2 5.3 4.1-1.1 8.5-1.7 12.9-1.7s8.8.6 12.9 1.7c9.9-6.7 14.2-5.3 14.2-5.3 2.8 7.1 1 12.4.5 13.7 3.3 3.6 5.3 8.3 5.3 13.9 0 19.9-12.1 24.3-23.6 25.6 1.9 1.6 3.5 4.7 3.5 9.5v14.1c0 1.4 1 3.1 3.6 2.5C101.1 106.4 116 87 116 64c0-28.7-23.3-52-52-52z" fill="#ffffff" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(225,48,108,0.85)]`}>
    <defs>
      <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="100%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect width="112" height="112" x="8" y="8" fill="url(#instaGrad)" rx="28" />
    <rect width="64" height="64" x="32" y="32" fill="none" stroke="#ffffff" strokeWidth="7" rx="18" />
    <circle cx="64" cy="64" r="16" fill="none" stroke="#ffffff" strokeWidth="7" />
    <circle cx="82" cy="46" r="4.5" fill="#ffffff" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(24,119,242,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#1877F2" rx="28" />
    <path d="M84 68h-14v44H52V68H42V52h10V40c0-12 7-18 18-18h12v16h-8c-5 0-6 2-6 6v8h14l-2 16z" fill="#ffffff" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(37,211,102,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#25D366" rx="28" />
    <path d="M64 24c-22 0-40 18-40 40 0 7 2 14 5 20L22 106l23-6c6 3 13 5 19 5 22 0 40-18 40-40s-18-40-40-40zm22 55c-1 3-5 5-8 5-2 0-5-1-14-5-12-6-20-18-21-19 0 0-4-6-4-11s3-8 4-9c1-1 3-1 4-1h2c1 0 2 0 3 2s4 10 4 11c0 0 0 1-1 2l-2 3c0 1 2 4 6 7 4 4 8 6 10 7l3-2c1-1 2-1 3 0s7 3 8 4c1 1 1 2 1 3 0 1 0 2-1 3z" fill="#ffffff" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,0,0,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#FF0000" rx="28" />
    <polygon points="52,40 88,64 52,88" fill="#ffffff" />
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(49,168,255,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#001E36" stroke="#31A8FF" strokeWidth="6" rx="24" />
    <path d="M36 44h18c7 0 12 3 12 10s-5 10-12 10H46v20H36V44zm10 12h7c3 0 4-1 4-3s-1-3-4-3h-7v6zm34-12c5 0 9 2 11 6l-6 4c-1-2-3-3-5-3-3 0-5 2-5 5s2 4 6 5c6 2 10 5 10 11s-5 11-12 11c-6 0-11-3-13-8l7-4c1 3 3 5 6 5 3 0 5-2 5-4s-2-4-6-5c-6-2-10-5-10-11s5-10 12-10z" fill="#31A8FF" />
  </svg>
);

const PremiereIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(153,153,255,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#00005B" stroke="#9999FF" strokeWidth="6" rx="24" />
    <path d="M36 44h18c7 0 12 3 12 10s-5 10-12 10H46v20H36V44zm10 12h7c3 0 4-1 4-3s-1-3-4-3h-7v6zm30-12h10c5 0 8 3 8 7 0 3-2 6-5 7l6 14H83l-5-13h-4v13H64V44zm10 10h3c2 0 3-1 3-2s-1-2-3-2h-3v4z" fill="#9999FF" />
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(216,131,255,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#00003E" stroke="#D883FF" strokeWidth="6" rx="24" />
    <path d="M36 84l12-40h10l12 40H70L67 74H53l-3 10H36zm19-18h10l-5-18-5 18zm26-8c0-8 6-14 14-14s14 5 14 13v3H95c0 4 3 6 7 6 3 0 5-1 6-3l5 4c-2 4-6 6-11 6-9 0-15-6-15-15zm14-7c-4 0-6 2-7 5h13c0-3-2-5-6-5z" fill="#D883FF" />
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(0,196,204,0.85)]`}>
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="64" cy="64" r="56" fill="url(#canvaGrad)" />
    <path d="M72 44c-12 0-20 8-20 20s8 20 20 20c7 0 12-3 15-8l-7-5c-2 3-5 5-8 5-6 0-10-4-10-12s4-12 10-12c3 0 6 2 8 5l7-5c-3-5-8-8-15-8z" fill="#ffffff" />
  </svg>
);

const CapCutIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(255,255,255,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#000000" stroke="#ffffff" strokeWidth="4" rx="28" />
    <path d="M36 40l28 24-28 24V40zm56 0L64 64l28 24V40z" fill="#ffffff" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 128 128" className={`${iconClass} filter drop-shadow-[0_0_10px_rgba(236,72,153,0.85)]`}>
    <rect width="112" height="112" x="8" y="8" fill="#EC4899" rx="28" />
    <path d="M44 36l6-10h28l6 10h16c4.4 0 8 3.6 8 8v44c0 4.4-3.6 8-8 8H28c-4.4 0-8-3.6-8-8V44c0-4.4 3.6-8 8-8h16zm20 54c13.3 0 24-10.7 24-24S77.3 42 64 42 40 52.7 40 66s10.7 24 24 24zm0-10c7.7 0 14-6.3 14-14s-6.3-14-14-14-14 6.3-14 14 6.3 14 14 14z" fill="#ffffff" />
  </svg>
);

// Tech Item Data (Diverse Tech Stack & Popular App Icons)
const techItems = [
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "Django", icon: <DjangoIcon /> },
  { name: "Tailwind", icon: <TailwindIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "Firebase", icon: <FirebaseIcon /> },
  { name: "AWS", icon: <AWSIcon /> },
  { name: "HTML5", icon: <HTMLIcon /> },
  { name: "CSS3", icon: <CSSIcon /> },
  { name: "MySQL", icon: <MySQLIcon /> },
  { name: "Java", icon: <JavaIcon /> },
  { name: "PHP", icon: <PHPIcon /> },
  { name: "C#", icon: <CSharpIcon /> },
  { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "Redis", icon: <RedisIcon /> },
  { name: "GraphQL", icon: <GraphQLIcon /> },
  { name: "C++", icon: <CppIcon /> },
  { name: "Rust", icon: <RustIcon /> },
  { name: "Go", icon: <GoIcon /> },
  { name: "Flutter", icon: <FlutterIcon /> },
  { name: "Swift", icon: <SwiftIcon /> },
  { name: "Kotlin", icon: <KotlinIcon /> },
  { name: "Vue.js", icon: <VueIcon /> },
  { name: "Angular", icon: <AngularIcon /> },
  { name: "Linux", icon: <LinuxIcon /> },
  { name: "Kubernetes", icon: <K8sIcon /> },
  { name: "Nginx", icon: <NginxIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
  { name: "Instagram", icon: <InstagramIcon /> },
  { name: "Facebook", icon: <FacebookIcon /> },
  { name: "WhatsApp", icon: <WhatsAppIcon /> },
  { name: "YouTube", icon: <YouTubeIcon /> },
  { name: "Photoshop", icon: <PhotoshopIcon /> },
  { name: "Premiere Pro", icon: <PremiereIcon /> },
  { name: "After Effects", icon: <AfterEffectsIcon /> },
  { name: "CapCut", icon: <CapCutIcon /> },
  { name: "Camera", icon: <CameraIcon /> },
];

// Deterministic pseudo-random generator for hydration-safe random movement
const getPseudoRandom = (seed: number) => {
  const x = Math.sin(seed + 1.618) * 10000;
  return x - Math.floor(x);
};

export default function TechHighwaySection() {
  return (
    <section className="pt-0 pb-0 bg-[#f0f0f0] text-black relative overflow-hidden">
      {/* Container: Original height with safe padding */}
      <div className="w-full bg-black text-white py-10 sm:py-14 border-y-2 border-black -mt-4 sm:-mt-6 lg:-mt-8 relative overflow-hidden flex items-center min-h-[160px] sm:min-h-[190px]">

        {/* ================= MOVING TECH LOGOS LAYER (RANDOM LEFT TO RIGHT, IN FRONT OF DOOR) ================= */}
        <div
          className="absolute inset-0 z-30 overflow-hidden flex items-center pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)",
          }}
        >
          <div className="w-full h-full relative">
            {techItems.map((item, idx) => {
              const r1 = getPseudoRandom(idx * 3 + 1);
              const r2 = getPseudoRandom(idx * 7 + 4);
              const r3 = getPseudoRandom(idx * 13 + 9);

              // Strict round-robin track assignment (0, 1, 2, 0, 1, 2...) for ZERO touching/overlapping
              const trackIndex = idx % 3;
              const targetTrackY = trackIndex === 0 ? "35%" : trackIndex === 1 ? "53%" : "71%";

              // Dynamic initial spawn Y height varying between 48% (thoda upper se) and 62% for natural door emergence
              const spawnYNum = 48 + r3 * 14;
              const initialY = `${spawnYNum.toFixed(1)}%`;

              // Highway duration set to 85.5s so 45 icons emerge at exact 1.90s intervals (85.5s / 45 = 1.90s)
              const duration = 85.5;

              // Negative staggered delays (-progress * duration) so icons are spread evenly with large gaps
              const delayTime = -((idx / techItems.length) * duration);

              // Subtle random scale bounce
              const scaleMax = 1.05 + r1 * 0.15;

              return (
                <motion.div
                  key={idx}
                  className="absolute -translate-y-1/2 flex items-center pointer-events-auto cursor-pointer"
                  initial={{
                    left: "8%",
                    top: initialY,
                    opacity: 1,
                  }}
                  animate={{
                    // X trajectory: Emerges at X: 8% -> Starts fanning into 3 lines at X: 10-12% -> Fully in 3 lines by X: 18% -> Runs to 105%
                    left: ["8%", "10%", "18%", "105%"],
                    top: [initialY, initialY, targetTrackY, targetTrackY],
                    opacity: [1, 1, 1, 1], // Always 100% visible
                    scale: [0.85, 0.95, scaleMax, 0.9],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delayTime,
                    ease: "linear",
                    times: [0, 0.02, 0.12, 1], // Earlier fanning out starting at X: 10%
                  }}
                  whileHover={{
                    scale: 1.35,
                    zIndex: 50,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center justify-center transition-transform duration-300">
                    {item.icon}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* LEFT SIDE TEMPLE RUN GATEWAY OVERLAY (BACKGROUND LAYER z-10) */}
        <div className="absolute left-0 top-0 bottom-0 w-[34%] sm:w-[26%] lg:w-[22%] max-w-[320px] z-10 pointer-events-none flex items-center">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/images/temple_monster_door_subtle_right.jpg"
              alt="Temple Run Gateway"
              className="w-full h-full object-cover opacity-100 contrast-125 brightness-110 relative z-0"
              style={{ objectPosition: "center center" }}
            />
            {/* Gradient mask to blend into the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent 65% to-black z-20" />
            
            {/* Ambient glows inside gateway */}
            <motion.div
              className="absolute w-[18%] h-[24%] rounded-full bg-orange-500/25 blur-md pointer-events-none mix-blend-screen"
              style={{ left: "14%", top: "68%" }}
              animate={{
                scale: [0.9, 1.25, 0.95, 1.15, 0.9],
                opacity: [0.5, 0.85, 0.65, 0.9, 0.5],
              }}
              transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[18%] h-[24%] rounded-full bg-orange-500/25 blur-md pointer-events-none mix-blend-screen"
              style={{ left: "69%", top: "63%" }}
              animate={{
                scale: [0.95, 1.2, 0.9, 1.25, 0.95],
                opacity: [0.5, 0.85, 0.6, 0.9, 0.5],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[24%] h-[32%] rounded-full bg-yellow-500/20 blur-lg pointer-events-none mix-blend-screen"
              style={{ left: "44%", top: "56%" }}
              animate={{
                scale: [0.95, 1.15, 0.9, 1.2, 0.95],
                opacity: [0.4, 0.75, 0.55, 0.85, 0.4],
              }}
              transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
