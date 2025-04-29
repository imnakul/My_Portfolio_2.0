import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard'
import { AnimatedModal } from '@/components/AnimatedModal'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

function Projects() {
   const [openProject, setOpenProject] = useState(null)

   //?? To lock body when modal is open, to not let scroll
   useEffect(() => {
      if (openProject) {
         document.body.classList.add('overflow-hidden')
      } else {
         document.body.classList.remove('overflow-hidden')
      }
      return () => {
         document.body.classList.remove('overflow-hidden')
      }
   }, [openProject])

   return (
      <>
         {/* //? Projects Section */}
         {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
         <div
            id='projects'
            className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full '
         >
            <div className='max-w-7xl w-full'>
               <AnimatedContent direction='vertical' distance={50} delay={300}>
                  <h2 className='text-4xl font-bold mb-4 gradient-text'>
                     My Projects
                  </h2>
               </AnimatedContent>

               <div className='grid grid-cols-1 md:grid-cols-2 sm:gap-4 '>
                  {[
                     {
                        title: 'Portfolio v1.0',
                        description:
                           'A modern portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.',
                        tech: ['React', 'Tailwind CSS'],
                        image: '/Portfolio.png',
                        link: 'https://nakul-srivastava-portfolio.vercel.app/',
                        info: '',
                        status: 'Live',
                     },
                     {
                        title: 'FlexiTASKS',
                        description:
                           'Customizable Tasks Responsive WebApp - Feature Rich yet Minimal with Beautiful Consistent UI/UX',
                        tech: [
                           'React',
                           'Redux',
                           'Tailwind CSS',
                           'FramerMotion',
                        ],
                        image: '/FlexiTasks.jpeg',
                        link: 'https://flexitasks.vercel.app/',
                        info: '',
                        status: 'Live',
                     },
                     {
                        title: 'HouseMarketPlace',
                        description:
                           'A web application where users can list properties for sale or rent, featuring Google authentication, Firebase integration, and a map view.',
                        tech: [
                           'React',
                           'Firebase',
                           'Tailwind CSS',
                           'Google Authentication',
                           'Firebase',

                           'Leaflet.js',
                        ],
                        image: '/HouseMarketplace.jpg',
                        link: 'https://house-marketplace-webapp.vercel.app/',
                        info: '',
                        status: 'Live',
                        features: [
                           'Responsive Web Application to list your property for rent / sale',
                           'User can create account, look, and upload properties details',
                           'Authentication & Database using firebase',
                           'Used Fire-Store to save images and property details',
                           'Edit properties after uploading',
                           'Separate sections for rent and sale property/s',
                           'Offer features for properties',
                        ],
                     },
                     {
                        title: 'Productive Pulse',
                        description:
                           'Your one stop solution to increase your productivity flow - Single dashboard with Notes, todos, Reminders, Pomodoro Timer, AI Features.',
                        tech: ['React', 'Redux', 'Appwrite', 'Tailwind CSS'],
                        image: '/ProductivePulse3.png',
                        link: '',
                        info: '',
                        status: 'Coming Soon - 80% Done',
                     },
                     // image: 'https://via.placeholder.com/600x400/111/333?text=Weather+App',
                     {
                        title: 'Interview Sphere',
                        description:
                           'Collaborative Interview Platform with collaborative code editor and canvas with Video,chat support. ',
                        tech: ['React', 'Redux', 'Appwrite', 'Tailwind CSS'],
                        image: '/is.png',
                        link: '',
                        info: '',
                        status: 'On Hold - 60% Done',
                     },
                  ].map((project, index) => (
                     <>
                        <AnimatedContent
                           key={index}
                           direction='vertical'
                           distance={50}
                           delay={400 + index * 100}
                        >
                           <CardContainer className='inter-var w-full'>
                              <CardBody className=' relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-purple-950/20 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border card-glow '>
                                 {/* sm:w-full */}
                                 {/* sm:w-[35rem] */}
                                 <CardItem
                                    translateZ='50'
                                    className='text-xl font-bold mb-2 text-purple-400  '
                                 >
                                    {project.title}
                                 </CardItem>
                                 <CardItem
                                    as='p'
                                    translateZ='60'
                                    className='text-neutral-500 text-sm max-w-lg mt-2 dark:text-neutral-300'
                                 >
                                    {project.description}
                                 </CardItem>
                                 <CardItem
                                    translateZ='100'
                                    className='w-full mt-4'
                                 >
                                    <img
                                       src={project.image}
                                       alt={project.title}
                                       height='1000'
                                       width='1000'
                                       className='h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                                    />
                                 </CardItem>
                                 <div className='flex flex-col gap-5 mt-5'>
                                    <div className='flex flex-wrap gap-2 mt-4'>
                                       {project.tech.map((tech, i) => (
                                          <CardItem
                                             translateZ={60}
                                             key={i}
                                             className='px-3 py-1 bg-purple-900/50 text-purple-200 text-sm rounded-full'
                                          >
                                             {tech}
                                          </CardItem>
                                       ))}
                                    </div>
                                    <div className='flex justify-between items-center'>
                                       <CardItem
                                          translateZ={20}
                                          // as={Link}

                                          className='px-4 py-2 rounded-xl text-sm font-normal text-white filter-glow-hover'
                                          as='button'
                                          onClick={() =>
                                             setOpenProject(project)
                                          }
                                       >
                                          More Info →
                                       </CardItem>
                                       {project.status === 'Live' ? (
                                          <CardItem
                                             translateZ={20}
                                             as='button'
                                             className='px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500  text-white text-sm font-bold filter-glow-hover '
                                             onClick={() =>
                                                window.open(
                                                   project.link,
                                                   '_blank'
                                                )
                                             }
                                          >
                                             Visit Live
                                          </CardItem>
                                       ) : (
                                          <CardItem
                                             translateZ={20}
                                             as='button'
                                             className='px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500  text-white text-sm font-bold opacity-60'
                                             onClick={() =>
                                                window.open(
                                                   project.link,
                                                   '_blank'
                                                )
                                             }
                                          >
                                             {project.status}
                                          </CardItem>
                                       )}
                                    </div>
                                 </div>
                              </CardBody>
                           </CardContainer>
                           {/* <div className='glass-effect rounded-xl overflow-hidden card-glow h-full'> */}
                           {/* <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                 /> */}
                           {/* <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-64 object-cover'
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
                                 </div> */}
                           {/* </div> */}
                        </AnimatedContent>
                        {/* <AnimatePresence>
                           {openProject && (
                              <AnimatedModal
                                 project={openProject}
                                 onClose={() => setOpenProject(null)}
                              />
                           )}
                        </AnimatePresence> */}
                     </>
                  ))}
               </div>

               <AnimatePresence>
                  {openProject && (
                     <AnimatedModal
                        project={openProject}
                        onClose={() => setOpenProject(null)}
                     />
                  )}
               </AnimatePresence>
            </div>
         </div>
         {/* </FadeContent> */}
      </>
   )
}
export default Projects
