// import React, { useEffect, useRef } from 'react'

// const CustomCursor = () => {
//    const cursorRef = useRef(null)

//    useEffect(() => {
//       const customCursor = cursorRef.current
//       let mouseX = 0,
//          mouseY = 0
//       let cursorX = 0,
//          cursorY = 0
//       let lastX = 0,
//          lastY = 0
//       let dotOffsetX = 0,
//          dotOffsetY = 0

//       const handleMouseMove = (e) => {
//          mouseX = e.clientX
//          mouseY = e.clientY
//       }

//       const followCursor = () => {
//          cursorX += (mouseX - cursorX) * 0.2
//          cursorY += (mouseY - cursorY) * 0.2

//          const velocityX = mouseX - lastX
//          const velocityY = mouseY - lastY
//          const velocity = Math.sqrt(velocityX ** 2 + velocityY ** 2)

//          const maxOffset = Math.min(20, velocity * 0.9)
//          const angle = Math.atan2(velocityY, velocityX)

//          dotOffsetX =
//             -maxOffset * Math.cos(angle) * Math.max(0.8, 1 - velocity * 0.02)
//          dotOffsetY =
//             -maxOffset * Math.sin(angle) * Math.max(0.8, 1 - velocity * 0.02)

//          customCursor.style.transform = `translate3d(${cursorX - 11}px, ${
//             cursorY - 11
//          }px, 0)`
//          customCursor.style.setProperty('--dot-offset-x', `${dotOffsetX}px`)
//          customCursor.style.setProperty('--dot-offset-y', `${dotOffsetY}px`)

//          lastX = mouseX
//          lastY = mouseY

//          requestAnimationFrame(followCursor)
//       }

//       document.addEventListener('mousemove', handleMouseMove)
//       requestAnimationFrame(followCursor)

//       return () => {
//          document.removeEventListener('mousemove', handleMouseMove)
//       }
//    }, [])

//    useEffect(() => {
//       document.body.style.cursor = 'default'
//       return () => {
//          document.body.style.cursor = 'auto'
//       }
//    }, [])

//    return (
//       <div
//          ref={cursorRef}
//          style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '20px',
//             height: '20px',
//             border: '2px solid #D600FF',
//             borderRadius: '50%',
//             transform: 'translate(-50%, -50%)',
//             zIndex: 1000,
//             transition: 'transform 0.12s ease',
//             boxShadow: '0 0 12px #D600FF, 0 0 24px #D600FF',
//             pointerEvents: 'none',
//             willChange: 'transform', // 🔥 GPU optimization
//          }}
//       >
//          <div
//             style={{
//                content: "''",
//                position: 'fixed',
//                top: 'calc(50% + var(--dot-offset-y, 0px))',
//                left: 'calc(50% + var(--dot-offset-x, 0px))',
//                width: '6px',
//                height: '6px',
//                backgroundColor: '#D600FF',
//                borderRadius: '50%',
//                transform: 'translate(-50%, -50%)',
//                transition: 'transform 0.1s ease-in',
//                boxShadow: '0 0 10px #D600FF, 0 0 20px #D600FF',
//             }}
//          ></div>
//       </div>
//    )
// }

// export default CustomCursor

import { useEffect, useState } from 'react'

const CustomCursor = ({ color = '#d946ef' }) => {
   const [position, setPosition] = useState({ x: 0, y: 0 })

   useEffect(() => {
      const moveCursor = (e) => {
         setPosition({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener('mousemove', moveCursor)
      return () => window.removeEventListener('mousemove', moveCursor)
   }, [])

   return (
      <div
         className='pointer-events-none fixed z-[9999] w-3 h-3 rounded-full'
         style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
         }}
      ></div>
   )
}

export default CustomCursor
