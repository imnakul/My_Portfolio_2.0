import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false)
   const [isMobile, setIsMobile] = useState(false)
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

   // Debug: Log video loaded state changes
   useEffect(() => {
      console.log('isVideoLoaded state changed:', isVideoLoaded)
   }, [isVideoLoaded])

   useEffect(() => {
      // Check if mobile device
      setIsMobile(window.innerWidth < 768)

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

      // Mouse movement for subtle parallax effect
      const handleMouseMove = (e) => {
         if (!isMobile) {
            setMousePosition({
               x: (e.clientX / window.innerWidth - 0.5) * 15,
               y: (e.clientY / window.innerHeight - 0.5) * 15,
            })
         }
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
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
         description: '',
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
         name: 'LinkedIn',
         href: 'https://linkedin.com/in/nakul-srivastava',
         icon: (
            <svg
               className='w-5 h-5'
               fill='currentColor'
               viewBox='0 0 24 24'
            >
               <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
         ),
         external: true,
      },
      {
         name: 'GitHub',
         href: 'https://github.com/nakuldevmv',
         icon: (
            <svg
               className='w-5 h-5'
               fill='currentColor'
               viewBox='0 0 24 24'
            >
               <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
         ),
         external: true,
      },
      {
         name: 'Resume',
         href: '/resume.pdf',
         icon: (
            <svg
               className='w-5 h-5'
               fill='currentColor'
               viewBox='0 0 24 24'
            >
               <path d='M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z' />
            </svg>
         ),
         external: true,
      },
      {
         name: 'Email',
         href: 'mailto:nakul@devnakul.me',
         icon: (
            <svg
               className='w-5 h-5'
               fill='currentColor'
               viewBox='0 0 24 24'
            >
               <path d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' />
            </svg>
         ),
         external: true,
      },
   ]

   return (
      <>
         <Head>
            <title>Nakul Srivastava - Web Developer & AI Engineer</title>
            <meta
               name='description'
               content='Nakul Srivastava - Full-stack developer specializing in Next.js, AI integration, and modern web applications.'
            />
            <meta
               name='keywords'
               content='Nakul Srivastava, web developer, full stack developer, Next.js developer, AI engineer, freelance developer'
            />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link
               rel='icon'
               href='/favicon.ico'
            />
            <link
               rel='canonical'
               href='https://devnakul.me'
            />

            {/* Open Graph */}
            <meta
               property='og:title'
               content='Nakul Srivastava - Full Stack Developer'
            />
            <meta
               property='og:description'
               content='Web Developer, Next.js Gen AI Engineer'
            />
            <meta
               property='og:image'
               content='/profile.jpg'
            />
            <meta
               property='og:url'
               content='https://devnakul.me'
            />

            {/* Preload critical resources */}
            <link
               rel='preload'
               href='/profile.jpg'
               as='image'
            />
         </Head>

         <div className='h-screen relative overflow-hidden bg-gray-900'>
            {/* Optimized Video Background */}
            <div className='fixed inset-0 z-0'>
               <video
                  id='background-video'
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${
                     isVideoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                     transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
                     transition: 'transform 0.3s ease-out',
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='metadata'
                  poster='/bg2.jpg'
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
                     src='https://res.cloudinary.com/dp2bzu9e2/video/upload/v1751628860/4_gvvtc8.mp4'
                     type='video/mp4'
                  />
                  {/* https://res.cloudinary.com/dp2bzu9e2/video/upload/v1751626408/c_ymlq4r.mp4 */}
               </video>

               {/* Dark Overlay for better text readability */}
               <div className='absolute inset-0 bg-black/20' />
            </div>

            {/* Content */}
            <div className='relative z-10 h-screen flex items-center justify-center px-4'>
               <div className='max-w-md w-full text-center'>
                  {/* Profile Section */}
                  <div className='text-center mb-6'>
                     <div className='relative top-2 w-28 h-28 mx-auto mb-6'>
                        <Image
                           src='/profile.png'
                           alt='Nakul Srivastava'
                           fill
                           className='rounded-full object-cover ring-4 ring-white/40 shadow-xl'
                           priority
                        />
                     </div>
                     <h1 className='text-4xl font-bold text-white mb-2 tracking-tight'>Nakul Srivastava</h1>
                     <p className='text-xl text-gray-200 mb-2'>Web Developer | Next.js Gen AI Engineer</p>
                     <p className='text-sm text-gray-300'>
                        Freelance Developer | SEO | AI Integration | UI/UX | Digital Presence
                     </p>
                  </div>

                  {/* Main Links - Only Portfolio, Products, Services */}
                  <div className='space-y-4 mb-8'>
                     {mainLinks.map((link) => (
                        <Link
                           key={link.name}
                           href={link.href}
                           className='block'
                        >
                           <div className='bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group'>
                              <div className='flex items-center justify-between'>
                                 <div className='flex items-center space-x-3'>
                                    <span className='text-2xl group-hover:scale-110 transition-transform duration-200'>
                                       {link.icon}
                                    </span>
                                    <div className='text-left'>
                                       <h3 className='text-white font-bold text-xl tracking-wide'>{link.name}</h3>
                                       <p className='text-gray-300 text-sm leading-relaxed'>
                                          {link.description || 'Explore more about this section.'}
                                       </p>
                                    </div>
                                 </div>
                                 <svg
                                    className='w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
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

                  {/* Social Links - Minimal Icons */}
                  <div className='flex justify-center space-x-4 mb-4'>
                     {socialLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           target={link.external ? '_blank' : '_self'}
                           rel={link.external ? 'noopener noreferrer' : undefined}
                           // className='p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-lg group'
                           className='p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10 group'
                           title={link.name}
                        >
                           <div className='group-hover:scale-110 transition-transform duration-200'>{link.icon}</div>
                        </a>
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
