// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const COLORS = [
  "#ffdc7b",
  "#ffd6a5",
  "#ff7ab6",
  "#ffd166",
  "#ffeead",
  "#ff9f1c",
  "#7ad0ff",
  "#7bffb3",
  "#b77bff",
  "#ff7b7b",
];

const DiwaliModal = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const [flash, setFlash] = useState(0); // lighting intensity for overlay

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const fireworks = [];
    const particles = [];

    const rand = (min, max) => Math.random() * (max - min) + min;

    const onResize = () => {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    };
    window.addEventListener("resize", onResize);

    const spawnFirework = (tx = rand(0.2 * w, 0.8 * w), ty = rand(0.15 * h, 0.5 * h)) => {
      fireworks.push({
        x: rand(w * 0.1, w * 0.9),
        y: h + 10,
        tx,
        ty,
        speed: rand(6, 10),
        life: 0,
        hue: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const explode = (x, y, color) => {
      setFlash((v) => Math.min(1, v + 0.95));
      const count = Math.floor(rand(30, 100));
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = rand(1.2, 6);
        const hue = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          decay: rand(0.01, 0.035),
          color: Math.random() > 0.85 ? `white` : hue,
          alpha: 1,
          size: 2 + Math.random() * 3,
        });
      }
    };

    const onPointerDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;
      spawnFirework(x, y);
      mouseRef.current.isDown = true;
    };
    const onPointerUp = () => (mouseRef.current.isDown = false);
    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    const autoInterval = setInterval(() => {
      if (mouseRef.current.isDown) {
        spawnFirework(rand(w * 0.2, w * 0.8), rand(h * 0.1, h * 0.45));
        spawnFirework(rand(w * 0.2, w * 0.8), rand(h * 0.05, h * 0.45));
      } else {
        if (Math.random() < 0.75) spawnFirework();
      }
    }, 600);

    const animate = () => {
      // softer trail so background is slightly visible
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.fillRect(0, 0, w, h);

      // rockets
      for (let i = fireworks.length - 1; i >= 0; i--) {
        const f = fireworks[i];
        const dx = f.tx - f.x;
        const dy = f.ty - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const vx = (dx / dist) * f.speed;
        const vy = (dy / dist) * f.speed;
        f.x += vx;
        f.y += vy;
        f.life += 1;

        ctx.beginPath();
        ctx.fillStyle = f.hue;
        ctx.globalCompositeOperation = "lighter";
        ctx.arc(f.x, f.y, 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = f.hue;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(f.x - vx * 1.2, f.y - vy * 1.2);
        ctx.lineTo(f.x, f.y);
        ctx.stroke();

        if (dist < 8 || f.life > 120) {
          explode(f.x, f.y, f.hue);
          fireworks.splice(i, 1);
        }
      }

      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.06; // gravity
        p.vx *= 0.995;
        p.vy *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        p.life += p.decay;
        p.alpha = Math.max(0, 1 - p.life);

        if (p.alpha <= 0.01 || p.y > h + 50) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.size || 3, 0, Math.PI * 2);
        ctx.fill();

        // soft halo
        ctx.globalAlpha = p.alpha * 0.6;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.size || 3) * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // small sparkles at mouse
      if (mouseRef.current.isDown) {
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = "#fff8e1";
        ctx.beginPath();
        ctx.arc(mouseRef.current.x || w / 2, mouseRef.current.y || h / 2, 3 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // decay flash
      setFlash((v) => Math.max(0, v - 0.025));

      rafRef.current = requestAnimationFrame(animate);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
      mouseRef.current.y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top;
    };
    canvas.addEventListener("pointermove", onPointerMove);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(autoInterval);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, [isOpen]);

  const overlayStyle = {
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    zIndex: 25,
    mixBlendMode: "screen",
    background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,220,130,${Math.min(
      0.7,
      0.25 + flash * 0.7
    )}) 0px, rgba(255,120,180,${Math.min(0.32, flash * 0.28)}) 180px, rgba(120,200,255,${Math.min(
      0.18,
      flash * 0.12
    )}) 360px, transparent 600px)`,
    transition: "background 120ms linear",
  };

  useEffect(() => {
    const onMove = (e) => {
      const el = canvasRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mx = ((e.clientX ?? e.touches?.[0]?.clientX) - rect.left) + "px";
      const my = ((e.clientY ?? e.touches?.[0]?.clientY) - rect.top) + "px";
      el.style.setProperty("--mx", mx);
      el.style.setProperty("--my", my);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        // clicking backdrop closes modal; inner container stops propagation
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "rgba(2,6,23,0.48)", // slightly transparent so home is visible
            backdropFilter: "blur(6px)",
          }}
          onClick={() => onClose && onClose()}
        >
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden border border-white/6"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            style={{ background: "rgba(8,10,20,0.25)" }} // slightly translucent container
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full block"
              style={{ display: "block", zIndex: 10, opacity: 0.98 }}
            />
            <div style={overlayStyle} aria-hidden="true" />

            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center p-6">
              <h1
                className="text-68xl md:text-7xl font-extrabold text-amber-200 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]
"
                style={{ textShadow: "0 0 22px rgba(255,255,255,0.7)" }}
              >
                Happy Diwali!
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-200/95">
                Lighting up the skies — from the team at{" "}
                <strong className="text-white">WishAlpha</strong>
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onClose && onClose();
              }}
              className="absolute top-4 right-4 z-40 bg-white/12 hover:bg-white/22 rounded-full p-3 text-white backdrop-blur-sm border border-white/10"
              aria-label="Close"
              title="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiwaliModal;
// ...existing code...