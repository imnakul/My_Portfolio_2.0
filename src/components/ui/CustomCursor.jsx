import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
   const cursorRef = useRef(null)

   useEffect(() => {
      const customCursor = cursorRef.current

      let mouseX = 0,
         mouseY = 0
      let cursorX = 0,
         cursorY = 0
      let lastX = 0,
         lastY = 0
      let dotOffsetX = 0,
         dotOffsetY = 0

      const followCursor = () => {
         cursorX += (mouseX - cursorX) * 0.2
         cursorY += (mouseY - cursorY) * 0.2

         const velocityX = mouseX - lastX
         const velocityY = mouseY - lastY
         const velocity = Math.sqrt(velocityX ** 2 + velocityY ** 2)

         const maxOffset = Math.min(20, velocity * 0.9)
         const angle = Math.atan2(velocityY, velocityX)

         dotOffsetX = -maxOffset * Math.cos(angle)
         dotOffsetY = -maxOffset * Math.sin(angle)

         dotOffsetX *= Math.max(0.8, 1 - velocity * 0.02)
         dotOffsetY *= Math.max(0.8, 1 - velocity * 0.02)

         customCursor.style.transform = `translate(${cursorX - 11}px, ${
            cursorY - 11
         }px)`
         customCursor.style.setProperty('--dot-offset-x', `${dotOffsetX}px`)
         customCursor.style.setProperty('--dot-offset-y', `${dotOffsetY}px`)

         lastX = mouseX
         lastY = mouseY

         requestAnimationFrame(followCursor)
      }

      const handleMouseMove = (e) => {
         mouseX = e.clientX
         mouseY = e.clientY
      }

      document.addEventListener('mousemove', handleMouseMove)
      followCursor()

      return () => {
         document.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

   const neonPurple = '#D600FF'

   const cursorStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '20px',
      height: '20px',
      border: `2px solid ${neonPurple}`,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      transition: 'transform 0.12s ease',
      boxShadow: `0 0 12px ${neonPurple}, 0 0 24px ${neonPurple}`, // Stronger glow
      pointerEvents: 'none',
      '--dot-offset-x': '0px',
      '--dot-offset-y': '0px',
   }

   const dotStyle = {
      content: "''",
      position: 'fixed',
      top: 'calc(50% + var(--dot-offset-y, 0px))',
      left: 'calc(50% + var(--dot-offset-x, 0px))',
      width: '6px',
      height: '6px',
      backgroundColor: neonPurple,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'transform 0.1s ease-in',
      boxShadow: `0 0 10px ${neonPurple}, 0 0 20px ${neonPurple}`, // Extra glow
   }

   useEffect(() => {
      document.body.style.cursor = 'default'
      return () => {
         document.body.style.cursor = 'auto'
      }
   }, [])

   return (
      <>
         <div ref={cursorRef} style={cursorStyle}>
            <div style={dotStyle}></div>
         </div>
      </>
   )
}

export default CustomCursor
