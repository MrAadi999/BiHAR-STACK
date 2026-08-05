"use client";

import React from "react";

interface SolarSystemProps {
  centerTitle?: string;
  className?: string;
}

export default function SolarSystem({ centerTitle = "10X GROWTH", className = "" }: SolarSystemProps) {
  return (
    <div className={`flex items-center justify-center overflow-hidden py-2 ${className}`}>
      <div className="solar-container select-none">
        {/* Dashed orbit track */}
        <div className="orbit-track"></div>

        {/* Rotating light trail */}
        <svg className="orbit-svg" viewBox="0 0 310 310">
          <circle className="orbit-pulse" cx="155" cy="155" r="150" />
        </svg>

        {/* Sun / Center - 10X Growth Node */}
        <div className="sun-node">
          <i className="fa-solid fa-arrow-trend-up"></i>
          <span>{centerTitle}</span>
        </div>

        {/* Orbit ring with 5 planets */}
        <div className="orbit-ring">
          {/* Planet 1: SEO (no moons) */}
          <div className="orbit-item">
            <div className="counter-rotate">
              <div className="planet-wrap">
                <div
                  className="planet-card"
                  style={{ borderColor: "#000000", color: "#000000" }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="planet-label">SEO</div>
            </div>
          </div>

          {/* Planet 2: Digital Marketing (5 moons) */}
          <div className="orbit-item">
            <div className="counter-rotate">
              <div className="planet-wrap">
                <div className="moon-orbit" style={{ animationDuration: "9s" }}>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(0deg) translate(34px) rotate(0deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "9s" }}>
                      <div className="moon-dot" title="Advertise">
                        <i className="fa-solid fa-rectangle-ad" style={{ color: "#2563eb" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(72deg) translate(34px) rotate(-72deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "9s" }}>
                      <div className="moon-dot" title="Social Media">
                        <i className="fa-solid fa-share-nodes" style={{ color: "#2563eb" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(144deg) translate(34px) rotate(-144deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "9s" }}>
                      <div className="moon-dot" title="Management">
                        <i className="fa-solid fa-users-gear" style={{ color: "#2563eb" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(216deg) translate(34px) rotate(-216deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "9s" }}>
                      <div className="moon-dot" title="Lead Generation">
                        <i className="fa-solid fa-magnet" style={{ color: "#2563eb" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(288deg) translate(34px) rotate(-288deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "9s" }}>
                      <div className="moon-dot" title="Performance Marketing">
                        <i className="fa-solid fa-chart-line" style={{ color: "#2563eb" }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="planet-card"
                  style={{ borderColor: "#000000", color: "#2563eb" }}
                >
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
              </div>
              <div className="planet-label">Digital Marketing</div>
            </div>
          </div>

          {/* Planet 3: Creative (4 moons) */}
          <div className="orbit-item">
            <div className="counter-rotate">
              <div className="planet-wrap">
                <div className="moon-orbit" style={{ animationDuration: "7s" }}>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(0deg) translate(34px) rotate(0deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "7s" }}>
                      <div className="moon-dot" title="Poster Design">
                        <i className="fa-solid fa-image" style={{ color: "#db2777" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(90deg) translate(34px) rotate(-90deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "7s" }}>
                      <div className="moon-dot" title="Logo Design">
                        <i className="fa-solid fa-shapes" style={{ color: "#db2777" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(180deg) translate(34px) rotate(-180deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "7s" }}>
                      <div className="moon-dot" title="Video Editing">
                        <i className="fa-solid fa-video" style={{ color: "#db2777" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(270deg) translate(34px) rotate(-270deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "7s" }}>
                      <div className="moon-dot" title="Graphic Design">
                        <i className="fa-solid fa-palette" style={{ color: "#db2777" }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="planet-card"
                  style={{ borderColor: "#000000", color: "#db2777" }}
                >
                  <i className="fa-solid fa-pen-nib"></i>
                </div>
              </div>
              <div className="planet-label">Creative</div>
            </div>
          </div>

          {/* Planet 4: Technology (4 moons) */}
          <div className="orbit-item">
            <div className="counter-rotate">
              <div className="planet-wrap">
                <div className="moon-orbit" style={{ animationDuration: "10s" }}>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(0deg) translate(34px) rotate(0deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "10s" }}>
                      <div className="moon-dot" title="Web Development">
                        <i className="fa-solid fa-code" style={{ color: "#0d9488" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(90deg) translate(34px) rotate(-90deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "10s" }}>
                      <div className="moon-dot" title="App Development">
                        <i className="fa-solid fa-mobile-screen" style={{ color: "#0d9488" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(180deg) translate(34px) rotate(-180deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "10s" }}>
                      <div className="moon-dot" title="E-commerce">
                        <i className="fa-solid fa-cart-shopping" style={{ color: "#0d9488" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(270deg) translate(34px) rotate(-270deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "10s" }}>
                      <div className="moon-dot" title="UI & UX Design">
                        <i className="fa-solid fa-pen-ruler" style={{ color: "#0d9488" }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="planet-card"
                  style={{ borderColor: "#000000", color: "#0d9488" }}
                >
                  <i className="fa-solid fa-display"></i>
                </div>
              </div>
              <div className="planet-label">Technology</div>
            </div>
          </div>

          {/* Planet 5: AI & Automation (3 moons) */}
          <div className="orbit-item">
            <div className="counter-rotate">
              <div className="planet-wrap">
                <div className="moon-orbit" style={{ animationDuration: "6s" }}>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(0deg) translate(34px) rotate(0deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "6s" }}>
                      <div className="moon-dot" title="WhatsApp Automation">
                        <i className="fa-brands fa-whatsapp" style={{ color: "#7c3aed" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(120deg) translate(34px) rotate(-120deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "6s" }}>
                      <div className="moon-dot" title="AI Chatbot">
                        <i className="fa-solid fa-robot" style={{ color: "#7c3aed" }}></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="moon-item"
                    style={{ transform: "rotate(240deg) translate(34px) rotate(-240deg)" }}
                  >
                    <div className="moon-counter" style={{ animationDuration: "6s" }}>
                      <div className="moon-dot" title="AI Call Center">
                        <i className="fa-solid fa-headset" style={{ color: "#7c3aed" }}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="planet-card"
                  style={{ borderColor: "#000000", color: "#7c3aed" }}
                >
                  <i className="fa-solid fa-robot"></i>
                </div>
              </div>
              <div className="planet-label">AI &amp; Automation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
