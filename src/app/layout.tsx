import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Inflation Calculator (Free, 2026) – Check Purchasing Power Impact',
  description: 'See how inflation erodes your money. Free 2026 CPI-based calculator with historical data from 1960. Check your purchasing power — calculate now.',
  keywords: 'inflation calculator, inflation rate 2026, purchasing power calculator, cpi calculator, dollar value over time, what was inflation in, cost of living calculator, real value of money, inflation adjustment calculator, historical inflation rates, salary inflation calculator, future value calculator inflation, us inflation rate history, buying power calculator, inflation rate calculator free',
  metadataBase: new URL('https://inflation-rate-calculator.vercel.app'),
  openGraph: {
    title: 'Inflation Calculator (Free, 2026) – Check Purchasing Power Impact',
    description: 'See how inflation erodes your money. Free 2026 CPI-based calculator with historical data from 1960. Check your purchasing power — calculate now.',
    url: 'https://inflation-rate-calculator.vercel.app',
    siteName: 'Inflation Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inflation Calculator',
    description: 'See how inflation erodes your money. Free 2026 CPI-based calculator with historical data from 1960. Check your purchasing power — calculate now.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://inflation-rate-calculator.vercel.app',
    languages: {
      'en': 'https://inflation-rate-calculator.vercel.app',
      'x-default': 'https://inflation-rate-calculator.vercel.app',
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
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://inflation-rate-calculator.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Inflation Calculator", "item": "https://inflation-rate-calculator.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Inflation Calculator", "url": "https://inflation-rate-calculator.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://inflation-rate-calculator.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://inflation-rate-calculator.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body className="antialiased">
        <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
          {children}
        </main>
        <footer className="border-t border-white/5 py-6 text-center text-sm text-[var(--text-secondary)] bg-black/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://take-home-pay-calculator-sandy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Take-Home Pay Calculator</a>
                <a href="https://loan-payment-calculator-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Loan Payment Calculator</a>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://bitcoin-profit-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Crypto Profit Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-[var(--text-muted)] hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Inflation Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
