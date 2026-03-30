import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://inflation-calculator-tool.vercel.app'),
  title: 'Inflation Calculator ??Calculate Purchasing Power Over Time',
  description:
    'Calculate how inflation affects purchasing power over time. See what your money was worth in the past or will be worth in the future with our accurate CPI-based inflation calculator.',
  keywords:
    'inflation calculator, purchasing power calculator, CPI calculator, inflation rate, cost of living',
  authors: [{ name: 'Inflation Calculator' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inflation-calculator-tool.vercel.app',
    siteName: 'Inflation Calculator',
    title: 'Inflation Calculator ??Calculate Purchasing Power Over Time',
    description:
      'Calculate how inflation affects purchasing power over time. Accurate CPI-based calculations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inflation Calculator',
    description: 'Calculate purchasing power and inflation rates over time.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
          {children}
        </main>
      </body>
    </html>
  );
}
