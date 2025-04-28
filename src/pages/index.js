// import ShootingStars from '@/components/ui/ShootingStars'
import GlowingEffect from '@/components/ui/GlowingEffect'
// import FadeContent from '@/components/ui/FadeContent/FadeContent'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
// import CustomCursor from '@/components/ui/CustomCursor'
import ParticleBackground from '@/components/ui/ParticleBackground'

import CognitiveTwin from '@/components/CognitiveTwin'
import Navigationbar from '@/components/NavigationBar'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Badges from '@/components/Badges'
import Contact from '@/components/Contact'

export default function Home() {
   return (
      <>
         {/* <div className='min-h-screen min-w-full bg-gray-900 hide-cursor'> */}
         <div className='min-h-screen min-w-full bg-gray-900'>
            {/* <CustomCursor /> */}
            {/* <ShootingStars maxStars={8} /> */}
            <ParticleBackground particleCount={50} />

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
               {/* // Desktop View */}
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

               {/* //MobileView  */}
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

                  <div className='grid grid-cols-1 '>
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
                        <h3 className='text-xl font-bold mb-2 text-purple-400 ml-6 '>
                           🧠 Nakul's Cognitive Twin
                        </h3>
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
