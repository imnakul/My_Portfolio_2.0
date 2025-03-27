// import Image from 'next/image'
// import { Geist, Geist_Mono } from 'next/font/google'

import ShootingStars from '@/components/ui/ShootingStars'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import GlowingEffect from '@/components/ui/GlowingEffect'
import FadeContent from '@/components/ui/FadeContent/FadeContent'

// const geistSans = Geist({
//    variable: '--font-geist-sans',
//    subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//    variable: '--font-geist-mono',
//    subsets: ['latin'],
// })
const TABS = [
   { id: 'about-me', name: 'About' },
   { id: 'tech-stack', name: 'Tech' },
   { id: 'projects', name: 'Project' },
   { id: 'contact-me', name: 'Contact' },
]

const slugs = [
   'javascript',
   'tailwindcss',
   'react',
   'html5',
   'css3',
   'nodedotjs',
   'nextdotjs',
   'firebase',
   'vercel',
   'git',
   'github',
]

export default function Home() {
   const handleTabClick = (id) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   const images = slugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
   )

   return (
      <>
         <div className='min-h-screen min-w-full bg-gray-900'>
            <ShootingStars />
            <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center min-h-[10vh] bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm w-full'>
               <div className='relative flex flex-row items-center justify-center gap-4 w-full'>
                  <span className='absolute left-3 bg-purple-900 text-white rounded-md p-2 filter-glow'>
                     NAKUL SRIVASTAVA
                  </span>

                  <AnimatedBackground
                     defaultValue={TABS[0]} // Remove this if you don't want any tab to be highlighted by default.
                     className='rounded-md bg-zinc-100 dark:bg-purple-600'
                     transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.3,
                     }}
                     enableHover
                  >
                     {TABS.map((tab, index) => (
                        <button
                           key={index}
                           //  data-id={tab}
                           data-id={tab.id}
                           type='button'
                           onClick={() => handleTabClick(tab.id)}
                           className='px-2 py-0.5 inline-flex items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50 text-base'
                        >
                           {/* {tab} */}
                           {tab.name}
                        </button>
                     ))}
                  </AnimatedBackground>
               </div>
            </div>

            {/* //? About Me Section  */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='about-me'
                  className='flex items-center justify-center min-h-[90vh] border border-green-500 mb-1 mt-[10vh] pt-[10vh] pl-[20vw] w-full'
               >
                  {/* <h1>About Me</h1> */}
                  <ul className='grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-5 md:grid-rows-3 lg:gap-4 xl:h-[90vh] xl:grid-rows-4 '>
                     {/* //? mere lie 4 row, 12 col //? 1st col - 1  */}
                     <li
                        className={`mt-2 list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/3/4] min-w-2xl `}
                     >
                        <div
                           className={`relative h-full rounded-xl border p-3 md:rounded-xl md:p-1 `}
                        >
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           About Me
                        </div>
                     </li>
                     <li className='mt-2 list-none md:[grid-area:1/7/2/13] xl:[grid-area:1/4/3/5]'>
                        <div
                           className={`relative h-full rounded-xl border p-3 md:rounded-xl md:p-1 `}
                        >
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <img
                              src='/profile.jpg'
                              alt=''
                              className='size-full rounded-lg shadow-md hover:shadow-lg'
                           ></img>
                        </div>
                     </li>

                     {/* //? 1st col - 2 */}
                     <li
                        className={` list-none md:[grid-area:1/7/2/13] xl:[grid-area:3/1/4/5]`}
                     >
                        <div
                           className={`relative h-full rounded-xl border p-2  md:rounded-xl md:p-3`}
                        >
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <span className='text-sm font-bold space-x-1'>
                              Tech Stacks I use :
                           </span>
                           <div className='mt-4 flex items-end justify-center bg-gradient-to-b from-gray-800 to-purple-800 rounded-lg p-2 '>
                              {images.map((image, i) => (
                                 <img
                                    src={image}
                                    alt=''
                                    key={i}
                                    className='w-12 h-12 mr-4 rounded-lg'
                                 ></img>
                              ))}
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </FadeContent>

            {/* //? Tech Stack Section  */}
            {}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='tech-stack'
                  className='flex items-center justify-center min-h-[100vh] border border-pink-500 mb-1'
               >
                  <h1>TechStack</h1>
               </div>
            </FadeContent>

            {/* //? Projects Section  */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='projects'
                  className='flex items-center justify-center min-h-[100vh] border border-yellow-500 mb-1'
               >
                  <h1>Projects</h1>
               </div>
            </FadeContent>

            {/* //? cONTATC Section  */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='contact-me'
                  className='flex items-center justify-center min-h-[100vh] border border-purple-500'
               >
                  <h1>Contact Me</h1>
               </div>
            </FadeContent>
         </div>
      </>
   )
}
