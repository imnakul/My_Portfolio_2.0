import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import CognitiveTwinTooltip from './CognitiveTwinTooltip'

export default function CognitiveTwin() {
   const [input, setInput] = useState('')
   const [messages, setMessages] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      if (messages.length === 0) {
         const welcomeMessage = {
            role: 'assistant',
            content:
               'Hello, I am Nakul’s Cognitive Twin. How may I help you today? To know more about me, Hover over question Icon at the top right corner.',
         }
         setMessages([welcomeMessage])

         setTimeout(() => setMessages([welcomeMessage]), 800)
      }
   }, [])

   const handleSend = async () => {
      if (!input.trim()) return

      const userMsg = { role: 'user', content: input }
      setMessages((prev) => [...prev, userMsg])
      setInput('')
      setLoading(true)

      try {
         const res = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userPrompt: input }),
         })

         const data = await res.json()
         // const botMsg = { role: 'assistant', content: data.result }
         // setMessages((prev) => [...prev, botMsg])

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
         }, 50)
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
      <div className='max-w-7xl mx-auto p-2  rounded-xl shadow-lg flex items-center justify-between gap-4'>
         {/* //? Chat Box  */}
         <div className='min-w-4xl mx-auto rounded-xl shadow-lg'>
            <CognitiveTwinTooltip />
            <div className='h-96 overflow-y-auto mb-4 border border-purple-400 p-4 rounded-md'>
               {messages.map((msg, i) => (
                  <div
                     key={i}
                     className={`mb-2 ${
                        msg.role === 'user'
                           ? 'text-right text-purple-300 '
                           : 'text-left text-indigo-300 '
                     }`}
                  >
                     <span
                        className={`inline-block px-3 py-1 max-w-prose rounded-lg  ${
                           msg.role === 'user'
                              ? 'bg-[#2c133a]  border border-purple-600'
                              : '  bg-[#160f34] border border-indigo-600 '
                        } p-4 shadow-md`}
                     >
                        <ReactMarkdown
                           breaks={true}
                           // linkTarget='_blank'
                           components={{
                              h1: ({ node, ...props }) => (
                                 <h1
                                    className='text-2xl font-bold my-4'
                                    {...props}
                                 />
                              ),
                              p: ({ node, ...props }) => (
                                 <p
                                    className='my-2 leading-relaxed'
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
                                 <li className='ml-6 list-disc my-2'>
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
                        {/* {msg.content} */}
                     </span>
                  </div>
               ))}
               {loading && (
                  <p className='italic text-gray-500 animate-pulse'>
                     Thinking...
                  </p>
               )}
            </div>

            <div className='flex gap-2'>
               <input
                  className='flex-1 p-2 border border-purple-400 rounded-md outline-none hover:ring-2 hover:ring-purple-400 focus:outline-none focus:ring-purple-400 transition duration-300 ease-in-out'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='Ask anything about Nakul...'
               />
               <button
                  onClick={handleSend}
                  className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800 '
                  onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSend()
                     }
                  }}
               >
                  Send
               </button>
            </div>
         </div>

         {/* //? Suggestion Box  */}
         {/* <div className='w-lg mx-auto p-4 bg-purple-950/50 rounded-xl shadow-lg'>
            Suggestions Box
         </div> */}
      </div>
   )
}
