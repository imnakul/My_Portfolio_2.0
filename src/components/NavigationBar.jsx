import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { useState, useEffect } from 'react'
// import { Navbar, NavBody, NavItems } from '@/components/ui/ResizableNavbar'
import { RiMenuFill } from 'react-icons/ri'

const TABS = [
   { id: 'about-me', name: 'About' },
   { id: 'tech-stack', name: 'Tech' },
   { id: 'projects', name: 'Projects' },
   { id: 'stats', name: 'Stats' },
   { id: 'ai', name: 'Cognitive Twin' },
   { id: 'contact-me', name: 'Contact' },
]

function Navigationbar() {
   const [activeSection, setActiveSection] = useState('about-me')
   const [isOpen, setIsOpen] = useState(false)

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

   return (
      <>
         {/* //?? Navigation Bar Sceen > md*/}
         <div className='hidden fixed top-0 left-0 right-0 z-50 sm:flex items-center justify-center min-h-[10vh] glass-effect w-full'>
            <div className='relative flex flex-row items-center justify-between md:px-6 px-2 w-full max-w-7xl'>
               <span className='bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-md py-2 md:px-4 px-2 filter-glow font-bold tracking-wider text-xs md:text-base md:mr-0 mr-2 font-serif'>
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
                        className='md:px-4 px-2 py-2 inline-flex items-center justify-center text-center text-white transition-transform active:scale-[0.98] text-base font-medium'
                     >
                        {tab.name}
                     </button>
                  ))}
               </AnimatedBackground>
            </div>
         </div>

         {/* //?? Navigation Bar Sceen < md */}
         <div className='sm:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center min-h-[8vh] glass-effect w-full'>
            <div className='relative flex flex-row items-center justify-between md:px-6 px-4 w-full max-w-7xl'>
               <span className='bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md py-2  px-2 filter-glow font-bold tracking-wider text-xs md:text-base  mx-2 font-serif'>
                  NAKUL SRIVASTAVA
               </span>

               <div className='sm:hidden relative inline-block text-left'>
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className='bg-gradient-to-r from-purple-600 to-pink-500 rounded-md py-2 md:px-4 px-2 filter-glow font-bold tracking-wider text-xs md:text-base md:mr-0 mr-2 font-serif text-white text-center inline-flex items-center'
                  >
                     <RiMenuFill size={16} />
                  </button>

                  {isOpen && (
                     <div
                        className='absolute z-10 mt-2  divide-y divide-gray-100 rounded-lg shadow-sm 
                            w-32 bg-gradient-to-b from-purple-950 to-pink-950  right-2'
                     >
                        <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 '>
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
                                    className='md:px-4 px-2 py-2 flex flex-col items-center justify-center text-center text-white transition-transform active:scale-[0.98] text-base font-medium w-full'
                                 >
                                    {tab.name}
                                 </button>
                              ))}
                           </AnimatedBackground>
                        </ul>
                     </div>
                  )}
               </div>

               {/* <AnimatedBackground
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
                               className='md:px-4 px-2 py-2 inline-flex items-center justify-center text-center text-white transition-transform active:scale-[0.98] text-base font-medium'
                            >
                               {tab.name}
                            </button>
                         ))}
                      </AnimatedBackground> */}
            </div>
         </div>
      </>
   )
}
export default Navigationbar
