import '@/styles/globals.css'
import '../styles/nprogress.css'
import '../lib/nprogress-client'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

// Import Google Fonts using next/font/google (no variables, just className)
import { Inter, Orbitron } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '900'] })

export default function App({ Component, pageProps }) {
   // Apply both font classNames to the main wrapper so both are available globally
   return (
      <main className={`${inter.className} ${orbitron.className}`}>
         <Component {...pageProps} />
         <SpeedInsights />
         <Analytics />
      </main>
   )
}
