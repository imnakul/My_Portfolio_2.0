import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { FaPaperPlane } from 'react-icons/fa'

const SUGGESTIONS = [
   "What are Nakul's top skills?",
   "Show Nakul's latest projects.",
   'How to contact Nakul?',
   'What is Nakul passionate about?',
   'Share a fun fact about Nakul.',
]

export default function CognitiveTwin() {
   const [input, setInput] = useState('')
   const [messages, setMessages] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      if (messages.length === 0) {
         const welcomeMessage = {
            role: 'assistant',
            content:
               'Hello, I am Nakul’s Cognitive Twin 🤖. Ask me anything about Nakul! (Try the suggestions on the side or below.)',
         }
         setMessages([welcomeMessage])
         // setTimeout(() => setMessages([welcomeMessage]), 800)
      }
   }, [])

   const handleSend = async (customInput) => {
      const value = typeof customInput === 'string' ? customInput : input
      if (!value.trim()) return
      const userMsg = { role: 'user', content: value }
      setMessages((prev) => [...prev, userMsg])
      setInput('')
      setLoading(true)
      try {
         const res = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userPrompt: value }),
         })
         const data = await res.json()
         const words = data.result.split(' ')
         let index = 0
         let currentContent = ''
         const botMsg = { role: 'assistant', content: '' }
         setMessages((prev) => [...prev, botMsg])
         const typeInterval = setInterval(() => {
            if (index >= words.length) {
               clearInterval(typeInterval)
               return
            }
            currentContent += words[index] + ' '
            setMessages((prev) => {
               const updated = [...prev]
               updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: currentContent,
               }
               return updated
            })
            index++
         }, 30)
      } catch (err) {
         setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: 'Something went wrong!' },
         ])
      } finally {
         setLoading(false)
      }
   }

   return (
      <div
         className='w-full gap-4 flex-col flex sm:flex-row'
         style={{
            touchAction: 'manipulation',
            overflow: 'visible',
            maxHeight: 'none',
         }}
      >
         {/* Chat Area */}
         <div className='flex-1 flex flex-col min-w-0'>
            <div
               className='overflow-auto px-1 sm:px-2 pb-2 pt-2 rounded-t-xl sm:rounded-t-2xl scrollbar-thin scrollbar-thumb-purple-700/40 scrollbar-track-transparent h-[50vh] sm:h-[400px] max-h-[60vh] sm:max-h-[400px] w-full bg-transparent'
               style={{
                  background: 'transparent',
               }}
               tabIndex={-1}
               onTouchStart={(e) => e.stopPropagation()}
            >
               {messages.map((msg, i) => (
                  <div
                     key={i}
                     className={`mb-2 sm:mb-3 flex ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                     }`}
                  >
                     <div
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-md text-sm sm:text-base whitespace-pre-line break-words transition-all max-w-[90vw] sm:max-w-[80%] ${
                           msg.role === 'user'
                              ? 'bg-gradient-to-br from-purple-700/80 to-pink-600/80 text-white border border-purple-400'
                              : 'bg-[#1a1033]/80 border border-indigo-600 text-purple-200'
                        }`}
                        style={{
                           boxShadow:
                              msg.role === 'user'
                                 ? '0 2px 12px 0 #a21caf33'
                                 : '0 2px 12px 0 #6366f133',
                           backdropFilter: 'blur(4px)',
                           wordBreak: 'break-word',
                        }}
                     >
                        <ReactMarkdown
                           breaks={true}
                           components={{
                              h1: ({ node, ...props }) => (
                                 <h1
                                    className='text-lg sm:text-xl font-bold my-2'
                                    {...props}
                                 />
                              ),
                              p: ({ node, ...props }) => (
                                 <p
                                    className='my-1 leading-relaxed'
                                    {...props}
                                 />
                              ),
                              a: ({ node, ...props }) => (
                                 <a
                                    className='text-blue-400 underline hover:text-blue-600 my-2'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    {...props}
                                 />
                              ),
                              li: ({ node, ...props }) => (
                                 <li className='ml-6 list-disc my-1'>
                                    {props.children}
                                 </li>
                              ),
                              strong: ({ node, ...props }) => (
                                 <strong className='font-semibold'>
                                    {props.children}
                                 </strong>
                              ),
                           }}
                        >
                           {msg.content}
                        </ReactMarkdown>
                     </div>
                  </div>
               ))}
               {loading && (
                  <div className='flex items-center gap-2 text-purple-400 animate-pulse mb-2'>
                     <span className='w-2 h-2 bg-purple-400 rounded-full animate-bounce' />
                     <span>Thinking...</span>
                  </div>
               )}
            </div>
            {/* Input Bar */}
            <form
               className='w-full flex items-center gap-2 bg-[#1a1033]/80 backdrop-blur-md px-1 sm:px-2 py-2 sm:py-3 rounded-b-xl sm:rounded-b-2xl border-t border-purple-700/40'
               onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
               }}
               autoComplete='off'
               style={{ position: 'relative', zIndex: 2 }}
            >
               <input
                  className='flex-1 p-2 bg-transparent border border-purple-400 rounded-md outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300 transition-all duration-200 text-sm sm:text-base'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Ask anything about Nakul...'
                  autoFocus
                  autoComplete='off'
                  enterKeyHint='send'
               />
               <button
                  type='submit'
                  className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-purple-800 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 shadow-lg border border-purple-400 text-sm sm:text-base'
                  aria-label='Send'
               >
                  <FaPaperPlane className='text-base sm:text-lg' />
               </button>
            </form>
            {/* Mobile suggestions below chat, horizontal scrollable row */}
            <div className='flex sm:hidden flex-row flex-nowrap gap-2 px-1 pt-2 pb-4  w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-700/40 scrollbar-track-transparent'>
               {SUGGESTIONS.map((s, idx) => (
                  <button
                     key={idx}
                     className='bg-gradient-to-r from-purple-700/80 to-pink-600/80 text-white text-xs px-3 py-1 rounded-full border border-purple-400 hover:scale-105 transition-all duration-200 shadow min-w-[120px] max-w-[90vw] text-center whitespace-normal flex-shrink-0'
                     style={{
                        borderRadius: '9999px',
                        minHeight: '32px',
                        height: 'auto',
                        padding: '0.25rem 0.75rem',
                        fontSize: '13px',
                        margin: 0,
                     }}
                     onClick={() => handleSend(s)}
                     tabIndex={0}
                  >
                     {s}
                  </button>
               ))}
            </div>
         </div>
         {/* Desktop suggestions right side */}
         <div className='hidden sm:flex flex-col gap-2 min-w-[140px] max-w-[200px] pt-2'>
            <div className='font-semibold text-purple-300 mb-2 text-xs sm:text-sm'>
               Suggestions
            </div>
            {SUGGESTIONS.map((s, idx) => (
               <button
                  key={idx}
                  className='bg-gradient-to-r from-purple-700/80 to-pink-600/80 text-white text-xs px-2 py-1.5 rounded-full border border-purple-400 hover:scale-105 transition-all duration-200 shadow text-left'
                  onClick={() => handleSend(s)}
                  tabIndex={0}
               >
                  {s}
               </button>
            ))}
         </div>
      </div>
   )
}
