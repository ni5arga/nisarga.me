import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Nisarga Adhikary',
    description: 'Personal Website Of Nisarga Adhikary (Full Stack Web Developer & Cybersecurity Enthusiast)',
    image: 'https://avatars.githubusercontent.com/u/45588772?v=4'
  }

  const YEAR = new Date().getFullYear()
const now = new Date();
const HOUR = now.getHours();
const MINUTE = now.getMinutes();
const SECOND = now.getSeconds();

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
