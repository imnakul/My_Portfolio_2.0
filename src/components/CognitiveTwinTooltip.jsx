import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const CognitiveTwinTooltip = () => {
   const [showInfo, setShowInfo] = useState(false)

   return (
      <div className='absolute sm:top-5 right-5 z-50'>
         <div
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            onClick={() => setShowInfo(!showInfo)}
            className='cursor-pointer text-purple-600 dark:text-purple-300'
         >
            <AiOutlineQuestionCircle size={24} className='text-purple-500' />
         </div>

         <AnimatePresence>
            {showInfo && (
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className='mt-2 p-4 sm:w-80 text-xs sm:text-sm rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 absolute right-0 top-8 w-64'
               >
                  <p className='mb-4 font-semibold text-purple-700 dark:text-purple-300 text-center'>
                     Who am I ? What I Know ?
                  </p>
                  <ul className='space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside'>
                     I'm <strong>Nakul's Cognitive Twin who </strong>
                     <li> Understands Nakul's thought process</li>
                     <li>
                        {' '}
                        Remembers his preferences, experiences, and values
                     </li>
                     <li>
                        Can Act on his behalf or help explain{' '}
                        <strong>Nakul</strong> to others
                     </li>
                     <li>
                        is always available for you, when Nakul is not around
                     </li>
                     <li>
                        Can Thinks with <strong>Nakul's brain</strong>, but in
                        code
                     </li>
                     <br />
                     {/* - a **next-gen assistant** with personality and context */}
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}

export default CognitiveTwinTooltip
