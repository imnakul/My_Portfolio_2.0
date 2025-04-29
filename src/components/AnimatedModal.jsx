import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Corousals from './ui/Corousals'

export const AnimatedModal = ({ project, onClose }) => {
   return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-lg '>
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='relative w-[90%] md:w-[70%] max-h-[90vh] bg-purple-950/70 rounded-lg overflow-hidden shadow-lg flex flex-col sm:p-8 p-6 overflow-y-auto '
         >
            {/* Close Button */}
            <button
               className='absolute top-5 right-5 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold'
               onClick={onClose}
            >
               {/* &times; */}
               <IoClose className='size-8 text-purple-600 hover:text-purple-300' />
            </button>

            {/* Modal Content */}
            {/* <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] p-6'> */}
            {project.title === 'Interview Sphere' && (
               <>
                  <h2 className='text-2xl font-bold text-purple-400'>
                     {project.title}
                  </h2>
                  <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] p-6'>
                     {/* <img
                        src={project.image}
                        alt={project.title}
                        className='h-[60vh] w-[60vw] object-contain rounded-md mb-6'
                     /> */}
                     <div
                        className='mb-6'
                        style={{ height: '700px', position: 'relative' }}
                     >
                        <Corousals
                           baseWidth={900}
                           autoplay={true}
                           autoplayDelay={3000}
                           pauseOnHover={true}
                           loop={true}
                           round={false}
                           image={project.image}
                        />
                     </div>

                     <p className='text-gray-300 mb-2 leading-relaxed'>
                        <span className='font-medium text-purple-300'>
                           Interview Sphere
                        </span>{' '}
                        – A real-time coding interview platform featuring live
                        collaboration, whiteboard, session restore, role-based
                        panels, and video calling.
                     </p>
                     <p className='text-gray-300 mb-4 leading-relaxed'>
                        Currently paused to focus on productivity dashboard &
                        advanced learning. Will resume with better planning and
                        technical improvements.
                     </p>
                  </div>
               </>
            )}
            {project.title === 'Productive Pulse' && (
               <>
                  <h4 className='text-lg font-semibold text-purple-400 '>
                     🚀 Ongoing Project - Productive Pulse
                  </h4>
                  <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] p-6'>
                     {/* <img
                        src={project.image}
                        alt={project.title}
                        className='h-[60vh] w-[60vw] object-contain rounded-md mb-6'
                     /> */}
                     <div
                        className='mb-6'
                        style={{ height: '700px', position: 'relative' }}
                     >
                        <Corousals
                           baseWidth={900}
                           autoplay={true}
                           autoplayDelay={3000}
                           pauseOnHover={true}
                           loop={true}
                           round={false}
                           image={project.image}
                        />
                     </div>
                     <p className='text-gray-300 mb-2 leading-relaxed'>
                        <span className='font-medium text-purple-300'>
                           Productive Pulse
                        </span>{' '}
                        is a Daily Productivity Dashboard designed to help users
                        manage their time, tasks, and thoughts effectively.
                     </p>
                     <p className='text-gray-300 mb-2 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           Progress So Far:
                        </span>
                     </p>
                     <ul className='list-disc list-inside text-gray-300 mb-4 leading-relaxed'>
                        <li>Landing Page & Dashboard UI</li>
                        <li>Pomodoro Timer with Stats & Streaks</li>
                        <li>Theme & Background Customization</li>
                        <li>Short Notes & Reminder Thoughts</li>
                        <li>Authentication & Protected Routes</li>
                     </ul>
                     <p className='text-gray-300 mb-6 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           What’s Next:
                        </span>
                        Implementing persistent state management, improving UX,
                        integrating more productivity widgets, and preparing for
                        deployment.
                     </p>
                  </div>
               </>
            )}
            {project.title !== 'Productive Pulse' &&
               project.title !== 'Interview Sphere' && (
                  <>
                     <h2 className='text-2xl font-bold text-purple-400'>
                        {project.title}
                     </h2>
                     <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] sm:p-6 p-4 text-sm sm:text-base'>
                        {/* <img
                           src={project.image}
                           alt={project.title}
                           className='h-[80vh] w-[80vw] object-contain rounded-md mb-6'
                        /> */}
                        <div
                           className='mb-6'
                           style={{ height: '700px', position: 'relative' }}
                        >
                           <Corousals
                              baseWidth={900}
                              autoplay={true}
                              autoplayDelay={3000}
                              pauseOnHover={true}
                              loop={true}
                              round={false}
                              image={project.image}
                           />
                        </div>
                        <p className='text-neutral-700 dark:text-neutral-300 mb-6'>
                           {project.description}
                        </p>
                        <p className='text-neutral-700 dark:text-neutral-300 mb-6 ml-4'>
                           {project.features &&
                              project.features.map((feature, i) => (
                                 <li
                                    key={i}
                                    className='text-neutral-700 dark:text-neutral-300 mb-2'
                                 >
                                    {feature}
                                 </li>
                              ))}
                        </p>
                        <div className='flex items-center justify-between'>
                           <div className='flex flex-wrap gap-3'>
                              {project.tech.map((tech, i) => (
                                 <span
                                    key={i}
                                    className='px-4 py-2 bg-purple-900/50 text-purple-200 text-sm rounded-full'
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>
                           <div
                              translateZ={20}
                              as='button'
                              className='flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500  text-white w-20 text-sm font-bold'
                              onClick={() =>
                                 window.open(project.link, '_blank')
                              }
                           >
                              Visit
                              <FiExternalLink className='ml-2 size-3' />
                           </div>
                        </div>
                     </div>
                  </>
               )}
            {/* </div> */}
            {/* </div> */}
         </motion.div>
      </div>
   )
}
