import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Script from 'next/script'

export default function Services() {
   const [selectedService, setSelectedService] = useState(null)

   const services = [
      {
         title: 'Full-Stack Web Development',
         description: 'Complete web application development using modern technologies',
         price: 'Starting from $2,000',
         duration: '2-8 weeks',
         features: [
            'Custom web application development',
            'Responsive design implementation',
            'Database design and integration',
            'API development and integration',
            'Performance optimization',
            'Testing and deployment',
         ],
         technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'TailwindCSS'],
         icon: '🌐',
      },
      {
         title: 'AI Integration Services',
         description: 'Integrate AI capabilities into your existing applications',
         price: 'Starting from $1,500',
         duration: '1-4 weeks',
         features: [
            'ChatGPT/OpenAI API integration',
            'Custom AI model implementation',
            'Natural language processing',
            'Image processing with AI',
            'Recommendation systems',
            'AI chatbot development',
         ],
         technologies: ['OpenAI API', 'Python', 'TensorFlow', 'Langchain', 'Vector Databases'],
         icon: '🤖',
      },
      {
         title: 'E-commerce Development',
         description: 'Build scalable e-commerce platforms with modern features',
         price: 'Starting from $3,000',
         duration: '4-12 weeks',
         features: [
            'Complete e-commerce platform',
            'Payment gateway integration',
            'Inventory management system',
            'Admin dashboard',
            'SEO optimization',
            'Mobile app development',
         ],
         technologies: ['Next.js', 'Stripe', 'PayPal', 'WooCommerce', 'Shopify'],
         icon: '🛒',
      },
      {
         title: 'SEO & Performance Optimization',
         description: 'Optimize your website for search engines and performance',
         price: 'Starting from $800',
         duration: '1-3 weeks',
         features: [
            'Technical SEO audit',
            'Performance optimization',
            'Core Web Vitals improvement',
            'Schema markup implementation',
            'Site speed optimization',
            'Mobile optimization',
         ],
         technologies: ['Google Analytics', 'Search Console', 'PageSpeed Insights', 'Lighthouse'],
         icon: '📈',
      },
      {
         title: 'Consultation & Code Review',
         description: 'Expert consultation and code review services',
         price: 'Starting from $100/hour',
         duration: 'Flexible',
         features: [
            'Code architecture review',
            'Performance audit',
            'Security assessment',
            'Best practices consultation',
            'Technology stack recommendations',
            'Project planning and strategy',
         ],
         technologies: ['All Major Frameworks', 'DevOps', 'Cloud Platforms', 'Security Tools'],
         icon: '💡',
      },
      {
         title: 'UI/UX Design & Development',
         description: 'Beautiful, user-friendly interface design and development',
         price: 'Starting from $1,200',
         duration: '2-6 weeks',
         features: [
            'Custom UI/UX design',
            'Figma to code conversion',
            'Interactive prototypes',
            'Design system creation',
            'User experience optimization',
            'Cross-platform compatibility',
         ],
         technologies: ['Figma', 'Adobe XD', 'React', 'Vue.js', 'TailwindCSS', 'Framer Motion'],
         icon: '🎨',
      },
   ]

   return (
      <>
         <Head>
            <title>Services - Nakul Srivastava | Web Development & AI Integration</title>
            <meta
               name='description'
               content='Professional web development, AI integration, and digital services by Nakul Srivastava. Full-stack development, SEO optimization, and consultation services.'
            />
            <meta
               name='keywords'
               content='Web Development Services, AI Integration, Full Stack Developer, SEO Services, Consultation, Nakul Srivastava'
            />
            <link
               rel='canonical'
               href='https://devnakul.me/services'
            />
         </Head>

         <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-P4718BFDQP'
            strategy='lazyOnload'
         ></Script>
         <Script
            id='google-analytics-inline'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
               __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4718BFDQP');
            `,
            }}
         />

         {/* NeetoCal Integration */}
         <Script
            id='neetocal-init'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
               __html: `
              window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };
            `,
            }}
         />
         <Script
            src='https://cdn.neetocal.com/javascript/embed.js'
            strategy='lazyOnload'
         />
         <Script
            id='neetocal-embed'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
               __html: `
              neetoCal.embed({
                type: "elementClick",
                id: "80f92cfe-b995-4c6c-961b-0fe360b701e6",
                organization: "imnakul",
                elementSelector: "#schedule-call-button",
              });
            `,
            }}
         />

         <div className='min-h-screen bg-gray-900 text-white'>
            {/* Header */}
            <div className='relative bg-gradient-to-b from-purple-900/40 via-transparent to-transparent'>
               <div className='absolute inset-0 bg-black/30' />
               <div className='relative z-10 max-w-6xl mx-auto px-4 py-8'>
                  <h1 className='text-5xl font-bold mb-4 gradient-text'>Professional Services</h1>
                  <p className='text-xl text-gray-300 max-w-2xl'>
                     Transform your ideas into powerful digital solutions with expert development and AI integration
                     services
                  </p>
               </div>
            </div>

            {/* Services Grid */}
            <div className='max-w-6xl mx-auto px-4 py-8'>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {services.map((service, index) => (
                     <div
                        key={index}
                        className='glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer'
                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                     >
                        <div className='text-4xl mb-4'>{service.icon}</div>
                        <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                        <p className='text-gray-300 text-sm mb-4'>{service.description}</p>

                        {/* <div className='flex justify-between items-center mb-4'>
                           <span className='text-purple-400 font-semibold'>{service.price}</span>
                           <span className='text-gray-400 text-sm'>{service.duration}</span>
                        </div> */}

                        {selectedService === index && (
                           <div className='border-t border-gray-700 pt-4 mt-4'>
                              <h4 className='font-semibold mb-2'>What&apos;s Included:</h4>
                              <ul className='text-sm text-gray-300 space-y-1 mb-4'>
                                 {service.features.map((feature, i) => (
                                    <li
                                       key={i}
                                       className='flex items-center gap-2'
                                    >
                                       <svg
                                          className='w-4 h-4 text-green-400 flex-shrink-0'
                                          fill='none'
                                          stroke='currentColor'
                                          viewBox='0 0 24 24'
                                       >
                                          <path
                                             strokeLinecap='round'
                                             strokeLinejoin='round'
                                             strokeWidth={2}
                                             d='M5 13l4 4L19 7'
                                          />
                                       </svg>
                                       {feature}
                                    </li>
                                 ))}
                              </ul>

                              <h4 className='font-semibold mb-2'>Technologies:</h4>
                              <div className='flex flex-wrap gap-1 mb-4'>
                                 {service.technologies.map((tech, i) => (
                                    <span
                                       key={i}
                                       className='text-xs bg-gray-700 px-2 py-1 rounded'
                                    >
                                       {tech}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        )}

                        <button className='w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors mt-4'>
                           Get Quote
                        </button>
                     </div>
                  ))}
               </div>
            </div>

            {/* Process Section */}
            <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 py-8'>
               <div className='max-w-6xl mx-auto px-4'>
                  <h2 className='text-3xl font-bold text-center mb-12'>My Process</h2>
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                     {[
                        { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
                        { step: '02', title: 'Planning', description: 'Creating a detailed project roadmap' },
                        {
                           step: '03',
                           title: 'Development',
                           description: 'Building your solution with regular updates',
                        },
                        { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' },
                     ].map((phase, index) => (
                        <div
                           key={index}
                           className='text-center'
                        >
                           <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                              {phase.step}
                           </div>
                           <h3 className='text-lg font-semibold mb-2'>{phase.title}</h3>
                           <p className='text-gray-300 text-sm'>{phase.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* CTA Section */}
            <div className='py-8 bg-gradient-to-b from-transparent via-transparent to-purple-900/40'>
               <div className='max-w-4xl mx-auto text-center px-4'>
                  <h2 className='text-3xl font-bold mb-4'>Ready to Start Your Project?</h2>
                  <p className='text-gray-300 mb-8'>
                     Let&apos;s discuss your requirements and create something amazing together
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                     <a
                        href='mailto:imnakul44@gmail.com'
                        className='inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors'
                     >
                        📧 Email Me
                     </a>
                     <button
                        id='schedule-call-button'
                        className='inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer'
                     >
                        📅 Schedule a Meet
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            .glass-card-nav {
               background: rgba(255, 255, 255, 0.1);
               backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.2);
               border-radius: 8px;
               padding: 8px 12px;
               color: white;
               text-decoration: none;
               transition: all 0.3s ease;
            }

            .glass-card-nav:hover {
               background: rgba(255, 255, 255, 0.15);
               transform: translateY(-1px);
            }

            .glass-effect {
               background: rgba(255, 255, 255, 0.05);
               backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.1);
            }
         `}</style>
      </>
   )
}
