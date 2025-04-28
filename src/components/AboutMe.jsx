import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import GlowingEffect from '@/components/ui/GlowingEffect'

const slugs = [
   'react',
   'tailwindcss',
   'javascript',
   'html5',
   'css3',
   'nodedotjs',
   'nextdotjs',
   'appwrite',
   'vercel',
   'git',
   'github',
]

function AboutMe() {
   const images = slugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}/white`
   )

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
               <AnimatedContent direction='vertical' distance={50} delay={300}>
                  <h2 className='text-4xl font-bold sm:mb-10 mb-8 gradient-text'>
                     About Me
                  </h2>
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
                           <h3 className='text-3xl font-bold mb-4 text-purple-400'>
                              Hello, I'm Nakul Srivastava
                           </h3>
                           <p className='text-gray-300 mb-4 leading-relaxed'>
                              I'm a passionate web developer who loves building
                              beautiful, functional, and efficient web
                              applications. I focus on crafting seamless user
                              experiences using modern frontend technologies.
                           </p>
                           <p className='text-gray-300 mb-6 leading-relaxed'>
                              With a solid foundation in{' '}
                              <span className='text-purple-400 font-medium'>
                                 JavaScript
                              </span>
                              <span> and </span>
                              <span className='text-purple-400 font-medium'>
                                 {' '}
                                 React
                              </span>
                              {/* , and */}
                              {/* <span className='text-purple-400 font-medium'>
                                       {' '}
                                       Next.js
                                    </span> */}
                              , I develop scalable and elegant solutions that
                              bring ideas to life.
                           </p>

                           <h4 className='text-lg font-semibold text-purple-400 mb-2'>
                              🧩 My Approach to Problem Solving
                           </h4>
                           <ul className='list-disc list-inside text-gray-300 mb-6 leading-relaxed'>
                              <li>
                                 Understand the project goal & user
                                 requirements.
                              </li>
                              <li>
                                 Research & explore the best tech stack & tools.
                              </li>
                              <li>
                                 Create basic mock designs & plan project
                                 structure.
                              </li>
                              <li>
                                 Test new technologies with small demos for
                                 feasibility.
                              </li>
                              <li>
                                 Build core features while learning & improving
                                 parallelly.
                              </li>
                              <li>
                                 Take help from developer communities & AI for
                                 faster development, optimization & solving
                                 Issues.
                              </li>
                           </ul>

                           <h4 className='text-lg font-semibold text-purple-400 mb-2'>
                              🎯 Currently Learning
                           </h4>
                           <ul className='list-disc list-inside text-gray-300 mb-2 leading-relaxed'>
                              <li>GenAI – Integrating AI Agents, RAG , etc.</li>
                              <li>
                                 TypeScript – For scalable & type-safe
                                 development
                              </li>
                              <li>
                                 Next.js – Using in my current project
                                 (Portfolio)
                              </li>
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
                           <img
                              src='/profile.png'
                              alt='Nakul Srivastava'
                              className='w-full h-auto rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 loading-lazy'
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
                        <h3 className='text-xl font-bold mb-4 text-purple-400'>
                           Tech Stack
                        </h3>
                        <div className='flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6'>
                           {images.map((image, i) => (
                              <div key={i} className='group relative'>
                                 <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300'></div>
                                 <div className='relative bg-gray-800 rounded-lg p-2 transform transition-transform duration-300 group-hover:scale-110'>
                                    <img
                                       src={image}
                                       alt={slugs[i]}
                                       className='w-10 h-10'
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
}
export default AboutMe
