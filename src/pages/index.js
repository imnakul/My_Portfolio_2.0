import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import { isMotionValue } from 'framer-motion'
import Script from 'next/script'
import { GridBeams } from "../components/ui/GridBeams.jsx";
import { OrbitingCircles } from "../components/ui/OrbitingCircles";

export default function Home() {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false)
   const [isMobile, setIsMobile] = useState(false)
   const [radius, setRadius] = useState(100)
   const [iconSize, setIconSize] = useState(30)
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
   const [hasMounted, setHasMounted] = useState(false)

   // Share button logic
   const handleShare = async () => {
      const shareData = {
         title: 'Nakul Srivastava | Portfolio',
         text: "Check out Nakul Srivastava's portfolio!",
         url: typeof window !== 'undefined' ? window.location.href : 'https://devnakul.me',
      }
      if (navigator.share) {
         try {
            await navigator.share(shareData)
         } catch (err) {
            // User cancelled or error
         }
      } else if (navigator.clipboard) {
         try {
            await navigator.clipboard.writeText(shareData.url)
            alert('Link copied to clipboard!')
         } catch (err) {
            alert('Failed to copy link.')
         }
      } else {
         alert('Share not supported.')
      }
   }

   // Function to get radius based on screen size
   const getRadius = () => {
      if (window.innerWidth < 640) return 50; // Small screens
      if (window.innerWidth < 768) return 50; // Medium screens
      if (window.innerWidth < 1024) return 80; // Large screens
      return 100; // Extra large screens
   }

   const getIconSize = () => {
      if (window.innerWidth < 640) return 20; // Small screens
      if (window.innerWidth < 768) return 24; // Medium screens
      if (window.innerWidth < 1024) return 28; // Large screens
      return 30; // Extra large screens
   }

   // Debug: Log video loaded state changes
   // useEffect(() => {
   //    console.log('isVideoLoaded state changed:', isVideoLoaded)
   // }, [isVideoLoaded])

   useEffect(() => {
      setHasMounted(true)
   }, [])

   useEffect(() => {
      // Function to check mobile state and set radius
      const checkMobileAndRadius = () => {
         const mobile = window.innerWidth < 768
         setIsMobile(mobile)
         setRadius(getRadius())
         setIconSize(getIconSize())
         // console.log('isMobile state changed:', mobile, '| window.innerWidth:', window.innerWidth, '| radius:', getRadius())
      }
      checkMobileAndRadius()
      window.addEventListener('resize', checkMobileAndRadius)

      // Handle video load with better error handling
      const video = document.querySelector('#background-video')
      if (video) {
         video.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully (loadeddata)')
            setIsVideoLoaded(true)
         })
         video.addEventListener('canplay', () => {
            console.log('Video can start playing (canplay)')
            setIsVideoLoaded(true) // Also set loaded state here
         })
         video.addEventListener('canplaythrough', () => {
            console.log('Video can play through without stopping (canplaythrough)')
            setIsVideoLoaded(true) // Also set loaded state here
         })
         video.addEventListener('error', (e) => {
            console.error('Video failed to load:', e)
            console.error('Video error details:', e.target.error)
            setIsVideoLoaded(false)
         })
         video.addEventListener('loadstart', () => {
            console.log('Video loading started')
         })
         // Disable context menu on video
         video.addEventListener('contextmenu', (e) => e.preventDefault())
      }

      // Mouse movement for subtle parallax effect with GPU acceleration
      const handleMouseMove = (e) => {
         if (!isMobile) {
            const xPercent = (e.clientX / window.innerWidth - 0.5) * 2 // -1 to 1
            const yPercent = (e.clientY / window.innerHeight - 0.5) * 2 // -1 to 1

            setMousePosition({
               x: xPercent * 10, // Reduced movement for subtlety
               y: yPercent * 10,
            })
         }
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => {
         window.removeEventListener('mousemove', handleMouseMove)
         window.removeEventListener('resize', checkMobileAndRadius)
      }
   }, [isMobile])

   const mainLinks = [
      {
         name: 'Portfolio',
         href: '/portfolio',
         icon: 

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M3 20C3 16.134 6.13401 13 10 13C11.275 13 12.4704 13.3409 13.5 13.9365" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M18.1047 14.5055L18.7206 15.7475C18.8046 15.9204 19.0286 16.0862 19.2175 16.118L20.3339 16.305C21.0478 16.425 21.2158 16.9472 20.7014 17.4624L19.8335 18.3374C19.6865 18.4856 19.606 18.7715 19.6515 18.9761L19.9 20.0594C20.096 20.9168 19.6445 21.2485 18.8921 20.8004L17.8457 20.1758C17.6567 20.0629 17.3453 20.0629 17.1528 20.1758L16.1064 20.8004C15.3575 21.2485 14.9025 20.9133 15.0985 20.0594L15.347 18.9761C15.3925 18.7715 15.312 18.4856 15.165 18.3374L14.2971 17.4624C13.7861 16.9472 13.9506 16.425 14.6646 16.305L15.7809 16.118C15.9664 16.0862 16.1904 15.9204 16.2744 15.7475L16.8903 14.5055C17.2263 13.8315 17.7722 13.8315 18.1047 14.5055Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>,
         description: 'View my projects',
      },
      {
         name: 'Work',
         href: '/products',
         icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M2 14C2 11.1911 2 9.78661 2.67412 8.77772C2.96596 8.34096 3.34096 7.96596 3.77772 7.67412C4.78661 7 6.19108 7 9 7H15C17.8089 7 19.2134 7 20.2223 7.67412C20.659 7.96596 21.034 8.34096 21.3259 8.77772C22 9.78661 22 11.1911 22 14C22 16.8089 22 18.2134 21.3259 19.2223C21.034 19.659 20.659 20.034 20.2223 20.3259C19.2134 21 17.8089 21 15 21H9C6.19108 21 4.78661 21 3.77772 20.3259C3.34096 20.034 2.96596 19.659 2.67412 19.2223C2 18.2134 2 16.8089 2 14Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M16 7C16 5.11438 16 4.17157 15.4142 3.58579C14.8284 3 13.8856 3 12 3C10.1144 3 9.17157 3 8.58579 3.58579C8 4.17157 8 5.11438 8 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6 11L6.65197 11.202C10.0851 12.266 13.9149 12.266 17.348 11.202L18 11M12 12V14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>,
         description: `Software & services I've developed`,
      },
      {
         name: 'Services',
         href: '/services',
         icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M19.4173 15.7133C23.368 10.7038 22.3007 5.73508 19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801L11.9998 4.84158M19.4173 15.7133C18.469 16.9156 17.2317 18.1204 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.22172 13.2749 1.01807 6.15293 4.53744 3.99415C7.21909 2.34923 9.55962 3.01211 10.9656 4.06801L11.9998 4.84158M19.4173 15.7133L13.8921 9.44479C13.6659 9.1882 13.2873 9.13296 12.9972 9.31424L10.8111 10.6806C10.0418 11.1614 9.04334 11.0532 8.3949 10.4187C7.53837 9.58062 7.62479 8.17769 8.5777 7.45106L11.9998 4.84158" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>,
         description: 'Development services',
      },
   ]

   const socialLinks = [
      {
         name: 'Telegram',
         href: 'https://t.me/i_m_nakul',
         icon: (
            // <svg
            //    xmlns='http://www.w3.org/2000/svg'
            //    width='40'
            //    height='40'
            //    viewBox='0 0 24 24'
            // >
            //    <g
            //       fill='currentColor'
            //       fillRule='evenodd'
            //       clipRule='evenodd'
            //    >
            //       <path d='M17.045 8.937A1.47 1.47 0 0 0 15.03 7.35l-8.503 3.515c-1.078.446-.92 2.02.226 2.242l1.591.308c.441.085.899.005 1.284-.226l.464-.277a1.18 1.18 0 0 0 .425 1.53l3.65 2.288a1.176 1.176 0 0 0 1.787-.816zm-5.904 4.51l3.03-2.905c.54-.517-.114-1.373-.755-.99l-4.392 2.629a.65.65 0 0 1-.456.08l-1.591-.308l8.502-3.515a.294.294 0 0 1 .403.317l-1.09 6.979z' />
            //       <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.176 12a8.824 8.824 0 1 1 17.648 0a8.824 8.824 0 0 1-17.648 0' />
            //    </g>
            // </svg>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='38'
               height='38'
               viewBox='0 0 24 24'
            >
               <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724'
                  color='currentColor'
               />
            </svg>
         ),
         title: 'Telegram',
         external: true,
      },
      // {
      //    name: 'Whatsapp',
      //    href: 'https://github.com/nakuldevmv',
      //    icon: (
      //       <svg
      //          xmlns='http://www.w3.org/2000/svg'
      //          width='40'
      //          height='40'
      //          viewBox='0 0 24 24'
      //       >
      //          <path
      //             fill='currentColor'
      //             d='M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4'
      //          />
      //       </svg>
      //    ),
      //    title: 'Whatsapp',
      //    external: true,
      // },
      {
         name: 'Peerlist',
         href: 'https://peerlist.io/imnakul',
         icon: (
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='38'
               height='38'
               viewBox='0 0 24 24'
            >
               <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
               >
                  <path d='M8.87 3h6.26a6 6 0 0 1 5.963 5.337l.21 1.896c.131 1.174.131 2.36 0 3.534l-.21 1.896A6 6 0 0 1 15.13 21H8.87a6 6 0 0 1-5.963-5.337l-.21-1.896a16 16 0 0 1 0-3.534l.21-1.896A6 6 0 0 1 8.87 3' />
                  <path d='M9 17v-4m0 0V7h4a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3z' />
               </g>
            </svg>
         ),
         title: 'Peerlist',
         external: true,
      },
      {
         name: 'Email',
         href: 'mailto:imnakul44@gmail.com',
         icon: (
            // <svg
            //    xmlns='http://www.w3.org/2000/svg'
            //    width='40'
            //    height='40'
            //    viewBox='0 0 24 24'
            // >
            //    <g
            //       fill='none'
            //       stroke='currentColor'
            //       strokeLinecap='round'
            //       strokeLinejoin='round'
            //       strokeWidth='2'
            //    >
            //       <path d='M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z' />
            //       <path d='m3 7l9 6l9-6' />
            //    </g>
            // </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="currentColor" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
</svg>
         ),
         title: 'Email',
         external: true,
      },
      {
         name: 'LinkedIn',
         href: 'https://linkedin.com/in/imnakul',
         icon: (
            // <svg
            //    xmlns='http://www.w3.org/2000/svg'
            //    width='40'
            //    height='40'
            //    viewBox='0 0 24 24'
            // >
            //    <g
            //       fill='none'
            //       stroke='currentColor'
            //       strokeLinecap='round'
            //       strokeLinejoin='round'
            //       strokeWidth='1.5'
            //       color='currentColor'
            //    >
            //       <path d='M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009' />
            //       <path d='M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12' />
            //    </g>
            // </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="currentColor" fill="none">
    <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
</svg>
         ),
         title: 'LinkedIn',
         external: true,
      },
      {
         name: 'Twitter',
         href: 'https://x.com/imnakul_1',
         icon: (
            
            // <svg
            //    xmlns='http://www.w3.org/2000/svg'
            //    width='38'
            //    height='38'
            //    viewBox='0 0 24 24'
            // >
            //    <path
            //       fill='none'
            //       stroke='currentColor'
            //       strokeLinecap='round'
            //       strokeLinejoin='round'
            //       strokeWidth='1.5'
            //       d='m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25'
            //    />
            // </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" color="currentColor" fill="none">
    <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
         ),
         title: 'Twitter',
         external: true,
      },
   ]

   const mobileBgUrl = 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1751878316/d6169a44dca4553e0da618fa86acbe6c_avgxmu.jpg'

   return (
      <>
         <Head>
            <title>Nakul Srivastava | Web Developer & AI Developer | Portfolio & Products</title>
            <meta
               name='description'
               content='Nakul Srivastava - Full-stack web developer specializing in Next.js, AI integration, and modern web applications. Explore my portfolio and digital solutions.'
            />
            <meta
               name='keywords'
               content='Nakul Srivastava, web developer, full stack developer, Next.js developer, Gen AI Developer, freelance developer, frontend developer, tools enthusiast, techy, technology lover, devotee'
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link
               rel='icon'
               href='/finallogo.png'
            />
            <link
               rel='canonical'
               href='https://devnakul.me'
            />

            {/* Open Graph Tags for Social Media Shareability */}
            <meta
               property='og:type'
               content='website'
            />
            <meta
               property='og:site_name'
               content='Nakul Srivastava - Portfolio'
            />
            <meta
               property='og:title'
               content='Nakul Srivastava | Full Stack Developer & AI Developer'
            />
            <meta
               property='og:description'
               content='Professional web developer specializing in Next.js, AI integration, and modern web applications. View my portfolio, products, and services.'
            />
            <meta
               property='og:image'
               content='https://devnakul.me/profile.jpg'
            />
            <meta
               property='og:image:width'
               content='1200'
            />
            <meta
               property='og:image:height'
               content='630'
            />
            <meta
               property='og:image:alt'
               content='Nakul Srivastava - Full Stack Developer & AI Developer'
            />
            <meta
               property='og:url'
               content='https://devnakul.me'
            />
            <meta
               property='og:locale'
               content='en_US'
            />

            {/* Twitter Card Tags */}
            <meta
               name='twitter:card'
               content='summary_large_image'
            />
            <meta
               name='twitter:site'
               content='@nakuldevmv'
            />
            <meta
               name='twitter:creator'
               content='@nakuldevmv'
            />
            <meta
               name='twitter:title'
               content='Nakul Srivastava | Full Stack Developer & AI Developer'
            />
            <meta
               name='twitter:description'
               content='Professional web developer specializing in Next.js, AI integration, and modern web applications.'
            />
            <meta
               name='twitter:image'
               content='https://devnakul.me/profile.jpg'
            />

            {/* Preload critical resources */}
            <link
               rel='preload'
               as='image'
               href='https://res.cloudinary.com/dp2bzu9e2/image/upload/w_800,q_auto,f_auto/v1751717507/jahanzeb-ahsan-R-Em8KTiSis-unsplash_e9btvy.jpg'
               media='(max-width: 767px)'
            />
            <link
               rel='preload'
               as='image'
               href='https://res.cloudinary.com/dp2bzu9e2/image/upload/w_1600,q_auto,f_auto/v1751846759/ss2_egehcj_62a517.png'
               media='(min-width: 768px)'
            />
         </Head>

         {/* Google tag (gtag.js) */}
         <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-P4718BFDQP'
            strategy='lazyOnload'
         ></Script>
         <Script
            id='google-analytics-inline'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
               __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4718BFDQP');
            `,
            }}
         />

<GridBeams>
         <div className='h-screen relative overflow-hidden'>
            
            {/* Optimized Video Background */}
            {/* <div className='fixed inset-0 z-0'> */}
               {/* Video overlay that fades in smoothly */}
               {/* Dark Overlay for better text readability */}
               {/* <div
                  className="absolute inset-0 z-10"
                  style={{
                     backgroundColor: isMobile ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.15)',
                     backgroundImage: isMobile ? `url(${mobileBgUrl})` : 'none',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                  }}
               /> */}
            {/* </div> */}

            

            {/* Content */}
            <div className='relative z-20 h-screen flex items-center justify-center px-4'>
               <div className='max-w-md xl:max-w-lg w-full text-center'>
                  {/* Profile Section */}
                  <div className='text-center mb-4'>
                      
                     <div className='relative w-24 h-24 xl:h-44 xl:w-44 mx-auto mb-4 sm:mb-6 xl:mb-16'>
                        <button
                           onClick={handleShare}
                           aria-label='Share this page'
                           className='absolute top-0 -left-36 sm:-left-44 z-30 p-1 xl:p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center shadow-md'
                           style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)', willChange: 'transform' }}
                        >
                           {/* Share Icon */}
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
    <path d="M8 7C8 7 10.1958 4.28386 11.4044 3.23889C11.5987 3.0709 11.8169 2.99152 12.0337 3.00072C12.2282 3.00897 12.4215 3.08844 12.5958 3.23912C13.8041 4.28428 16 7 16 7M12.0337 4L12.0337 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8 11C6.59987 11 5.8998 11 5.36502 11.2725C4.89462 11.5122 4.51217 11.8946 4.27248 12.365C4 12.8998 4 13.5999 4 15V16C4 18.357 4 19.5355 4.73223 20.2678C5.46447 21 6.64298 21 9 21H15C17.357 21 18.5355 21 19.2678 20.2678C20 19.5355 20 18.357 20 16V15C20 13.5999 20 12.8998 19.7275 12.365C19.4878 11.8946 19.1054 11.5122 18.635 11.2725C18.1002 11 17.4001 11 16 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                        </button>
                        <div className="block absolute bottom-12 lg:bottom-22 flex w-full flex-col items-center justify-center ">
                        <OrbitingCircles iconSize={iconSize} radius={radius}>
        <Icons.notes />
        <Icons.laptop />
        <Icons.tasks />
        {/* <Icons.zap /> */}
        <Icons.desktop />
        <Icons.headphone />
        <Icons.tech />
        <Icons.book />
        <Icons.idea />
        
        
      </OrbitingCircles>
      </div>
                        <Image
                           src='https://res.cloudinary.com/dp2bzu9e2/image/upload/w_256,h_256,c_fill,q_auto,f_auto/v1756257168/profile_orig_p8ss6s.png'
                           alt='Nakul Srivastava'
                           fill
                           className='rounded-full object-cover ring-2 ring-white/50 shadow-xl'
                           priority
                           fetchPriority='high'
                        />
                     </div>
                     <h1 className='text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-2 xl:mb-4 tracking-tight pt-8 lg:pt-0'>Nakul Srivastava</h1>
                     <p className='text-base sm:text-xl xl:text-2xl text-gray-200 mb-3 xl:mb-5'>Web Developer | AI Developer | Technophile</p>
                     {/* Social Links - Minimal Icons */}
                     <div className='flex justify-center space-x-4 mb-4 lg:mb-8'>
                        {socialLinks.map((link) => (
                           <a
                              key={link.name}
                              href={link.href}
                              target={link.external ? '_blank' : '_self'}
                              rel={link.external ? 'noopener noreferrer' : undefined}
                              className='backdrop-blur-sm text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group'
                              title={link.name}
                              style={{ willChange: 'transform' }}
                           >
                              <div
                                 className='group-hover:scale-110 transition-transform duration-200'
                                 style={{ willChange: 'transform' }}
                              >
                                 {link.icon}
                              </div>
                           </a>
                        ))}
                     </div>
                  </div>

                  <p className='text-sm xm:text-base lg:text-lg xl:text-lg text-gray-300 mb-1'>
                     Freelance Developer | AI Integrations | SEO Support | 
                  </p>
                  <p className='text-sm xm:text-base lg:text-lg xl:text-lg text-gray-300 mb-4 xl:mb-6'>
                    UI/UX Design | Digital Presence Strategist 
                  </p>

                  {/* Main Links - Only Portfolio, Products, Services */}
                  <div className='space-y-4 xl:space-y-6 mb-4 xl:mb-6'>
                     {mainLinks.map((link) => (
                        <Link
                           key={link.name}
                           href={link.href}
                           className='block'
                           style={{ willChange: 'transform' }}
                        >
                           <div
                              className='bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group'
                              style={{ willChange: 'transform' }}
                           >
                              <div className='flex items-center justify-between'>
                                 <div className='flex items-center space-x-3'>
                                    <span
                                       className='text-2xl group-hover:scale-110 transition-transform duration-200'
                                       style={{ willChange: 'transform' }}
                                    >
                                       {link.icon}
                                    </span>
                                    <div className='text-left'>
                                       <h3 className='text-white font-bold text-xl xl:text-2xl tracking-wide'>{link.name}</h3>
                                       <p className='text-gray-300 text-sm xl:text-base leading-relaxed'>{link.description || ''}</p>
                                    </div>
                                 </div>
                                 <svg
                                    className='w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    style={{ willChange: 'transform' }}
                                 >
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       strokeWidth={2}
                                       d='M9 5l7 7-7 7'
                                    />
                                 </svg>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>

                  {/* Footer */}
                  {/* <div className='text-center'>
                     <p className='text-gray-400 text-xs'>© {new Date().getFullYear()} Nakul Srivastava</p>
                  </div> */}
               </div>
            </div>
            
         </div>
         </GridBeams>
      </>
   )
}

const Icons = {
  
  notes: () => (
   
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffffff" fill="none">
    <path d="M15.5 7H8.5M12.499 11H8.49902" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
  tasks: () => (
   
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M20 16V8C20 5.17157 20 3.75736 19.1213 2.87868C18.2426 2 16.8284 2 14 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16Z" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.5 2H8.5C8.5 3.41421 8.5 4.12132 8.93934 4.56066C9.37868 5 10.0858 5 11.5 5H12.5C13.9142 5 14.6213 5 15.0607 4.56066C15.5 4.12132 15.5 3.41421 15.5 2Z" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M7.5 11L8.5 12L10.5 9.5" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M13 17H16M13 11H16" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.49023 16.8672H8.50023" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
  laptop: () => (
   
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.5 7L16.4199 7.79289C16.8066 8.12623 17 8.29289 17 8.5C17 8.70711 16.8066 8.87377 16.4199 9.20711L15.5 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.5 7L7.58009 7.79289C7.19337 8.12623 7 8.29289 7 8.5C7 8.70711 7.19336 8.87377 7.58009 9.20711L8.5 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M13 6L11 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
  desktop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M12 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V9C2 6.17157 2 4.75736 2.87868 3.87868C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.87868C21.9466 4.70398 21.9968 6.00173 21.9998 8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M16 14V18C16 19.4142 16 20.1213 16.4393 20.5607C16.8787 21 17.5858 21 19 21C20.4142 21 21.1213 21 21.5607 20.5607C22 20.1213 22 19.4142 22 18V14C22 12.5858 22 11.8787 21.5607 11.4393C21.1213 11 20.4142 11 19 11C17.5858 11 16.8787 11 16.4393 11.4393C16 11.8787 16 12.5858 16 14Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10 21H8M10 21C10.8284 21 11.5 20.3284 11.5 19.5V17L12 17M10 21H12.5V17L12 17M12 17V21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
headphone: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M20.0849 17C20.5849 15.5 21 13.4368 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4368 3.41512 15.5 3.91512 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.97651 19.6043L7.23857 14.6127C7.05341 14.1466 6.4617 13.9131 5.97493 14.0297C4.46441 14.5333 3.6462 16.1718 4.14742 17.6895L4.58543 19.0158C5.08664 20.5334 6.71747 21.3555 8.22799 20.8519C8.68896 20.6556 9.10449 20.0897 8.97651 19.6043Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.0235 19.6043L16.7614 14.6127C16.9466 14.1466 17.5383 13.9131 18.0251 14.0297C19.5356 14.5333 20.3538 16.1718 19.8526 17.6895L19.4146 19.0158C18.9134 20.5334 17.2825 21.3555 15.772 20.8519C15.311 20.6556 14.8955 20.0897 15.0235 19.6043Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
),
tech: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
    <path d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
    <circle cx="12" cy="3.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <circle cx="12" cy="20.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <circle cx="3.5" cy="7.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <circle cx="20.5" cy="7.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <circle cx="20.5" cy="16.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <circle cx="3.5" cy="16.5" r="1.5" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></circle>
    <path d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
</svg>
),
book: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M17.5055 2.01874C12.8289 2.83455 12 7.5 12 7.5V22C12 22 12.8867 17.1272 18.0004 16.5588C18.5493 16.4978 19 16.0576 19 15.5058V3.39309C19 2.5654 18.3216 1.87638 17.5055 2.01874Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M5.33333 5.00001C7.79379 4.99657 10.1685 5.88709 12 7.5V22C10.1685 20.3871 7.79379 19.4966 5.33333 19.5C3.77132 19.5 2.99032 19.5 2.64526 19.2792C2.4381 19.1466 2.35346 19.0619 2.22086 18.8547C2 18.5097 2 17.8941 2 16.6629V8.40322C2 6.97543 2 6.26154 2.54874 5.68286C3.09748 5.10418 3.65923 5.07432 4.78272 5.0146C4.965 5.00491 5.14858 5.00001 5.33333 5.00001Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 22.001C13.8315 20.3881 16.2062 19.4976 18.6667 19.501C20.2287 19.501 21.0097 19.501 21.3547 19.2802C21.5619 19.1476 21.6465 19.0629 21.7791 18.8558C22 18.5107 22 17.8951 22 16.6639V8.40424C22 6.97645 22 6.26256 21.4513 5.68388C20.9025 5.1052 20.1235 5.05972 19 5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
),
idea: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M19 9.62069C19 12.1999 17.7302 14.1852 15.7983 15.4917C15.3483 15.796 15.1233 15.9482 15.0122 16.1212C14.9012 16.2942 14.8633 16.5214 14.7876 16.9757L14.7287 17.3288C14.5957 18.127 14.5292 18.526 14.2494 18.763C13.9697 19 13.5651 19 12.7559 19H10.1444C9.33528 19 8.93069 19 8.65095 18.763C8.3712 18.526 8.30469 18.127 8.17166 17.3288L8.11281 16.9757C8.03734 16.5229 7.99961 16.2965 7.88968 16.1243C7.77976 15.9521 7.55428 15.798 7.10332 15.4897C5.1919 14.1832 4 12.1986 4 9.62069C4 5.4119 7.35786 2 11.5 2C12.0137 2 12.5153 2.05248 13 2.15244" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.5 2L16.7579 2.69703C17.0961 3.61102 17.2652 4.06802 17.5986 4.40139C17.932 4.73477 18.389 4.90387 19.303 5.24208L20 5.5L19.303 5.75792C18.389 6.09613 17.932 6.26524 17.5986 6.59861C17.2652 6.93198 17.0961 7.38898 16.7579 8.30297L16.5 9L16.2421 8.30297C15.9039 7.38898 15.7348 6.93198 15.4014 6.59861C15.068 6.26524 14.611 6.09613 13.697 5.75792L13 5.5L13.697 5.24208C14.611 4.90387 15.068 4.73477 15.4014 4.40139C15.7348 4.06802 15.9039 3.61102 16.2421 2.69703L16.5 2Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M13.5 19V20C13.5 20.9428 13.5 21.4142 13.2071 21.7071C12.9142 22 12.4428 22 11.5 22C10.5572 22 10.0858 22 9.79289 21.7071C9.5 21.4142 9.5 20.9428 9.5 20V19" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round" />
</svg>
),
zap: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
</svg>
)
};