import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import { isMotionValue } from 'framer-motion'
import Script from 'next/script'
import { GridBeams } from "../components/ui/GridBeams.jsx";
import { OrbitingCircles } from "../components/ui/OrbitingCircles";
import { siSimpleanalytics, siNotepadplusplus } from 'simple-icons'

export default function Home() {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false)
   const [isMobile, setIsMobile] = useState(false)
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

   // Debug: Log video loaded state changes
   // useEffect(() => {
   //    console.log('isVideoLoaded state changed:', isVideoLoaded)
   // }, [isVideoLoaded])

   useEffect(() => {
      setHasMounted(true)
   }, [])

   useEffect(() => {
      // Function to check mobile state
      const checkMobile = () => {
         const mobile = window.innerWidth < 768
         setIsMobile(mobile)
         console.log('isMobile state changed:', mobile, '| window.innerWidth:', window.innerWidth)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)

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
         window.removeEventListener('resize', checkMobile)
      }
   }, [isMobile])

   const mainLinks = [
      {
         name: 'Portfolio',
         href: '/portfolio',
         icon: '🔥',
         description: 'View my projects',
      },
      {
         name: 'Work',
         href: '/products',
         icon: '🚀',
         description: `Software & services I've developed`,
      },
      {
         name: 'Services',
         href: '/services',
         icon: '⚡',
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
               width='40'
               height='40'
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
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='40'
               height='40'
               viewBox='0 0 24 24'
            >
               <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
               >
                  <path d='M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z' />
                  <path d='m3 7l9 6l9-6' />
               </g>
            </svg>
         ),
         title: 'Email',
         external: true,
      },
      {
         name: 'LinkedIn',
         href: 'https://linkedin.com/in/imnakul',
         icon: (
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='40'
               height='40'
               viewBox='0 0 24 24'
            >
               <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  color='currentColor'
               >
                  <path d='M7 10v7m4-4v4m0-4a3 3 0 1 1 6 0v4m-6-4v-3M7.008 7h-.009' />
                  <path d='M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12' />
               </g>
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
            //       <path d='M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109' />
            //       <path d='m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193' />
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
                  d='m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25'
               />
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
            <div className='fixed inset-0 z-0'>
               {/* Video overlay that fades in smoothly */}
               {/* Dark Overlay for better text readability */}
               <div
                  className="absolute inset-0 z-10"
                  style={{
                     backgroundColor: isMobile ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.15)',
                     backgroundImage: isMobile ? `url(${mobileBgUrl})` : 'none',
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                  }}
               />
            </div>

            

            {/* Content */}
            <div className='relative z-20 h-screen flex items-center justify-center px-4'>
               <div className='max-w-md xl:max-w-lg w-full text-center'>
                  {/* Profile Section */}
                  <div className='text-center mb-4'>
                      
                     <div className='relative w-20 h-20 sm:w-24 sm:h-24 xl:h-44 xl:w-44 mx-auto mb-4 sm:mb-6 xl:mb-16'>
                        <button
                           onClick={handleShare}
                           aria-label='Share this page'
                           className='absolute top-2 -left-36 sm:-left-44 z-30 p-1 xl:p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center shadow-md'
                           style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)', willChange: 'transform' }}
                        >
                           {/* Share Icon */}
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
    <path d="M8 7C8 7 10.1958 4.28386 11.4044 3.23889C11.5987 3.0709 11.8169 2.99152 12.0337 3.00072C12.2282 3.00897 12.4215 3.08844 12.5958 3.23912C13.8041 4.28428 16 7 16 7M12.0337 4L12.0337 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8 11C6.59987 11 5.8998 11 5.36502 11.2725C4.89462 11.5122 4.51217 11.8946 4.27248 12.365C4 12.8998 4 13.5999 4 15V16C4 18.357 4 19.5355 4.73223 20.2678C5.46447 21 6.64298 21 9 21H15C17.357 21 18.5355 21 19.2678 20.2678C20 19.5355 20 18.357 20 16V15C20 13.5999 20 12.8998 19.7275 12.365C19.4878 11.8946 19.1054 11.5122 18.635 11.2725C18.1002 11 17.4001 11 16 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                        </button>
                        <div className="hidden lg:block absolute bottom-22 flex w-full flex-col items-center justify-center bg-pink-400">
                        <OrbitingCircles iconSize={30}>
        <Icons.notes />
        <Icons.laptop />
        <Icons.tasks />
        <Icons.desktop />
        <Icons.headphone />
        <Icons.tech />
        <Icons.book />
        <Icons.zap />
        
      </OrbitingCircles>
      </div>
                        <Image
                           src='https://res.cloudinary.com/dp2bzu9e2/image/upload/w_256,h_256,c_fill,q_auto,f_auto/v1756257168/profile_orig_p8ss6s.png'
                           alt='Nakul Srivastava'
                           fill
                           className='rounded-full object-cover ring-2 ring-white/50 shadow-xl'
                           priority
                        />
                     </div>
                     <h1 className='text-3xl sm:text-4xl xl:text-5xl font-bold text-white mb-2 xl:mb-4 tracking-tight'>Nakul Srivastava</h1>
                     <p className='text-base sm:text-xl xl:text-2xl text-gray-200 mb-3 xl:mb-5'>Web Developer | AI Developer | Technophile</p>
                     {/* Social Links - Minimal Icons */}
                     <div className='flex justify-center space-x-4 mb-8'>
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

                  <p className='text-sm xm:text-base lg:text-lg xl:text-lg text-gray-300 mb-4 xl:mb-6'>
                     Freelance Developer | SEO Support | AI Integrations | UI/UX Design | Digital Presence Strategist
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
                              className='bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group'
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
  gitHub: () => (
   //  <svg width="100" height="100" viewBox="0 0 438.549 438.549">
   //    <path
   //      fill="currentColor"
   //      d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
   //    />
   //  </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none">
    <path d="M15.5 7H8.5M12.499 11H8.49902" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
  ),
  notes: () => (
   //  <svg
   //    width="100"
   //    height="100"
   //    viewBox="0 0 100 100"
   //    fill="none"
   //    xmlns="http://www.w3.org/2000/svg"
   //  >
   //    <path
   //      d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
   //      fill="#ffffff"
   //    />
   //    <path
   //      d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
   //      fill="#000000"
   //      fillRule="evenodd"
   //      clipRule="evenodd"
   //    />
   //  </svg>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffffff" fill="none">
    <path d="M15.5 7H8.5M12.499 11H8.49902" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
  tasks: () => (
   //  <svg
   //    width="100"
   //    height="100"
   //    viewBox="0 0 24 24"
   //    xmlns="http://www.w3.org/2000/svg"
   //    className="fill-black dark:fill-white"
   //  >
   //    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
   //  </svg>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M20 16V8C20 5.17157 20 3.75736 19.1213 2.87868C18.2426 2 16.8284 2 14 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V16C4 18.8284 4 20.2426 4.87868 21.1213C5.75736 22 7.17157 22 10 22H14C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16Z" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.5 2H8.5C8.5 3.41421 8.5 4.12132 8.93934 4.56066C9.37868 5 10.0858 5 11.5 5H12.5C13.9142 5 14.6213 5 15.0607 4.56066C15.5 4.12132 15.5 3.41421 15.5 2Z" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M7.5 11L8.5 12L10.5 9.5" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M13 17H16M13 11H16" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.49023 16.8672H8.50023" stroke="#fefefe" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  ),
  laptop: () => (
   //  <svg
   //    width="100"
   //    height="100"
   //    viewBox="0 0 87.3 78"
   //    xmlns="http://www.w3.org/2000/svg"
   //  >
   //    <path
   //      d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
   //      fill="#0066da"
   //    />
   //    <path
   //      d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
   //      fill="#00ac47"
   //    />
   //    <path
   //      d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
   //      fill="#ea4335"
   //    />
   //    <path
   //      d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
   //      fill="#00832d"
   //    />
   //    <path
   //      d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
   //      fill="#2684fc"
   //    />
   //    <path
   //      d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
   //      fill="#ffba00"
   //    />
   //  </svg>
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
zap: () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#ffffff" fill="none">
    <path d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"></path>
</svg>
)
};