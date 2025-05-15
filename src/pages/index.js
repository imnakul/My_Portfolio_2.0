import dynamic from 'next/dynamic'
import GlowingEffect from '@/components/ui/GlowingEffect'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import Navigationbar from '@/components/NavigationBar'
import { useState, useEffect } from 'react'

// import AboutMe from '@/components/AboutMe'

// Lazy load heavy/effect components for better performance
const AboutMe = dynamic(() => import('@/components/AboutMe'), {
   ssr: false,
   loading: () => <div style={{ height: 600 }} />,
})
const ParticleBackground = dynamic(
   () => import('@/components/ui/ParticleBackground'),
   { ssr: false, loading: () => <div /> }
)
// const CognitiveTwin = dynamic(() => import('@/components/CognitiveTwin'), {
//    ssr: false,
// })

// Lazy load heavy/secondary sections for better scroll performance
// const AboutMe = dynamic(() => import('@/components/AboutMe'), {
//    loading: () => <div style={{ height: 200 }} />,
// })
const Skills = dynamic(() => import('@/components/Skills'), {
   loading: () => <div style={{ height: 200 }} />,
})
const Projects = dynamic(() => import('@/components/Projects'), {
   loading: () => <div style={{ height: 200 }} />,
})
const Badges = dynamic(() => import('@/components/Badges'), {
   loading: () => <div style={{ height: 200 }} />,
})
const CognitiveTwin = dynamic(() => import('@/components/CognitiveTwin'), {
   loading: () => <div style={{ height: 200 }} />,
})
const CognitiveTwinTooltip = dynamic(() =>
   import('@/components/CognitiveTwinTooltip')
)
const Contact = dynamic(() => import('@/components/Contact'), {
   loading: () => <div style={{ height: 200 }} />,
})

export default function Home() {
   // Lower particle count for initial load, can increase after mount if needed
   const [particleCount, setParticleCount] = useState(20)
   useEffect(() => {
      const timeout = setTimeout(() => setParticleCount(50), 1000)
      return () => clearTimeout(timeout)
   }, [])

   return (
      <>
         {/* <div className='min-h-screen min-w-full bg-gray-900 hide-cursor'> */}
         <div className='min-h-screen min-w-full bg-gray-900'>
            {/* <CustomCursor /> */}
            {/* <ShootingStars maxStars={8} /> */}
            <ParticleBackground particleCount={particleCount} />

            <Navigationbar />
            <AboutMe />
            <Skills />
            <Projects />
            <Badges />

            {/* //?? Cognitive Twin Section */}
            {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
            <div
               id='ai'
               className='sm:flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
            >
               {/* //~ Desktop View */}
               <div className='sm:max-w-7xl w-full sm:block hidden'>
                  <AnimatedContent
                     direction='vertical'
                     distance={50}
                     delay={300}
                  >
                     <h2 className='text-4xl font-bold mb-8 gradient-text'>
                        Echo of Nakul
                     </h2>
                  </AnimatedContent>

                  <div className='grid grid-cols-1 '>
                     <AnimatedContent
                        direction='horizontal'
                        distance={50}
                        delay={400}
                     >
                        <div className='glass-effect rounded-xl card-glow p-6 h-full '>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-2xl font-bold mb-4 text-purple-400 '>
                              🧠 Nakul's Cognitive Twin
                           </h3>
                           <CognitiveTwinTooltip />
                           <AnimatedContent
                              direction='horizontal'
                              distance={50}
                              delay={400}
                           >
                              <CognitiveTwin />
                           </AnimatedContent>
                        </div>
                     </AnimatedContent>
                  </div>
               </div>

               {/* //~ MobileView  */}
               <div className='sm:hidden block max-w-xs '>
                  <AnimatedContent
                     direction='vertical'
                     distance={50}
                     delay={300}
                  >
                     <h2 className='text-4xl font-bold mb-8 gradient-text'>
                        Echo of Nakul
                     </h2>
                  </AnimatedContent>

                  <div className='grid grid-cols-1'>
                     {/* <AnimatedContent
                           direction='horizontal'
                           distance={50}
                           delay={400}
                        > */}
                     <div className='glass-effect rounded-xl card-glow sm:px-6 xm:py-6 px-2 py-4 h-full w-sm '>
                        <GlowingEffect
                           spread={40}
                           glow={true}
                           disabled={false}
                           proximity={64}
                           inactiveZone={0.01}
                        />
                        <h3 className='text-xl font-bold mb-2 text-purple-400 ml-2'>
                           🧠 Nakul's Cognitive Twin
                        </h3>
                        <CognitiveTwinTooltip />
                        <CognitiveTwin />
                     </div>
                     {/* </AnimatedContent> */}
                  </div>
               </div>
            </div>
            {/* </FadeContent> */}

            <Contact />

            {/* //?? Footer */}
            <div className='glass-effect py-6 text-center'>
               <p className='text-gray-400'>
                  © {new Date().getFullYear()} Nakul Srivastava. All rights
                  reserved.
               </p>
            </div>
         </div>
      </>
   )
}
