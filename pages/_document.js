import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const meta = {
    title: 'Nisarga',
    description: "ni5arga's little personal portfolio",
    url: 'https://nisarga.me',
    author: 'Nisarga Adhikary',
    keywords: 'nisarga, ni5arga, nisarga adhikary, nisarga portfolio, ni5arga site, software engineer, CTF, open source'
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nisarga Adhikary',
    url: meta.url,
    sameAs: [
      'https://github.com/ni5arga',
      'https://twitter.com/ni5arga',
      'https://www.linkedin.com/in/ni5arga/'
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent'
    }
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={meta.author} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ni5arga" />
        <meta name="twitter:creator" content="@ni5arga" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={meta.url} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
