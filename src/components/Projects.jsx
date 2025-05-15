import React from 'react'
import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3dCard'
import { AnimatedModal } from '@/components/AnimatedModal'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
                        tag: 'Personal Project',
                        description:
                           'A modern portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.',
                        tech: ['React', 'Tailwind CSS'],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277777/pf2_p9642x.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277781/pf3_qsjvmm.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277776/pf1_d90lzi.png',
                        ],
                        href: 'https://deviceframes.com/templates/iphone-13',
                        link: 'https://nakul-srivastava-portfolio.vercel.app/',
                        info: '',
                        status: 'Live',
                        features: [
                           'Responsive Design: The portfolio is built with React, ensuring responsiveness across various devices.',
                           'Project Showcase: A dedicated section to display various projects, highlighting skills and experiences.',
                           'Contact Information: Provides easy access to contact details, facilitating communication',
                           'Professional Summary: Includes a brief overview of professional background and expertise.',
                        ],
                     },
                     {
                        title: 'FlexiTASKS',
                        tag: 'Productivity Tool',
                        description:
                           'A minimal yet feature-rich task manager with animated themes, flexible modes, and views for personalized productivity.',
                        tech: [
                           'React',
                           'Redux',
                           'Tailwind CSS',
                           'FramerMotion',
                        ],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277773/flexitasks_dixj7j.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277773/ft2_nzjbh9.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277769/FlexiTasks_ntt3yb.jpg',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277771/fts_gnh8ii.png',
                        ],
                        href: 'https://deviceframes.com/templates/iphone-13',
                        link: 'https://flexitasks.vercel.app/',
                        info: '',
                        status: 'Live',
                        features: [
                           'Modern, responsive design with dynamic animated themes',
                           'Switch seamlessly between Dark, Light, and Colorful Modes',
                           'Multiple views: Compact, Detailed, and Custom Layouts',
                           'Create, manage, and organize tasks with categories and priorities',
                           'ViewModes- List, Kanban , Priority Matrix, Timeline and Calendar',
                           'Import & Export tasks locally for backups or sharing',
                           'Minimal UI with smooth transitions and delightful micro-interactions',
                           'Feature Rich Mode - SubTasks, Notes, Sorting',
                           'Built with React, Tailwind CSS, Redux Toolkit, and Framer Motion',
                           'Persistent state with Redux & Local Storage for uninterrupted productivity',
                           'Cloud Storage - Cross Device Sync without Login (Coming Soon)',
                        ],
                     },
                     {
                        title: 'Hashnode - Article Finder',
                        tag: 'Solution for Orgs & Authors',
                        description: `A unified platform to track student articles, send personalized feedback, and access all assignments with one click.`,
                        tech: [
                           'React',
                           'Hashnode API',
                           'Github API',
                           'Gmail API',
                           'Firebase',
                        ],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277773/haf_ngegnr.png',
                        ],
                        link: 'https://hashnode-article-fetcher.vercel.app/',
                        info: `If you are an organization looking to track your students' articles as assignments, it can be a cumbersome task to search through all the articles on Hashnode and then find the corresponding contact details to send them. \n\n

If you are a student wanting to explore all the articles published for that organization as assignments, you can access all the articles in one place, complete with links, author details, and much more.`,
                        status: 'Live',
                        features: [
                           'Article Search on Hashnode using Tags',
                           'Perosonlized Feedback in Students Mailbox with single Click',
                           'Explore all articles on a topic at one place, with links, tags,author details, author SocialMedia Handle links',
                           'Filter Articles based on Views, comments, Date of publishing etc',
                           'Search Articles in a long list',
                           'Sort Articles - Views , comments, publishing date based',
                        ],
                     },
                     {
                        title: 'House MarketPlace',
                        tag: 'For Community',
                        description:
                           'A platform where property owners can list, rent, or sell their properties, while renters and buyers can easily explore and find their ideal space.',
                        tech: [
                           'React',
                           'Firebase',
                           'OAuth',
                           'Firebase',
                           'Leaflet.js',
                        ],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277772/HouseMarketplace_d9gvul.jpg',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277772/hmp3_oafhh2.jpg',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277770/hmp2_ybdhsb.jpg',
                        ],
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
                        tag: 'Productivity Tool',
                        description:
                           'A smart dashboard uniting productivity tools with AI enhancements to help you stay focused and efficient in a world full of distractions.',
                        tech: [
                           'React',
                           'Redux',
                           'Appwrite',
                           'Tailwind CSS',
                           'AI Model',
                        ],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277778/pp0_w75icv.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277778/pp1_ti3z3q.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277779/pp2_zvaclv.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277779/pp5_gabzhj.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277780/pp4_e4d8cw.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277780/pp7_e5qukj.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277780/pp6_jdtooz.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277784/pp3_scstl8.png',
                        ],
                        href: 'https://deviceframes.com/templates/iphone-13',
                        link: '',
                        info: '',
                        status: 'Coming Soon - 80% Done',
                     },
                     // image: 'https://via.placeholder.com/600x400/111/333?text=Weather+App',
                     {
                        title: 'Interview Sphere',
                        tag: 'Real-World Problem',
                        description:
                           'Interview Platform with collaborative code editor and canvas with live video, chat Features. ',
                        tech: [
                           'React',
                           'Redux',
                           'Appwrite',
                           'Tailwind CSS',
                           'Liveblocks',
                        ],
                        image: [
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277771/is_kcnun6.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277771/is2_uhpdwz.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277777/is3_pqnbui.png',
                           // 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277773/is4_mk0set.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277775/is5_fzrdte.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277776/is7_uebtul.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277775/is6_dhnj5y.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277777/is8_bwymhb.png',
                           'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1747277776/is9_uk2w9g.png',
                        ],
                        href: 'https://deviceframes.com/templates/iphone-13',
                        link: '',
                        info: '',
                        status: 'On Hold - 60% Done',
                        features: [
                           'Collaborative Interview Platform',
                           'Collaborative code editor with syntax highlighting',
                           'Collaborative Canvas',
                           'Live Video / Chat Support',
                           'Notes Saving for Interviewers',
                           'Selected/ Not selected Interviewees details ',
                           'Scheudling Interviews for Interviewers',
                           'Colored Dark/Light Modes',
                           'Protected Routes for Interviewee/ Interviewer',
                        ],
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
                                 <div className='flex items-center justify-between '>
                                    <CardItem
                                       translateZ='50'
                                       className='text-xl font-bold mb-2 text-purple-400  '
                                    >
                                       {project.title}
                                    </CardItem>

                                    <CardItem
                                       translateZ='50'
                                       className='text-sm font-bold mb-2 text-purple-400  '
                                    >
                                       <h4 className=' text-xs font-bold text-purple-300  p-1.5 border border-purple-400 rounded-md bg-purple-900/40'>
                                          {project.tag}
                                       </h4>
                                    </CardItem>
                                 </div>
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
                                    <Image
                                       src={project.image[0]}
                                       alt={project.title}
                                       height='1000'
                                       width='1000'
                                       className='h-72 w-full sm:object-cover object-contain rounded-xl group-hover/card:shadow-xl'
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
                           {/* <Image
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
export default React.memo(Projects)
