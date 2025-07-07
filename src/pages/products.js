import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function Products() {
   const products = [
      {
         name: 'SaveSpark',
         description: 'AI-powered Idea Management Tool',
         image: '/image.png', // Replace with actual product image
         status: 'Coming Soon',
         link: 'https://savespark.com',
         tech: ['Next.js', 'AI', 'Firebase'],
         category: 'SaaS',
      },
      {
         name: 'Powerhouse Gym Website',
         description: 'Website for Powerhouse Gym at Meerut',
         image: '/image.png', // Replace with actual product image
         status: 'Live',
         link: 'https://www.powerhousegymmrt.site',
         tech: ['React'],
         category: 'Website',
      },

      {
         name: 'BuildifyWeb',
         description: 'Python GUI builder with Drag & Drop - No Code.',
         image: '/image.png', // Replace with actual product image
         status: 'Live',
         link: 'https://buildfy.online',
         tech: ['React'],
         category: 'Platform',
      },
      {
         name: 'JB Sweets',
         description: 'Sweet Shop Website',
         image: '/image.png', // Replace with actual product image
         status: 'Live',
         link: 'https://www.jbsweets.vercel.app',
         tech: ['Next.js'],
         category: 'Website',
      },
      {
         name: 'AskMark',
         description: 'You can talk to your Bookmarks',
         image: '/image.png', // Replace with actual product image
         status: 'Coming Soon',
         link: 'https://www.askmark.vercel.app',
         tech: ['Next.js , Firebase , Gen AI'],
         category: 'Platform',
      },
      {
         name: 'Flexitasks',
         description: 'Task Manager with Flexible layout, themes and Features.',
         image: '/image.png', // Replace with actual product image
         status: 'Live',
         link: 'https://www.flexitasks.devnakul.me',
         tech: ['React, Tailwind , Framer'],
         category: 'Platform',
      },
      // Add more products as needed
   ]

   return (
      <>
         <Head>
            <title>Products - Nakul Srivastava | Digital Products & SaaS</title>
            <meta
               name='description'
               content='Explore digital products and SaaS solutions built by Nakul Srivastava including SaveSpark, BuildifyWeb and more.'
            />
            <meta
               name='keywords'
               content='Nakul Srivastava Products, SaaS, Digital Products, SaveSpark, BuildifyWeb, Web Applications'
            />
            <link
               rel='canonical'
               href='https://devnakul.me/products'
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

         <div className='min-h-screen bg-gray-900 text-white'>
            {/* Header */}
            <div className='relative bg-gradient-to-b from-purple-900/20 to-transparent'>
               <div className='absolute inset-0 bg-black/30' />
               <div className='relative z-10 max-w-6xl mx-auto px-4 py-8'>
                  <h1 className='text-5xl font-bold mb-4 gradient-text'>Digital Products</h1>
                  <p className='text-xl text-gray-300 max-w-2xl'>
                     Innovative SaaS solutions and digital products that solve real-world problems
                  </p>
               </div>
            </div>

            {/* Products Grid */}
            <div className='max-w-6xl mx-auto px-4 py-8'>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {products.map((product, index) => (
                     <div
                        key={index}
                        className='glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300'
                     >
                        <div className='relative h-48 bg-gradient-to-br from-purple-600 to-blue-600'>
                           <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className='object-cover'
                           />
                           <div className='absolute top-4 right-4'>
                              <span
                                 className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    product.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                 }`}
                              >
                                 {product.status}
                              </span>
                           </div>
                        </div>

                        <div className='p-6'>
                           <div className='flex items-start justify-between mb-4'>
                              <h3 className='text-xl font-bold'>{product.name}</h3>
                              <span className='text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded'>
                                 {product.category}
                              </span>
                           </div>

                           <p className='text-gray-300 text-sm mb-4'>{product.description}</p>

                           <div className='flex flex-wrap gap-1 mb-4'>
                              {product.tech.map((tech, i) => (
                                 <span
                                    key={i}
                                    className='text-xs bg-gray-700 px-2 py-1 rounded'
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>

                           {product.status === 'Live' ? (
                              <a
                                 href={product.link}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors'
                              >
                                 Visit Product
                                 <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                 >
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       strokeWidth={2}
                                       d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                    />
                                 </svg>
                              </a>
                           ) : (
                              <button
                                 disabled
                                 className='inline-flex items-center gap-2 bg-gray-600 px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed opacity-60'
                              >
                                 Coming Soon
                              </button>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* CTA Section */}
            <div className='bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-8'>
               <div className='max-w-4xl mx-auto text-center px-4'>
                  <h2 className='text-3xl font-bold mb-4'>Have a Product Idea?</h2>
                  <p className='text-gray-300 mb-8'>Let's collaborate and bring your digital product vision to life</p>
                  <Link
                     href='/services'
                     className='inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                  >
                     Explore Services
                     <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M9 5l7 7-7 7'
                        />
                     </svg>
                  </Link>
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
