import React from 'react'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import GlowingEffect from '@/components/ui/GlowingEffect'
import Image from 'next/image'
import {
   siReact,
   siTailwindcss,
   siJavascript,
   siHtml5,
   siCss3,
   siNodedotjs,
   siNextdotjs,
   siAppwrite,
   siVercel,
   siGit,
   siGithub,
} from 'simple-icons/icons'

const icons = [
   siReact,
   siTailwindcss,
   siJavascript,
   siHtml5,
   siCss3,
   siNodedotjs,
   siNextdotjs,
   siAppwrite,
   siVercel,
   siGit,
   siGithub,
]

const AboutMe = React.memo(function AboutMe() {
   return (
      <>
         {/*//?? About Me Section */}
         {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
         <div
            id='about-me'
            className='flex items-center justify-center min-h-[100vh] sm:pt-[15vh] pt-[10vh] px-6 w-full'
         >
            <div className='max-w-7xl w-full'>
               <AnimatedContent
                  direction='vertical'
                  distance={50}
                  delay={300}
               >
                  <h2 className='text-4xl font-bold sm:mb-10 mb-8 gradient-text'>About Me</h2>
               </AnimatedContent>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='md:col-span-2'>
                     <div className='glass-effect rounded-xl p-6 card-glow'>
                        <GlowingEffect
                           spread={40}
                           glow={true}
                           disabled={false}
                           proximity={64}
                           inactiveZone={0.01}
                        />
                        <AnimatedContent
                           direction='horizontal'
                           distance={50}
                           delay={400}
                        >
                           <h3 className='text-3xl font-bold mb-4 text-purple-400'>Hello, I'm Nakul Srivastava</h3>
                           <p className='text-gray-300 mb-4 leading-relaxed'>
                              I'm a passionate web developer, focusing on Generative AI to deliver responsive,
                              innovative, and visually appealing modern web applications that make a real-world impact
                              and enhance user experience using modern frontend technologies and AI.
                           </p>
                           <p className='text-gray-300 mb-6 leading-relaxed'>
                              Skilled in UI development using{' '}
                              <span className='text-purple-400 font-medium'>JavaScript</span>
                              <span> and </span>
                              <span className='text-purple-400 font-medium'> React</span>
                              {/* , and */}
                              {/* <span className='text-purple-400 font-medium'>
                                       {' '}
                                       Next.js
                                    </span> */}
                              , with a focus on integrating AI to enhance performance and usability in applications.
                           </p>
                           <p className='text-gray-300 mb-6 leading-relaxed'>
                              I am also enthusiastic about exploring and utilizing new, innovative tech products to
                              improve efficiency and stay ahead in the ever-evolving tech landscape.
                           </p>

                           <h4 className='text-lg font-semibold text-purple-400 mb-2'>
                              🧩 My Approach to Problem Solving
                           </h4>
                           <ul className='list-disc list-inside text-gray-300 mb-6 leading-relaxed'>
                              <li>Understand the project goal & user requirements.</li>
                              <li>Research & explore the best tech stack & tools.</li>
                              <li>Create basic mock designs & plan project structure.</li>
                              <li>Test new technologies with small demos for feasibility.</li>
                              <li>Build core features while learning & improving parallelly.</li>
                              <li>
                                 Take help from developer communities & AI for faster development, optimization &
                                 solving Issues.
                              </li>
                           </ul>

                           <h4 className='text-lg font-semibold text-purple-400 mb-2'>🎯 Currently Learning</h4>
                           <ul className='list-disc list-inside text-gray-300 mb-2 leading-relaxed'>
                              <li>GenAI – Building AI Agents, RAG , etc.</li>
                              <li>TypeScript – For scalable & type-safe development</li>
                              <li>Next.js – Using in my current project (Portfolio)</li>
                              {/* <li>
                                 Advanced Tailwind CSS & Animation Techniques
                              </li> */}
                           </ul>
                        </AnimatedContent>
                     </div>
                  </div>

                  <div>
                     <div className='relative flex items-center justify-center glass-effect rounded-xl p-4 h-full card-glow'>
                        <GlowingEffect
                           spread={40}
                           glow={true}
                           disabled={false}
                           proximity={64}
                           inactiveZone={0.01}
                        />
                        <AnimatedContent
                           direction='horizontal'
                           distance={50}
                           delay={500}
                           reverse={true}
                        >
                           <Image
                              src='https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277782/profile_ey1p6s.png'
                              alt='Nakul Srivastava'
                              className='w-full h-auto rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 loading-lazy'
                              width={800}
                              height={800}
                              layout='responsive'
                           />
                        </AnimatedContent>
                     </div>
                  </div>
               </div>

               <div className='mt-6'>
                  <div className='glass-effect rounded-xl p-6 card-glow'>
                     <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                     />
                     <AnimatedContent
                        direction='vertical'
                        distance={50}
                        delay={600}
                     >
                        <h3 className='text-xl font-bold mb-4 text-purple-400'>Tech Stack</h3>
                        <div className='flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6'>
                           {icons.map((icon, i) => (
                              <div
                                 key={i}
                                 className='group relative'
                              >
                                 <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300'></div>
                                 <div className='relative bg-gray-800 rounded-lg p-2 transform transition-transform duration-300 group-hover:scale-110'>
                                    <div
                                       className='w-10 h-10'
                                       dangerouslySetInnerHTML={{ __html: icon.svg }}
                                       style={{ fill: 'white' }} // or use `currentColor` and control via `text-white`
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </AnimatedContent>
                  </div>
               </div>
            </div>
         </div>
         {/* </FadeContent> */}
      </>
   )
})

export default AboutMe
