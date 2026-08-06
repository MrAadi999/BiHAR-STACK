"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Megaphone, Palette, Code2, Cpu } from "lucide-react";

interface WhoWeAreSphereProps {
  activeHover: string | null;
  setActiveHover: (id: string | null) => void;
}

const LABELS = [
  { id: "marketing", name: "MARKETING", icon: Megaphone, position: "top-2 left-2 sm:left-6" },
  { id: "creative", name: "CREATIVE", icon: Palette, position: "top-2 right-2 sm:right-6" },
  { id: "technology", name: "TECHNOLOGY", icon: Code2, position: "bottom-10 left-2 sm:left-6" },
  { id: "ai", name: "AI", icon: Cpu, position: "bottom-10 right-2 sm:right-6" },
];

export default function WhoWeAreSphere({ activeHover, setActiveHover }: WhoWeAreSphereProps) {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);
  const sphereMeshRef = useRef<THREE.Group | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const pointsMeshRef = useRef<THREE.Points | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    let renderer: THREE.WebGLRenderer | undefined;
    let animationFrameId: number | undefined;
    let handleMouseMove: ((e: MouseEvent) => void) | undefined;
    let handleResize: (() => void) | undefined;

    try {
      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 7;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Master Group for 3D sphere
      const masterGroup = new THREE.Group();
      scene.add(masterGroup);
      sphereMeshRef.current = masterGroup;

      // 1. Geodesic Outer Nodes & Wireframe Sphere (Sharp dark contrast for GAZU Light theme)
      const sphereGeometry = new THREE.IcosahedronGeometry(2.1, 3);

      // Wireframe Material
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireframeMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
      masterGroup.add(wireframeMesh);

      // Node Points at Geometry Vertices
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0x2563eb,
        size: 0.08,
        transparent: true,
        opacity: 0.9,
      });
      const pointsMesh = new THREE.Points(sphereGeometry, pointsMaterial);
      masterGroup.add(pointsMesh);
      pointsMeshRef.current = pointsMesh;

      // 2. Inner Core Sphere
      const coreGeometry = new THREE.IcosahedronGeometry(1.4, 2);
      const coreMaterial = new THREE.MeshPhongMaterial({
        color: 0x171717,
        emissive: 0x2563eb,
        emissiveIntensity: 0.5,
        shininess: 90,
        wireframe: false,
        transparent: true,
        opacity: 0.85,
      });
      const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
      masterGroup.add(coreMesh);
      coreMeshRef.current = coreMesh;

      // 3. Orbiting Rings / Latitude Lines
      const ringGeo = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 });
      const ring1 = new THREE.Mesh(ringGeo, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      ring1.rotation.y = Math.PI / 6;
      masterGroup.add(ring1);

      const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.4 });
      const ring2 = new THREE.Mesh(ringGeo, ringMat2);
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = Math.PI / 3;
      masterGroup.add(ring2);

      // 4. Floating Particle Cloud Surround
      const particleCount = 260;
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const radius = 2.4 + Math.random() * 1.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x171717,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
      });
      const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
      masterGroup.add(particleCloud);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0x2563eb, 3, 20);
      pointLight.position.set(3, 3, 4);
      scene.add(pointLight);
      lightRef.current = pointLight;

      const darkLight = new THREE.PointLight(0x000000, 2.5, 20);
      darkLight.position.set(-3, -3, 2);
      scene.add(darkLight);

      // Mouse Move Parallax Handler
      handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current.targetX = x * 0.45;
        mouseRef.current.targetY = y * 0.45;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Handle Window Resize
      handleResize = () => {
        if (!container || !camera || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse interpolation
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        if (masterGroup) {
          masterGroup.rotation.y = elapsedTime * 0.18 + mouseRef.current.x;
          masterGroup.rotation.x = Math.sin(elapsedTime * 0.12) * 0.15 + mouseRef.current.y;
        }

        if (ring1) ring1.rotation.z = elapsedTime * 0.25;
        if (ring2) ring2.rotation.z = -elapsedTime * 0.2;
        if (particleCloud) particleCloud.rotation.y = -elapsedTime * 0.08;

        if (renderer) renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    } catch (e) {
      console.warn("WebGL not supported, falling back to CSS animation:", e);
      setHasWebGLError(true);
    }

    return () => {
      if (animationFrameId !== undefined) cancelAnimationFrame(animationFrameId);
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (renderer) {
        if (container && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
    };
  }, []);

  // React to Hover state changes (Glow pulse and intensity boost)
  useEffect(() => {
    if (!coreMeshRef.current || !lightRef.current || !pointsMeshRef.current) return;

    if (activeHover) {
      coreMeshRef.current.scale.set(1.18, 1.18, 1.18);
      (coreMeshRef.current.material as THREE.MeshPhongMaterial).emissiveIntensity = 1.2;
      (pointsMeshRef.current.material as THREE.PointsMaterial).size = 0.1;
      lightRef.current.intensity = 5;
    } else {
      coreMeshRef.current.scale.set(1, 1, 1);
      (coreMeshRef.current.material as THREE.MeshPhongMaterial).emissiveIntensity = 0.5;
      (pointsMeshRef.current.material as THREE.PointsMaterial).size = 0.08;
      lightRef.current.intensity = 3;
    }
  }, [activeHover]);

  return (
    <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background Subtle Light Orbs */}
      <div className="absolute inset-0 bg-radial from-neutral-300/40 via-neutral-200/20 to-transparent blur-2xl rounded-full pointer-events-none transform scale-90 animate-pulse-slow" />

      {/* Center 3D Canvas Mount / CSS Fallback */}
      {hasWebGLError ? (
        <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] relative z-10 flex items-center justify-center select-none pointer-events-none">
          {/* Inner core */}
          <div 
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-md opacity-60 transition-all duration-500 ${
              activeHover ? "scale-125 opacity-85 shadow-[0_0_35px_rgba(6,182,212,0.5)]" : "scale-100"
            }`}
            style={{
              animation: "pulse 3s ease-in-out infinite alternate"
            }}
          />
          {/* Outer ring 1 */}
          <div 
            className="absolute w-48 h-48 border border-dashed border-cyan-400/40 rounded-full" 
            style={{ animation: "spin 16s linear infinite" }}
          />
          {/* Outer ring 2 */}
          <div 
            className="absolute w-56 h-56 border border-dashed border-blue-500/30 rounded-full" 
            style={{ animation: "spin-reverse 20s linear infinite" }}
          />
          
          {/* Nodes representation */}
          <div className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-xs top-16 left-16 animate-ping" />
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-16 left-16" />
          <div className="absolute w-2 h-2 bg-cyan-300 rounded-full bottom-16 right-20 animate-pulse" />
        </div>
      ) : (
        <div ref={mountRef} className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing" />
      )}

      {/* SVG Connecting Vector Lines matching site theme */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
        {/* Top Left - MARKETING */}
        <path
          d="M 50% 50% Q 30% 25% 18% 12%"
          stroke={activeHover === "marketing" ? "#000000" : "rgba(0, 0, 0, 0.25)"}
          strokeWidth={activeHover === "marketing" ? "3" : "1.5"}
          strokeDasharray={activeHover === "marketing" ? "6 3" : "none"}
          fill="none"
          className="transition-all duration-500"
        />
        {/* Top Right - CREATIVE */}
        <path
          d="M 50% 50% Q 70% 25% 82% 12%"
          stroke={activeHover === "creative" ? "#000000" : "rgba(0, 0, 0, 0.25)"}
          strokeWidth={activeHover === "creative" ? "3" : "1.5"}
          strokeDasharray={activeHover === "creative" ? "6 3" : "none"}
          fill="none"
          className="transition-all duration-500"
        />
        {/* Bottom Left - TECHNOLOGY */}
        <path
          d="M 50% 50% Q 30% 75% 18% 85%"
          stroke={activeHover === "technology" ? "#000000" : "rgba(0, 0, 0, 0.25)"}
          strokeWidth={activeHover === "technology" ? "3" : "1.5"}
          strokeDasharray={activeHover === "technology" ? "6 3" : "none"}
          fill="none"
          className="transition-all duration-500"
        />
        {/* Bottom Right - AI */}
        <path
          d="M 50% 50% Q 70% 75% 82% 85%"
          stroke={activeHover === "ai" ? "#000000" : "rgba(0, 0, 0, 0.25)"}
          strokeWidth={activeHover === "ai" ? "3" : "1.5"}
          strokeDasharray={activeHover === "ai" ? "6 3" : "none"}
          fill="none"
          className="transition-all duration-500"
        />
      </svg>

      {/* 4 Interactive Floating Labels with Neo-Brutalist GAZU Style */}
      {LABELS.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeHover === item.id;

        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActiveHover(item.id)}
            onMouseLeave={() => setActiveHover(null)}
            className={`absolute ${item.position} z-30 cursor-pointer select-none`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: isActive ? 1.12 : 1 }}
            whileHover={{ scale: 1.12, y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className={`flex items-center gap-2.5 px-4 py-2.5 border-2 transition-all duration-300 ${
                isActive
                  ? "bg-black text-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100"
              }`}
            >
              <div
                className={`p-1.5 transition-colors ${
                  isActive ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase font-display">{item.name}</span>

              {/* Indicator dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isActive ? "bg-white" : "bg-black"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isActive ? "bg-white" : "bg-black"
                  }`}
                />
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
