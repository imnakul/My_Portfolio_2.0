import ShootingStars from '@/components/ui/ShootingStars'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import GlowingEffect from '@/components/ui/GlowingEffect'
import FadeContent from '@/components/ui/FadeContent/FadeContent'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import CustomCursor from '@/components/ui/CustomCursor'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { useEffect, useState } from 'react'

const TABS = [
   { id: 'about-me', name: 'About' },
   { id: 'tech-stack', name: 'Tech' },
   { id: 'projects', name: 'Projects' },
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
   const [activeSection, setActiveSection] = useState('about-me')

   const handleTabClick = (id) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
         setActiveSection(id)
      }
   }

   useEffect(() => {
      const handleScroll = () => {
         const sections = TABS.map((tab) => tab.id)

         for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
               const rect = element.getBoundingClientRect()
               if (rect.top <= 100 && rect.bottom >= 100) {
                  setActiveSection(section)
                  break
               }
            }
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const images = slugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}/white`
   )

   return (
      <>
         <div className='min-h-screen min-w-full bg-gray-900 hide-cursor'>
            <CustomCursor />
            <ShootingStars maxStars={8} />
            <ParticleBackground particleCount={80} />

            {/* Navigation Bar */}
            <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center min-h-[10vh] glass-effect w-full'>
               <div className='relative flex flex-row items-center justify-between px-6 w-full max-w-7xl'>
                  <span className='bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md py-2 px-4 filter-glow font-bold tracking-wider'>
                     NAKUL SRIVASTAVA
                  </span>

                  <AnimatedBackground
                     defaultValue={activeSection}
                     className='rounded-md bg-purple-600/50'
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
                           data-id={tab.id}
                           type='button'
                           onClick={() => handleTabClick(tab.id)}
                           className='px-4 py-2 inline-flex items-center justify-center text-center text-white transition-transform active:scale-[0.98] text-base font-medium'
                        >
                           {tab.name}
                        </button>
                     ))}
                  </AnimatedBackground>
               </div>
            </div>

            {/* About Me Section */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='about-me'
                  className='flex items-center justify-center min-h-[100vh] pt-[15vh] px-6 w-full'
               >
                  <div className='max-w-7xl w-full'>
                     <AnimatedContent
                        direction='vertical'
                        distance={50}
                        delay={300}
                     >
                        <h2 className='text-4xl font-bold mb-8 gradient-text'>
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
                                 <h3 className='text-2xl font-bold mb-4 text-purple-400'>
                                    Hello, I'm Nakul
                                 </h3>
                                 <p className='text-gray-300 mb-4 leading-relaxed'>
                                    I'm a passionate web developer with
                                    expertise in modern frontend technologies. I
                                    love creating beautiful, responsive, and
                                    user-friendly websites that deliver
                                    exceptional user experiences.
                                 </p>
                                 <p className='text-gray-300 leading-relaxed'>
                                    With a strong foundation in JavaScript,
                                    React, and Next.js, I build scalable
                                    applications that combine elegant design
                                    with efficient functionality.
                                 </p>
                              </AnimatedContent>
                           </div>
                        </div>

                        <div>
                           <div className='glass-effect rounded-xl p-4 h-full card-glow'>
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
                                    src='/profile.jpg'
                                    alt='Nakul Srivastava'
                                    className='w-full h-auto rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300'
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
            </FadeContent>

            {/* Tech Stack Section */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='tech-stack'
                  className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
               >
                  <div className='max-w-7xl w-full'>
                     <AnimatedContent
                        direction='vertical'
                        distance={50}
                        delay={300}
                     >
                        <h2 className='text-4xl font-bold mb-12 gradient-text'>
                           My Skills
                        </h2>
                     </AnimatedContent>

                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[
                           {
                              name: 'Frontend',
                              skills: [
                                 'React',
                                 'Next.js',
                                 'HTML/CSS',
                                 'Tailwind CSS',
                                 'JavaScript/TypeScript',
                              ],
                           },
                           {
                              name: 'Backend',
                              skills: [
                                 'Node.js',
                                 'Express',
                                 'Firebase',
                                 'RESTful APIs',
                                 'MongoDB',
                              ],
                           },
                           {
                              name: 'Tools',
                              skills: [
                                 'Git',
                                 'GitHub',
                                 'VS Code',
                                 'Figma',
                                 'Vercel',
                              ],
                           },
                           {
                              name: 'Design',
                              skills: [
                                 'Responsive Design',
                                 'UI/UX Principles',
                                 'Animations',
                                 'Accessibility',
                              ],
                           },
                           {
                              name: 'Soft Skills',
                              skills: [
                                 'Problem Solving',
                                 'Communication',
                                 'Team Collaboration',
                                 'Time Management',
                              ],
                           },
                           {
                              name: 'Learning',
                              skills: [
                                 'GraphQL',
                                 'React Native',
                                 'AWS',
                                 'Docker',
                                 'Three.js',
                              ],
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
                                       <li
                                          key={i}
                                          className='flex items-center'
                                       >
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
            </FadeContent>

            {/* Projects Section */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='projects'
                  className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
               >
                  <div className='max-w-7xl w-full'>
                     <AnimatedContent
                        direction='vertical'
                        distance={50}
                        delay={300}
                     >
                        <h2 className='text-4xl font-bold mb-12 gradient-text'>
                           My Projects
                        </h2>
                     </AnimatedContent>

                     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {[
                           {
                              title: 'Portfolio Website',
                              description:
                                 'A modern portfolio website built with Next.js and Tailwind CSS featuring smooth animations and interactive elements.',
                              tech: ['Next.js', 'Tailwind CSS', 'React'],
                              image: 'https://via.placeholder.com/600x400/111/333?text=Portfolio',
                           },
                           {
                              title: 'E-commerce Platform',
                              description:
                                 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.',
                              tech: ['React', 'Node.js', 'MongoDB'],
                              image: 'https://via.placeholder.com/600x400/111/333?text=E-commerce',
                           },
                           {
                              title: 'Task Management App',
                              description:
                                 'A productivity app that helps users organize tasks, set priorities, and track progress with intuitive UI.',
                              tech: ['React', 'Firebase', 'Tailwind CSS'],
                              image: 'https://via.placeholder.com/600x400/111/333?text=Task+App',
                           },
                           {
                              title: 'Weather Dashboard',
                              description:
                                 'A weather application that provides real-time forecasts, interactive maps, and location-based weather data.',
                              tech: ['JavaScript', 'Weather API', 'CSS'],
                              image: 'https://via.placeholder.com/600x400/111/333?text=Weather+App',
                           },
                        ].map((project, index) => (
                           <AnimatedContent
                              key={index}
                              direction='vertical'
                              distance={50}
                              delay={400 + index * 100}
                           >
                              <div className='glass-effect rounded-xl overflow-hidden card-glow h-full'>
                                 <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                 />
                                 <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-48 object-cover'
                                 />
                                 <div className='p-6'>
                                    <h3 className='text-xl font-bold mb-2 text-purple-400'>
                                       {project.title}
                                    </h3>
                                    <p className='text-gray-300 mb-4'>
                                       {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-2 mt-auto'>
                                       {project.tech.map((tech, i) => (
                                          <span
                                             key={i}
                                             className='px-3 py-1 bg-purple-900/50 text-purple-200 text-sm rounded-full'
                                          >
                                             {tech}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </AnimatedContent>
                        ))}
                     </div>
                  </div>
               </div>
            </FadeContent>

            {/* Contact Section */}
            <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            >
               <div
                  id='contact-me'
                  className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
               >
                  <div className='max-w-7xl w-full'>
                     <AnimatedContent
                        direction='vertical'
                        distance={50}
                        delay={300}
                     >
                        <h2 className='text-4xl font-bold mb-12 gradient-text'>
                           Get In Touch
                        </h2>
                     </AnimatedContent>

                     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <AnimatedContent
                           direction='horizontal'
                           distance={50}
                           delay={400}
                        >
                           <div className='glass-effect rounded-xl p-6 card-glow h-full'>
                              <GlowingEffect
                                 spread={40}
                                 glow={true}
                                 disabled={false}
                                 proximity={64}
                                 inactiveZone={0.01}
                              />
                              <h3 className='text-2xl font-bold mb-6 text-purple-400'>
                                 Contact Me
                              </h3>
                              <p className='text-gray-300 mb-6'>
                                 I'm always open to new opportunities and
                                 collaborations. Feel free to reach out if you
                                 have a project in mind or just want to connect!
                              </p>

                              <div className='space-y-4'>
                                 <div className='flex items-center'>
                                    <div className='w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4'>
                                       <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-purple-300'
                                          viewBox='0 0 20 20'
                                          fill='currentColor'
                                       >
                                          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                       </svg>
                                    </div>
                                    <span className='text-gray-300'>
                                       email@example.com
                                    </span>
                                 </div>

                                 <div className='flex items-center'>
                                    <div className='w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4'>
                                       <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-purple-300'
                                          viewBox='0 0 20 20'
                                          fill='currentColor'
                                       >
                                          <path
                                             fillRule='evenodd'
                                             d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                             clipRule='evenodd'
                                          />
                                       </svg>
                                    </div>
                                    <span className='text-gray-300'>
                                       City, Country
                                    </span>
                                 </div>

                                 <div className='flex items-center'>
                                    <div className='w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-4'>
                                       <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          className='h-5 w-5 text-purple-300'
                                          viewBox='0 0 20 20'
                                          fill='currentColor'
                                       >
                                          <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                                       </svg>
                                    </div>
                                    <span className='text-gray-300'>
                                       +1 234 567 890
                                    </span>
                                 </div>
                              </div>

                              <div className='flex space-x-4 mt-8'>
                                 {[
                                    'github',
                                    'linkedin',
                                    'twitter',
                                    'instagram',
                                 ].map((social, index) => (
                                    <a
                                       key={index}
                                       href='#'
                                       className='w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors duration-300'
                                    >
                                       <img
                                          src={`https://cdn.simpleicons.org/${social}/white`}
                                          alt={social}
                                          className='w-5 h-5'
                                       />
                                    </a>
                                 ))}
                              </div>
                           </div>
                        </AnimatedContent>

                        <AnimatedContent
                           direction='horizontal'
                           distance={50}
                           delay={500}
                           reverse={true}
                        >
                           <div className='glass-effect rounded-xl p-6 card-glow'>
                              <GlowingEffect
                                 spread={40}
                                 glow={true}
                                 disabled={false}
                                 proximity={64}
                                 inactiveZone={0.01}
                              />
                              <h3 className='text-2xl font-bold mb-6 text-purple-400'>
                                 Send Message
                              </h3>

                              <form className='space-y-4'>
                                 <div>
                                    <label className='block text-gray-300 mb-2'>
                                       Name
                                    </label>
                                    <input
                                       type='text'
                                       className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                                    />
                                 </div>

                                 <div>
                                    <label className='block text-gray-300 mb-2'>
                                       Email
                                    </label>
                                    <input
                                       type='email'
                                       className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                                    />
                                 </div>

                                 <div>
                                    <label className='block text-gray-300 mb-2'>
                                       Message
                                    </label>
                                    <textarea
                                       rows='4'
                                       className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                                    ></textarea>
                                 </div>

                                 <button
                                    type='submit'
                                    className='px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'
                                 >
                                    Send Message
                                 </button>
                              </form>
                           </div>
                        </AnimatedContent>
                     </div>
                  </div>
               </div>
            </FadeContent>

            {/* Footer */}
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
