import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const COLORS = [
  "#ffdc7b", "#ffd6a5", "#ff7ab6", "#ffd166", "#ffeead", "#ff9f1c",
  "#7ad0ff", "#7bffb3", "#b77bff", "#ff7b7b", "#ffd700", "#7fffd4",
  "#ff6b9d", "#95e1d3", "#f9ca24", "#6c5ce7", "#00cec9", "#fd79a8"
];

const DiwaliModal = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const [flash, setFlash] = useState(0);

  const launchSoundRef = useRef(null);
  const explosionSoundRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      launchSoundRef.current = new Audio('/sounds/firework.mp3');
      explosionSoundRef.current = new Audio('/sounds/firework-explosion.mp3');
      
      launchSoundRef.current.volume = 0.3;
      explosionSoundRef.current.volume = 0.5;
      
      launchSoundRef.current.preload = 'auto';
      explosionSoundRef.current.preload = 'auto';
    }
    
    return () => {
      if (launchSoundRef.current) {
        launchSoundRef.current.pause();
        launchSoundRef.current = null;
      }
      if (explosionSoundRef.current) {
        explosionSoundRef.current.pause();
        explosionSoundRef.current = null;
      }
    };
  }, [isOpen]);

  const playSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play().catch(e => {
        console.log('Audio play prevented:', e);
      });
    }
  };

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
      playSound(launchSoundRef);
      
      fireworks.push({
        x: rand(w * 0.1, w * 0.9),
        y: h + 10,
        tx,
        ty,
        speed: rand(6, 10),
        angle: Math.atan2(ty - (h + 10), tx - rand(w * 0.1, w * 0.9)),
        life: 0,
        hue: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const explode = (x, y, color) => {
      playSound(explosionSoundRef);
      
      setFlash((v) => Math.min(1, v + 0.8)); 
      const count = Math.floor(rand(15, 35)); 
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = rand(1, 6); 
        const particleColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          decay: rand(0.015, 0.035),
          color: particleColor,
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
        if (Math.random() < 0.8) spawnFirework(rand(w * 0.2, w * 0.8), rand(h * 0.1, h * 0.5));
      } else {
        if (Math.random() < 0.4) spawnFirework();
      }
    }, 1200); 

    const animate = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; 
      ctx.fillRect(0, 0, w, h);

      for (let i = fireworks.length - 1; i >= 0; i--) {
        const f = fireworks[i];
        const dx = f.tx - f.x;
        const dy = f.ty - f.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const vx = (dx / dist) * f.speed;
        const vy = (dy / dist) * f.speed;
        f.x += vx;
        f.y += vy;
        f.life += 1;

        ctx.beginPath();
        ctx.fillStyle = f.hue;
        ctx.globalCompositeOperation = "lighter";
        ctx.arc(f.x, f.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `${f.hue}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(f.x - vx * 1.5, f.y - vy * 1.5);
        ctx.lineTo(f.x, f.y);
        ctx.stroke();

        if (dist < 8 || f.life > 120) {
          explode(f.x, f.y, f.hue);
          fireworks.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.06;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.life += p.decay;
        p.alpha = Math.max(0, 1 - p.life);

        if (p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.size || 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = p.alpha * 0.5;
        ctx.arc(p.x, p.y, (p.size || 3) * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (mouseRef.current.isDown) {
        ctx.globalCompositeOperation = "lighter";
        const sparkleColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        ctx.fillStyle = sparkleColor;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // decay flash
      setFlash((v) => {
        const nv = Math.max(0, v - 0.025);
        return nv;
      });

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
    background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), 
      rgba(255,220,130,${Math.min(0.5, 0.2 + flash * 0.5)}) 0px, 
      rgba(255,120,180,${Math.min(0.3, flash * 0.3)}) 120px,
      rgba(120,200,255,${Math.min(0.2, flash * 0.2)}) 240px,
      rgba(180,255,120,${Math.min(0.15, flash * 0.15)}) 360px,
      transparent 500px)`,
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.92), rgba(6,8,15,0.98))",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] rounded-lg overflow-hidden border border-white/5">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full block bg-black"
              style={{ display: "block", zIndex: 10 }}
            />
            <div style={overlayStyle} aria-hidden="true" />

            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center p-6 pointer-events-none">
              <h1
                className="text-7xl md:text-8xl lg:text-8xl font-extrabold text-amber-300 drop-shadow-[0_12px_40px_rgba(255,180,40,0.35)]"
                style={{ 
                  textShadow: "0 0 30px rgba(255,185,60,0.9), 0 0 60px rgba(255,140,200,0.5), 0 0 120px rgba(255,100,150,0.3)",
                  WebkitTextStroke: "1px rgba(255,220,140,0.4)"
                }}
              >
                Happy Diwali!
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-200/95">
                "Let the light of learning shine bright — Happy Diwali from <strong className="text-white">WishAlpha</strong>!"
              </p>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-40 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white backdrop-blur-sm"
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