import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html lang='en'>
         <Head>
            <title>Portfolio</title>
            <meta
               name='description'
               content='Learn more about Nakul, a web developer passionate about frontend tech.'
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Orbitron:wght@700;900&display=swap" rel="stylesheet" />
            <link rel='icon' href='/logo2.svg' />
         </Head>
         <body className='antialiased'>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
