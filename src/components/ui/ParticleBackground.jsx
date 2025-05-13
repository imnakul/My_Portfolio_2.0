'use client'
import { useEffect, useRef } from 'react'

const isMobile = () =>
  typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)

const ParticleBackground = ({
   particleCount = 100,
   particleColor = '#9E00FF',
   particleSize = 2,
   speed = 0.5,
   linkDistance = 150,
   linkColor = '#8a11d4',
   linkOpacity = 0.3,
}) => {
   const canvasRef = useRef(null)
   const particlesRef = useRef([])
   const animationRef = useRef()
   const resizeTimeout = useRef()

   // Debounced resize handler
   const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      resizeTimeout.current = setTimeout(() => {
         const canvas = canvasRef.current
         if (!canvas) return
         canvas.width = window.innerWidth
         canvas.height = window.innerHeight
         createParticles()
      }, 100)
   }

   const createParticles = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const count = isMobile() ? Math.max(20, Math.floor(particleCount / 3)) : particleCount
      particlesRef.current = []
      for (let i = 0; i < count; i++) {
         particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * speed * 2 - speed,
            vy: Math.random() * speed * 2 - speed,
            size: Math.random() * particleSize + 1,
            color: particleColor,
         })
      }
   }

   const drawParticles = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
         const particle = particles[i]
         particle.x += particle.vx
         particle.y += particle.vy
         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
         ctx.beginPath()
         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
         ctx.fillStyle = particle.color
         ctx.fill()
         for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x
            const dy = particles[j].y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < linkDistance) {
               ctx.beginPath()
               ctx.strokeStyle = linkColor
               ctx.globalAlpha = linkOpacity * (1 - distance / linkDistance)
               ctx.lineWidth = 1
               ctx.moveTo(particle.x, particle.y)
               ctx.lineTo(particles[j].x, particles[j].y)
               ctx.stroke()
               ctx.globalAlpha = 1
            }
         }
      }
      animationRef.current = requestAnimationFrame(drawParticles)
   }

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
      drawParticles()
      window.addEventListener('resize', handleResize)
      return () => {
         cancelAnimationFrame(animationRef.current)
         window.removeEventListener('resize', handleResize)
         if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      }
      // eslint-disable-next-line
   }, [particleCount, particleColor, particleSize, speed, linkDistance, linkColor, linkOpacity])

   return (
      <canvas
         ref={canvasRef}
         className='fixed inset-0 z-0 w-full h-full'
         data-oid='.16.-fl'
      />
   )
}

export default ParticleBackground
