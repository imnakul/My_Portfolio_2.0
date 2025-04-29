import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import GlowingEffect from '@/components/ui/GlowingEffect'
import { useState } from 'react'
import {
   RiTelegram2Fill,
   RiGithubFill,
   RiLinkedinFill,
   RiTwitterXFill,
} from 'react-icons/ri'
import { SiHashnode } from 'react-icons/si'
import { Marquee } from './ui/Marquee'
import { FiExternalLink } from 'react-icons/fi'

const socials = [
   {
      social: 'github',
      url: 'https://github.com/imnakul',
      icon: <RiGithubFill className='size-5 sm:size-7' />,
      title: 'GitHub',
   },
   {
      social: 'linked-In',
      url: 'https://www.linkedin.com/in/nakul-srivastava-a8426033b',
      icon: <RiLinkedinFill className='size-5 sm:size-7' />,
      title: 'LinkedIn',
   },
   {
      social: 'twitter',
      url: 'https://x.com/imnakul_1?t=kE6SVznWCPS3rCFFUEXPAg&s=09',
      icon: <RiTwitterXFill className='size-5 sm:size-7' />,
      title: 'Twitter',
   },
   {
      social: 'hashnode',
      url: 'https://hashnode.com/@imnakul',
      icon: <SiHashnode className='size-5 sm:size-7' />,
      title: 'Hashnode',
   },

   {
      social: 'telegram',
      url: 'https://t.me/devtoolsspotlight',
      icon: <RiTelegram2Fill className='size-5 sm:size-7' />,
      title: 'Telegram',
   },
]

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   })

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      // Construct the mailto link
      const mailtoLink = `mailto:imnakul44@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
         `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:${formData.message}`
      )}`

      // Open the mail client
      window.location.href = mailtoLink
      setFormData({ name: '', email: '', message: '' })
   }

   return (
      <>
         {/* //? Contact Section */}
         {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
         <div
            id='contact-me'
            className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
         >
            <div className='max-w-7xl w-full'>
               <AnimatedContent direction='vertical' distance={50} delay={300}>
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
                           collaborations. Feel free to reach out if you have a
                           project in mind or just want to connect!
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
                                 imnakul44@gmail.com
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
                                 Meerut, INDIA
                              </span>
                           </div>

                           {/* <div className='flex items-center'>
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
                                       +91 
                                    </span>
                                 </div> */}
                        </div>
                        <div className='flex space-x-4 mt-8 justify-center'>
                           {socials.map((social, index) => (
                              <a
                                 key={index}
                                 href={social.url}
                                 target='_blank'
                                 className='size-10 sm:size-14 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors duration-300 filter-glow-hover'
                                 title={social.title}
                              >
                                 {social.icon}
                              </a>
                           ))}
                        </div>
                        {/* //?? Marquee Section */}
                        <div className='flex  mt-8 relative  w-full flex-col overflow-hidden'>
                           <span className='font-bold text-sm py-1'>
                              Articles You May Like:{' '}
                           </span>
                           <Marquee pauseOnHover className='[--duration:20s]'>
                              {/* //~ 1 Article */}
                              <div className='h-full w-64 flex flex-col items-center bg-[url("/bg2.jpg")] bg-cover bg-center bg-no-repeat bg-purple-800/30 border-purple-400  border-2 p-3 rounded-lg text-purple-200 font-bold text-2xl filter-glow-hover bg-blend-screen hover:opacity-80'>
                                 <a
                                    href='https://ragsimplified.hashnode.dev/series/advanced-rag-query-optimization-techniques'
                                    target='_blank'
                                    className='flex w-full cursor-pointer'
                                 >
                                    <span className='text-sm'>
                                       {' '}
                                       Advanced RAG: Query Optimization
                                       Techniques Explained
                                    </span>
                                 </a>
                              </div>
                              {/* //~ 2 Article */}
                              <div className='h-full w-64 flex flex-col items-center bg-[url("/bg2.jpg")] bg-cover bg-center bg-no-repeat bg-purple-800/30 border-purple-400  border-2 p-3 rounded-lg text-purple-200 font-bold text-2xl filter-glow-hover bg-blend-screen hover:opacity-80'>
                                 <a
                                    href='https://ragsimplified.hashnode.dev/query-routing'
                                    target='_blank'
                                    className='flex  w-full cursor-pointer'
                                 >
                                    <span className='text-sm'>
                                       Query Routing in RAG & Graph Databases
                                    </span>
                                 </a>
                              </div>
                              {/* //~ 3 Article */}
                              <div className='h-full w-64 flex flex-col items-center bg-[url("/bg2.jpg")] bg-cover bg-center bg-no-repeat bg-purple-800/30 border-purple-400  border-2 p-3 rounded-lg text-purple-200 font-bold text-2xl filter-glow-hover bg-blend-screen hover:opacity-80'>
                                 <a
                                    href='https://ragsimplified.hashnode.dev/unlocking-the-power-of-rag-enhancing-ai-with-retrieval-augmented-generation'
                                    target='_blank'
                                    className='flex w-full cursor-pointer'
                                 >
                                    <span className='text-sm'>
                                       {' '}
                                       Unlocking the Power of RAG: Enhancing AI
                                       with Retrieval-Augmented Generation
                                    </span>
                                 </a>
                              </div>

                              {/* //~ 4 Article */}
                              <div className='h-full w-64 flex flex-col items-center bg-[url("/bg2.jpg")] bg-cover bg-center bg-no-repeat bg-purple-800/30 border-purple-400 filter-glow-hover border-2 p-3 rounded-lg text-purple-200 font-bold text-2xl bg-blend-screen hover:opacity-80'>
                                 <a
                                    href='https://llmsinaction.hashnode.dev/agents-llms-and-apis-a-developers-guide-to-local-ai-and-cloud-deployment'
                                    target='_blank'
                                    className='flex w-full cursor-pointer '
                                 >
                                    <span className='text-sm'>
                                       Exploring the World of LLMs Beyond the
                                       Cloud
                                    </span>
                                 </a>
                              </div>

                              {/* //~ 5 Article */}
                              <div className='h-full w-64 flex flex-col items-center bg-[url("/bg2.jpg")] bg-cover bg-center bg-no-repeat bg-purple-800/30 border-purple-400 filter-glow-hover border-2 p-3 rounded-lg text-purple-200 font-bold text-2xl bg-blend-screen hover:opacity-80'>
                                 <a
                                    href='https://aisimplified.hashnode.dev/decoding-ai-jargons-with-chai-chaicode'
                                    target='_blank'
                                    className='flex w-full cursor-pointer '
                                 >
                                    <span className='text-sm'>
                                       𝐃𝐞𝐜𝐨𝐝𝐢𝐧𝐠 𝐀𝐈 𝐉𝐚𝐫𝐠𝐨𝐧𝐬
                                    </span>
                                 </a>
                              </div>
                           </Marquee>
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
                                 name='name'
                                 id='name'
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                              />
                           </div>

                           <div>
                              <label className='block text-gray-300 mb-2'>
                                 Email
                              </label>
                              <input
                                 type='email'
                                 name='email'
                                 id='email'
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                              />
                           </div>

                           <div>
                              <label className='block text-gray-300 mb-2'>
                                 Message
                              </label>
                              <textarea
                                 rows='4'
                                 name='message'
                                 id='message'
                                 value={formData.message}
                                 onChange={handleInputChange}
                                 className='w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                              ></textarea>
                           </div>

                           <button
                              type='submit'
                              onClick={handleSubmit}
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
         {/* </FadeContent> */}
      </>
   )
}
export default Contact
