"use client";
import { useEffect, useRef } from "react";

const ParticleBackground = ({
  particleCount = 100,
  particleColor = "#9E00FF",
  particleSize = 2,
  speed = 0.5,
  linkDistance = 150,
  linkColor = "#2EB9DF",
  linkOpacity = 0.1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * speed * 2 - speed,
          vy: Math.random() * speed * 2 - speed,
          size: Math.random() * particleSize + 1,
          color: particleColor,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            ctx.beginPath();
            ctx.strokeStyle = linkColor;
            ctx.globalAlpha = linkOpacity * (1 - distance / linkDistance);
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Initialize
    resizeCanvas();
    createParticles();
    drawParticles();

    // Handle window resize
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    particleCount,
    particleColor,
    particleSize,
    speed,
    linkDistance,
    linkColor,
    linkOpacity,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full"
      data-oid=".16.-fl"
    />
  );
};

export default ParticleBackground;
