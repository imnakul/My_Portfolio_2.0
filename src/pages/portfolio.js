import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

// Import your existing components
const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'), {
   ssr: false,
   loading: () => <div />,
})
const AboutMe = dynamic(() => import('@/components/AboutMe'), {
   ssr: false,
   loading: () => <div style={{ height: 600 }} />,
})
const Skills = dynamic(() => import('@/components/Skills'), {
   loading: () => <div style={{ height: 200 }} />,
})
const Projects = dynamic(() => import('@/components/Projects'), {
   loading: () => <div style={{ height: 200 }} />,
})
const Badges = dynamic(() => import('@/components/Badges'), {
   loading: () => <div style={{ height: 200 }} />,
})
const CognitiveTwin = dynamic(() => import('@/components/CognitiveTwin'), {
   loading: () => <div style={{ height: 200 }} />,
})
const CognitiveTwinTooltip = dynamic(() => import('@/components/CognitiveTwinTooltip'))
const Contact = dynamic(() => import('@/components/Contact'), {
   loading: () => <div style={{ height: 200 }} />,
})
const Navigationbar = dynamic(() => import('@/components/NavigationBar'))
const GlowingEffect = dynamic(() => import('@/components/ui/GlowingEffect'))
const AnimatedContent = dynamic(() => import('@/components/ui/AnimatedContent/AnimatedContent'))

export default function Portfolio() {
   return (
      <>
         <Head>
            <title>Portfolio - Nakul Srivastava | Full Stack Developer</title>
            <meta
               name='description'
               content="Explore Nakul Srivastava's portfolio showcasing web development projects, AI integrations, and full-stack applications."
            />
            <meta
               name='keywords'
               content='Nakul Srivastava Portfolio, Web Development Projects, MERN Stack, Next.js Projects, AI Integration'
            />
            <link
               rel='canonical'
               href='https://devnakul.me/portfolio'
            />

            {/* Breadcrumb structured data */}
            <script
               type='application/ld+json'
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     '@context': 'https://schema.org',
                     '@type': 'BreadcrumbList',
                     itemListElement: [
                        {
                           '@type': 'ListItem',
                           position: 1,
                           name: 'Home',
                           item: 'https://devnakul.me',
                        },
                        {
                           '@type': 'ListItem',
                           position: 2,
                           name: 'Portfolio',
                           item: 'https://devnakul.me/portfolio',
                        },
                     ],
                  }),
               }}
            />
         </Head>

         <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-P4718BFDQP'
         ></Script>
         <Script
            dangerouslySetInnerHTML={{
               __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4718BFDQP');
            `,
            }}
         />

         <div className='min-h-screen min-w-full bg-gray-900'>
            <ParticleBackground particleCount={30} />

            <Navigationbar />
            <AboutMe />
            <Skills />
            <Projects />
            <Badges />

            {/* Cognitive Twin Section */}
            <div
               id='ai'
               className='sm:flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
            >
               {/* Desktop View */}
               <div className='sm:max-w-7xl w-full sm:block hidden'>
                  <AnimatedContent
                     direction='vertical'
                     distance={50}
                     delay={300}
                  >
                     <h2 className='text-4xl font-bold mb-8 gradient-text'>Echo of Nakul</h2>
                  </AnimatedContent>

                  <div className='grid grid-cols-1 '>
                     <AnimatedContent
                        direction='horizontal'
                        distance={50}
                        delay={400}
                     >
                        <div className='glass-effect rounded-xl card-glow p-6 h-full '>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-2xl font-bold mb-4 text-purple-400 '>🧠 Nakul's Cognitive Twin</h3>
                           <CognitiveTwinTooltip />
                           <AnimatedContent
                              direction='horizontal'
                              distance={50}
                              delay={400}
                           >
                              <CognitiveTwin />
                           </AnimatedContent>
                        </div>
                     </AnimatedContent>
                  </div>
               </div>

               {/* Mobile View */}
               <div className='sm:hidden block max-w-xs '>
                  <AnimatedContent
                     direction='vertical'
                     distance={50}
                     delay={300}
                  >
                     <h2 className='text-4xl font-bold mb-8 gradient-text'>Echo of Nakul</h2>
                  </AnimatedContent>

                  <div className='grid grid-cols-1'>
                     <div className='glass-effect rounded-xl card-glow sm:px-6 xm:py-6 px-2 py-4 h-full w-sm '>
                        <GlowingEffect
                           spread={40}
                           glow={true}
                           disabled={false}
                           proximity={64}
                           inactiveZone={0.01}
                        />
                        <h3 className='text-xl font-bold mb-2 text-purple-400 ml-2'>🧠 Nakul's Cognitive Twin</h3>
                        <CognitiveTwinTooltip />
                        <CognitiveTwin />
                     </div>
                  </div>
               </div>
            </div>

            <Contact />

            {/* Footer */}
            <div className='glass-effect py-6 text-center'>
               <p className='text-gray-400'>© {new Date().getFullYear()} Nakul Srivastava. All rights reserved.</p>
            </div>
         </div>

         <style jsx>{`
            .glass-card-nav {
               display: flex;
               align-items: center;
               gap: 8px;
               background: rgba(255, 255, 255, 0.1);
               backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.2);
               border-radius: 8px;
               padding: 8px 12px;
               transition: all 0.3s ease;
            }

            .glass-card-nav:hover {
               background: rgba(255, 255, 255, 0.15);
               border-color: rgba(255, 255, 255, 0.3);
               transform: translateY(-1px);
            }
         `}</style>
      </>
   )
}
