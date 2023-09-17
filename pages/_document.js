import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: "Nisarga's Website",
    description: "Nisarga Adhikary's personal site",
    image: 'https://media.tenor.com/_HufrrKY36YAAAAC/anime.gif'
  }
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
