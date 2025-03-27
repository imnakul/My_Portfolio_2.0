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

            <link rel='icon' href='/logo2.svg' />
         </Head>
         <body className='antialiased'>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
