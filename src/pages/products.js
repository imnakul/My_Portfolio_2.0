import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function Products() {
   const products = [
      {
         name: 'SaveSpark',
         description: 'AI-powered Idea Management Tool',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752027892/302_1x_shots_so_t19gxx.png', // Replace with actual product image
         status: 'Live',
         link: 'https://savespark.com',
         tech: ['Next.js', 'AI', 'Firebase'],
         category: 'SaaS',
         type: 'Personal',
      },
      {
         name: 'Powerhouse Gym',
         description: 'Website for Powerhouse Gym at Meerut',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752026104/469shiots_so_tl9bx8.png',
         status: 'Live',
         link: 'https://www.powerhousegymmrt.site',
         tech: ['React'],
         category: 'Website',
         type: 'Client',
      },

      {
         name: 'BuildifyWeb',
         description: 'Python GUI No-code drag & drop builder.',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1751990243/311_1x_shots_so_uh5ukw.png', // Replace with actual product image
         status: 'Live',
         link: 'https://buildfy.online',
         tech: ['React'],
         category: 'Platform',
         type: 'Collaboration',
      },
      {
         name: 'DataVista',
         description: 'AI Powered Data Analytics.',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752640153/Datavista_b5sntq.png', // Replace with actual product image
         status: 'Live',
         link: 'https://datavista1.vercel.app',
         tech: ['React', 'Gemini', 'Firebase'],
         category: 'SaaS',
         type: 'Collaboration',
      },

      {
         name: 'Flexitasks',
         description: 'Task Manager with Flexibility in its DNA.',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752029103/210shots_lso_k2oypg.png',
         status: 'Live',
         link: 'https://www.flexitasks.devnakul.me',
         tech: ['React', 'Tailwind', 'Framer'],
         category: 'Platform',
         type: 'Personal',
      },
      {
         name: 'JB Sweets',
         description: 'Sweet Shop Website',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752027184/360_1x_shots_so_goxesz.png',
         status: 'Live',
         link: 'https://www.jbsweets.vercel.app',
         tech: ['Next.js'],
         category: 'Website',
         type: 'Client',
      },
      {
         name: 'AskMark',
         description: 'Bookmarks you can talk to!',
         image: 'https://res.cloudinary.com/dp2bzu9e2/image/upload/v1752031041/725shots_so_xtnegs.png',
         status: 'Coming Soon',
         link: 'https://www.askmark.vercel.app',
         tech: ['Next.js', 'Firebase', 'Gen AI'],
         category: 'Platform',
         type: 'Personal',
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

         <div className='min-h-screen text-white bg-gradient-to-br from-[#1a1333] via-[#18122b] to-[#1e2240]'>
            {/* Header */}
            <div className='relative bg-gradient-to-b from-purple-900/40 via-transparent to-transparent'>
               <div className='absolute inset-0 bg-black/30 pointer-events-none' />
               <div className='relative z-10 max-w-6xl mx-auto px-4 py-8'>
                  <h1 className='text-5xl font-bold mb-4 gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                     Digital Products
                  </h1>
                  <p className='text-xl text-gray-300 max-w-3xl'>
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
                              src={
                                 product.image.includes('cloudinary.com')
                                    ? product.image.replace('/upload/', '/upload/w_600,q_auto,f_auto/')
                                    : product.image
                              }
                              alt={product.name}
                              fill
                              className='object-cover'
                              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              priority={index < 3}
                           />
                           {/* Type & Category Badges (top left) */}
                           <div className='absolute top-4 left-4 flex flex-col gap-1 z-10'>
                              <span className='text-xs px-2 py-1 rounded-full font-semibold bg-purple-800/90 text-white border border-purple-400/30 shadow-sm'>
                                 {product.type}
                              </span>
                           </div>
                           {/* Status Badge (top right) */}
                           <div className='absolute top-4 right-4 z-10'>
                              <span
                                 className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
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
                              <span className='text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded mt-1'>
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

                           <div className='flex items-start justify-between'>
                              {product.status === 'Live' ? (
                                 <a
                                    href={product.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors'
                                 >
                                    Visit
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
                     </div>
                  ))}
               </div>
            </div>

            {/* CTA Section */}
            <div className='bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-8'>
               <div className='max-w-4xl mx-auto text-center px-4'>
                  <h2 className='text-3xl font-bold mb-4'>Have a Product Idea?</h2>
                  <p className='text-gray-300 mb-8'>
                     Let&apos;s collaborate and bring your digital product vision to life
                  </p>
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
