import { useState } from 'react'

export default function CognitiveTwin() {
   const [input, setInput] = useState('')
   const [messages, setMessages] = useState([])
   const [loading, setLoading] = useState(false)

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
         const botMsg = { role: 'assistant', content: data.result }
         setMessages((prev) => [...prev, botMsg])
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
      <div className='max-w-3xl mx-auto p-4 bg-purple-950/50 rounded-xl shadow-lg'>
         {/* <h2 className='text-xl font-bold mb-4'>🧠 Nakul's Cognitive Twin</h2> */}
         <div className='h-80 overflow-y-auto mb-4 border p-2 bg-gray-700 rounded-md'>
            {messages.map((msg, i) => (
               <div
                  key={i}
                  className={`mb-2 ${
                     msg.role === 'user' ? 'text-right' : 'text-left'
                  }`}
               >
                  <span className='inline-block px-3 py-1 rounded-md bg-gray-900'>
                     {msg.content}
                  </span>
               </div>
            ))}
            {loading && <p className='italic text-gray-500'>Thinking...</p>}
         </div>

         <div className='flex gap-2'>
            <input
               className='flex-1 p-2 border rounded-md'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Ask Nakul's twin anything..."
            />
            <button
               onClick={handleSend}
               className='bg-blue-600 text-white px-4 py-2 rounded-md'
            >
               Send
            </button>
         </div>
      </div>
   )
}
