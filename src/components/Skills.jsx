import React from 'react'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import GlowingEffect from '@/components/ui/GlowingEffect'

const Skills = React.memo(function Skills() {
   return (
      <>
         {/*//?? Tech Stack Section */}
         {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
         <div
            id='tech-stack'
            className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
         >
            <div className='max-w-7xl w-full'>
               <AnimatedContent direction='vertical' distance={50} delay={300}>
                  <h2 className='text-4xl font-bold mb-10 gradient-text'>
                     My Skills
                  </h2>
               </AnimatedContent>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {[
                     {
                        name: 'Frontend',
                        skills: [
                           'JavaScript',
                           'React',
                           'Next.js',
                           'Tailwind CSS',
                        ],
                     },
                     {
                        name: 'Gen AI',
                        skills: [
                           'AI Agent',
                           'Persona',

                           'Advanced RAG',
                           'LangChain',
                           'Tracing',
                        ],
                     },
                     {
                        name: 'Backend',
                        skills: ['Node.js', 'AppWrite'],
                     },
                     {
                        name: 'Tools',
                        skills: [
                           'Git',
                           'GitHub',
                           'VS Code',
                           'Vercel',
                           'tlDraw',
                        ],
                     },

                     {
                        name: 'Soft Skills',
                        skills: [
                           'Code Debugging',
                           'Problem Solving',
                           'Time Management',
                           'Communication',
                           'Team Collaboration',
                        ],
                     },
                     {
                        name: 'Learning',
                        skills: ['Next.js', 'GenAI', 'TypeScript'],
                     },
                  ].map((category, index) => (
                     <AnimatedContent
                        key={index}
                        direction='vertical'
                        distance={50}
                        delay={400 + index * 100}
                     >
                        <div className='glass-effect rounded-xl p-6 h-full card-glow'>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-xl font-bold mb-4 text-purple-400'>
                              {category.name}
                           </h3>
                           <ul className='space-y-2'>
                              {category.skills.map((skill, i) => (
                                 <li key={i} className='flex items-center'>
                                    <span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
                                    <span className='text-gray-300'>
                                       {skill}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </AnimatedContent>
                  ))}
               </div>
            </div>
         </div>
         {/* </FadeContent> */}
      </>
   )
})

export default Skills
