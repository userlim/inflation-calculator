import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://inflation-rate-calculator.vercel.app'),
  title: 'Inflation Calculator (Free, 2026) – Check Purchasing Power Impact',
  description:
    'See how inflation erodes your money. Free 2026 CPI-based calculator with historical data from 1960. Check your purchasing power — calculate now.',
  keywords:
    'inflation calculator, purchasing power calculator, CPI calculator, inflation rate, cost of living',
  authors: [{ name: 'Inflation Calculator' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inflation-rate-calculator.vercel.app',
    siteName: 'Inflation Calculator',
    title: 'Inflation Calculator (Free, 2026) – Check Purchasing Power Impact',
    description:
      'See how inflation erodes your money. Free 2026 CPI-based calculator with historical data from 1960. Check your purchasing power — calculate now.',
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
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9`}
        ></script>
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <main className="min-h-screen-50">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-400 font-semibold">Related Free Tools:</span>
                <a href="https://take-home-pay-calculator-sandy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Take-Home Pay Calculator</a>
                <a href="https://loan-payment-calculator-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Loan Payment Calculator</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Gold Price Calculator</a>
                <a href="https://bitcoin-profit-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">Crypto Profit Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-xs">Privacy Policy</a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800 text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Inflation Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
