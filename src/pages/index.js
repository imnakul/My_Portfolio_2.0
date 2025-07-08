import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import { isMotionValue } from 'framer-motion'
import Script from 'next/script'

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
         name: 'Products',
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

   return (
      <>
         <Head>
            <title>Nakul Srivastava | Web Developer & AI Engineer | Portfolio & Products</title>
            <meta
               name='description'
               content='Nakul Srivastava - Full-stack web developer specializing in Next.js, AI integration, and modern web applications. Explore my portfolio and digital solutions.'
            />
            <meta
               name='keywords'
               content='Nakul Srivastava, web developer, full stack developer, Next.js developer, Gen AI engineer, freelance developer, frontend developer, tools enthusiast, techy, technology lover, devotee'
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link
               rel='icon'
               href='/logo2.svg'
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
               content='Nakul Srivastava | Full Stack Developer & AI Engineer'
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
               content='Nakul Srivastava - Full Stack Developer & AI Engineer'
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
               content='Nakul Srivastava | Full Stack Developer & AI Engineer'
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
         ></Script>
         <Script
            id='google-analytics-inline'
            dangerouslySetInnerHTML={{
               __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4718BFDQP');
            `,
            }}
         />

         <div className='h-screen relative overflow-hidden bg-hero'>
            {/* Optimized Video Background */}
            <div className='fixed inset-0 z-0'>
               {/* Video overlay that fades in smoothly */}
               {hasMounted && !isMobile && (
                  <video
                     id='background-video'
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                        isVideoLoaded ? 'opacity-100' : 'opacity-0'
                     }`}
                     style={{
                        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(1.05)`,
                        transition: 'transform 0.1s ease-out, opacity 1s ease-in-out',
                        willChange: 'transform, opacity',
                     }}
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload='metadata'
                     onContextMenu={(e) => e.preventDefault()}
                     controlsList='nodownload'
                     disablePictureInPicture
                     onLoadedData={() => {
                        console.log('Video onLoadedData callback fired')
                        setIsVideoLoaded(true)
                     }}
                     onCanPlay={() => {
                        console.log('Video onCanPlay callback fired')
                        setIsVideoLoaded(true)
                     }}
                  >
                     <source
                        src='https://res.cloudinary.com/dp2bzu9e2/video/upload/v1751718171/The_City_In_The_Rain_fdmraq.mp4'
                        // src='/c.mp4'
                        type='video/mp4'
                     />
                  </video>
               )}

               {/* Dark Overlay for better text readability */}
               <div className={`absolute inset-0 z-10 ${isMobile ? 'bg-black/40' : 'bg-black/15'} `} />
            </div>

            {/* Content */}
            <div className='relative z-20 h-screen flex items-center justify-center px-4'>
               <div className='max-w-md w-full text-center'>
                  {/* Profile Section */}
                  <div className='text-center mb-4'>
                     <div className='relative w-24 h-24 mx-auto mb-6'>
                        <button
                           onClick={handleShare}
                           aria-label='Share this page'
                           className='absolute top-2 -left-36 sm:-left-44 z-30 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center shadow-md'
                           style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)', willChange: 'transform' }}
                        >
                           {/* Share Icon */}
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 16 16'
                           >
                              <path
                                 fill='currentColor'
                                 d='M3 6.81v6.38c0 .493.448.9.992.9h7.016c.543 0 .992-.406.992-.9V6.81c0-.493-.448-.9-.992-.9H3.992c-.543 0-.992.406-.992.9M6 5v.91h3V5h2.008C12.108 5 13 5.818 13 6.81v6.38c0 1-.9 1.81-1.992 1.81H3.992C2.892 15 2 14.182 2 13.19V6.81C2 5.81 2.9 5 3.992 5zm1.997-3.552A.506.506 0 0 1 8 1.5v8a.5.5 0 0 1-1 0v-8a.51.51 0 0 1 0-.017L5.18 3.394a.52.52 0 0 1-.77 0a.617.617 0 0 1 0-.829L6.36.515a1.552 1.552 0 0 1 2.31 0l1.95 2.05a.617.617 0 0 1 0 .83a.52.52 0 0 1-.77 0z'
                              />
                           </svg>
                        </button>
                        <Image
                           src='https://res.cloudinary.com/dp2bzu9e2/image/upload/w_256,h_256,c_fill,q_auto,f_auto/v1751677501/profile_1_aoltbw.png'
                           alt='Nakul Srivastava'
                           fill
                           className='rounded-full object-cover ring-2 ring-white/50 shadow-xl'
                           priority
                        />
                     </div>
                     <h1 className='text-4xl font-bold text-white mb-2 tracking-tight'>Nakul Srivastava</h1>
                     <p className='text-xl text-gray-200 mb-3'>Web Developer | Gen AI Engineer</p>
                     {/* Social Links - Minimal Icons */}
                     <div className='flex justify-center space-x-4 mb-6'>
                        {socialLinks.map((link) => (
                           <a
                              key={link.name}
                              href={link.href}
                              target={link.external ? '_blank' : '_self'}
                              rel={link.external ? 'noopener noreferrer' : undefined}
                              className='backdrop-blur-sm  text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group'
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

                  <p className='text-sm text-gray-300 mb-4'>
                     Freelance Developer | SEO Support | AI Integrations | UI/UX Design | Digital Presence Strategist
                  </p>

                  {/* Main Links - Only Portfolio, Products, Services */}
                  <div className='space-y-4 mb-8'>
                     {mainLinks.map((link) => (
                        <Link
                           key={link.name}
                           href={link.href}
                           className='block'
                           style={{ willChange: 'transform' }}
                        >
                           <div
                              className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group'
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
                                       <h3 className='text-white font-bold text-xl tracking-wide'>{link.name}</h3>
                                       <p className='text-gray-300 text-sm leading-relaxed'>{link.description || ''}</p>
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
      </>
   )
}
