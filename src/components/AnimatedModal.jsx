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
               className='absolute top-3 right-5 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold'
               onClick={onClose}
            >
               {/* &times; */}
               <IoClose className='size-8 text-purple-600 hover:text-purple-300' />
            </button>

            {/* Modal Content */}
            {/* <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] p-6'> */}
            {project.title === 'Interview Sphere' && (
               <>
                  <div className='relative flex items-center justify-center w-full'>
                     <h4 className='sm:text-4xl text-2xl font-bold text-purple-400 pb-2'>
                        Interview Sphere
                     </h4>
                     <h4 className='absolute right-68 sm:right-16 sm:text-sm text-xs font-bold text-purple-400 mb-2 sm:p-2 p-1 border border-purple-400 sm:rounded-xl rounded-md'>
                        ⏸️ OnHold
                     </h4>
                  </div>
                  <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] px-6 py-6 lg:px-6 lg:py-2'>
                     <div
                        className='mb-6'
                        style={{ height: '700px', position: 'relative' }}
                     >
                        <Corousals
                           // baseWidth={900}
                           autoplay={true}
                           autoplayDelay={3000}
                           pauseOnHover={true}
                           loop={true}
                           round={false}
                           image={project.image}
                        />
                     </div>

                     <p className='text-gray-300 mb-4 leading-relaxed'>
                        <span className='font-medium text-purple-300'>
                           Interview Sphere
                        </span>{' '}
                        – A real-time coding interview platform featuring live
                        collaboration, whiteboard, session restore, role-based
                        panels, and video calling.
                     </p>
                     <p className='text-gray-300 mb-2 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           Planned Features:
                        </span>
                     </p>
                     <p className='text-neutral-700 dark:text-neutral-300 mb-4 ml-4'>
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
                     <p className='text-gray-300 mb-2 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           Progress So Far:
                        </span>
                     </p>
                     <ul className='list-disc list-inside text-gray-300 mb-4 leading-relaxed'>
                        <li>Collaborative Canvas & Code Editor</li>
                        <li>Register & Login </li>
                        <li>UI layout & Components</li>
                        <li>Feedback System</li>
                        <li>Complete Flow & UX</li>
                     </ul>
                     <p className='text-gray-300 mb-4 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           What’s Next :
                        </span>
                        <ul className='list-disc list-inside text-gray-300 mb-4 leading-relaxed'>
                           <li>
                              Integrating Collaborative Features with Appwrite -
                              Sessions
                           </li>
                           <li>Live Video Call & Chat</li>
                        </ul>
                     </p>
                     <p className='text-gray-300 mb-6 leading-relaxed'>
                        <span className='font-semibold text-purple-400'>
                           Why on hold :
                        </span>
                        Currently paused to focus on productivity pulse &
                        advanced learning on Collborative Features. Will resume
                        with better planning and technical improvements.
                     </p>
                  </div>
               </>
            )}
            {project.title === 'Productive Pulse' && (
               <>
                  <div className='relative flex items-center justify-center w-full gap-4'>
                     <h4 className='sm:text-4xl text-2xl font-bold text-purple-400 pb-2'>
                        Productive Pulse
                     </h4>
                     <h4 className=' absolute right-68 sm:right-16 sm:text-sm text-xs font-bold text-purple-400 mb-2 sm:p-2 p-1 border border-purple-400 sm:rounded-xl rounded-md'>
                        🚀 Ongoing
                     </h4>
                  </div>
                  <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] px-6 py-6 lg:px-6 lg:py-2'>
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
                           Planned Features:
                        </span>
                     </p>
                     <ul className='list-disc list-inside text-gray-300 mb-4 leading-relaxed'>
                        <li>
                           Responsive dashboard for daily planning, focus, and
                           reflection{' '}
                        </li>
                        <li>
                           Customizable layout with background themes and
                           Pomodoro timer{' '}
                        </li>
                        <li>
                           Repeating tasks, reminders, and short notes all in
                           one place{' '}
                        </li>
                        <li>
                           Live streak tracker and Pomodoro session stats
                           (daily, weekly, all-time){' '}
                        </li>
                        <li>
                           Session restore and persistent timers even after
                           refresh{' '}
                        </li>
                        <li>
                           Built with React, Redux Toolkit, Web Workers &
                           Tailwind CSS{' '}
                        </li>
                        <li>
                           Appwrite authentication & Appwrite for secure user
                           data handling
                        </li>
                        <li>Save and export notes locally and sync online.</li>
                        <li>Integrated AI Personal Partner</li>
                     </ul>
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
                           What’s Next :
                        </span>
                        Implementing AI model , Stats , Responsiveness and
                        Theme.
                     </p>
                  </div>
               </>
            )}
            {project.title !== 'Productive Pulse' &&
               project.title !== 'Interview Sphere' && (
                  <>
                     <div className='flex items-center justify-center w-full '>
                        <h2 className='text-4xl font-bold text-purple-400 pb-2'>
                           {project.title}
                        </h2>
                     </div>
                     <div className='flex flex-col overflow-hidden overflow-y-auto max-h-[80vh] sm:px-6 sm:py-2 px-4 py-4 text-sm sm:text-base'>
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
                        {project.features && (
                           <p className='text-gray-300 mb-2 leading-relaxed'>
                              <span className='font-semibold text-purple-400'>
                                 Features:
                              </span>
                           </p>
                        )}

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
