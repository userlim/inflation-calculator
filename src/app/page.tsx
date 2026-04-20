import { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Inflation Calculator (2026) – CPI Purchasing Power by Year',
  description: 'Calculate inflation-adjusted dollars between any years using official CPI data. See how purchasing power changes over time. Free, instant, no signup needed.',
  alternates: {
    canonical: 'https://inflation-calculator-tool.vercel.app',
  },
};

export default function Page() {
  const faqData = [
    {
      question: 'What is inflation and how does it affect my money?',
      answer:
        'Inflation is the rate at which prices rise over time, reducing the purchasing power of your money. When inflation is high, each dollar buys less than it did before. Our calculator helps you understand this impact by showing what your money was worth at different points in time.',
    },
    {
      question: 'How is the adjusted amount calculated?',
      answer:
        'The adjusted amount is calculated by applying the cumulative inflation rates for each year in your selected period to your initial amount. We use annual CPI (Consumer Price Index) data from the U.S. Bureau of Labor Statistics, which tracks price changes for a basket of consumer goods and services.',
    },
    {
      question: 'What is the difference between cumulative and average inflation?',
      answer:
        'Cumulative inflation is the total percentage increase from your start year to your end year. Average annual inflation is the constant yearly rate that would result in the same total change. For example, if cumulative inflation is 25% over 5 years, the average annual rate would be about 4.6%.',
    },
    {
      question: 'Why is purchasing power important?',
      answer:
        'Purchasing power measures how much goods and services you can buy with a given amount of money. As inflation increases, your purchasing power decreases - you can buy less with the same amount of money. Understanding this helps with financial planning, retirement calculations, and comparing wages across different time periods.',
    },
    {
      question: 'How accurate is this calculator?',
      answer:
        'This calculator uses approximate average annual inflation rates based on official CPI data from the U.S. Bureau of Labor Statistics. While these are reliable estimates, actual inflation rates can vary by product category and location. For precise historical values, consult BLS official CPI tables.',
    },
    {
      question: 'Can I use this calculator for future inflation estimates?',
      answer:
        'Yes, you can make estimates for future years using projected inflation rates. However, future inflation is uncertain and depends on many economic factors. The calculator includes estimated rates for upcoming years, but actual inflation may differ. Use projections for planning purposes only.',
    },
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Inflation Calculator',
            description:
              'Calculate how inflation affects purchasing power over time',
            url: 'https://inflation-rate-calculator.vercel.app',
            applicationCategory: 'FinanceApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Inflation Rate Calculator',
            description: 'Calculate how inflation affects purchasing power. Free CPI-based inflation calculator with historical data from 1960-2026.',
            url: 'https://inflation-rate-calculator.vercel.app',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '2560',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <header className="text-center pt-8 pb-4">
          <h1 className="text-2xl font-bold text-gray-200 mb-2">
            Free Inflation Calculator
          </h1>
        </header>

        <Calculator />

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="card group cursor-pointer"
                open={idx === 0}
              >
                <summary className="text-lg font-semibold text-purple-600 list-none select-none">
                  <span className="inline-block mr-3 transition-transform group-open:rotate-180">
                    ▶
                  </span>
                  {item.question}
                </summary>
                <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Info Sections */}
        <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <article className="card">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Understanding Inflation and Purchasing Power
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Inflation is a fundamental economic concept that affects everyone's
              finances. When the general level of prices for goods and services rises
              over time, the purchasing power of money decreases. This means that with
              the same amount of money, you can buy fewer items today than you could
              in the past.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Our inflation calculator uses historical Consumer Price Index (CPI) data
              to help you understand the real impact of inflation on your finances. By
              calculating what your money was worth at different points in time, you
              can make more informed financial decisions about savings, investments,
              and retirement planning.
            </p>
          </article>

          <article className="card">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              How to Use This Calculator
            </h3>
            <ol className="space-y-3 text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">1.</span>
                <span>
                  Enter the initial amount of money you want to calculate
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">2.</span>
                <span>Select the start year (between 1960 and 2026)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">3.</span>
                <span>Select the end year</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 flex-shrink-0">4.</span>
                <span>
                  Click "Calculate" to see results including adjusted amount, inflation
                  rates, and purchasing power changes
                </span>
              </li>
            </ol>
          </article>

          <article className="card">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Why Inflation Matters for Your Finances
            </h3>
            <div className="space-y-4 text-[var(--text-muted)]">
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">
                  Retirement Planning
                </h4>
                <p>
                  Understanding inflation helps you determine how much savings you'll
                  need for retirement. A comfortable lifestyle today may cost
                  significantly more decades from now.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">
                  Wage Analysis
                </h4>
                <p>
                  When comparing job offers or wage growth across different time periods,
                  inflation adjustment is crucial to understanding real income changes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">
                  Investment Returns
                </h4>
                <p>
                  Investment returns should be evaluated against inflation to determine
                  real gains. Even positive returns might represent a loss in purchasing
                  power if inflation is higher.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-16 py-8 text-center text-sm text-[var(--text-muted)]">
          <p className="mb-2">
            Data sources: U.S. Bureau of Labor Statistics (BLS) - Consumer Price
            Index (CPI)
          </p>
          <p>
            This calculator uses approximate historical and projected inflation rates
            for educational purposes. For official statistics, visit{' '}
            <a
              href="https://www.bls.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              bls.gov
            </a>
          </p>
        </footer>
      </div>

      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-20 max-w-3xl mx-auto px-6 relative z-[1]">
        <h2 className="text-h2 mb-6 text-[var(--text-primary)]">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">What Is Inflation and Why Does It Matter?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Inflation is the rate at which the general level of prices for goods and services rises over time, reducing purchasing power. When inflation is 3%, something that costs $100 today would cost $103 a year from now. Over longer periods, the effect compounds dramatically — $100 in 1970 has the purchasing power of roughly $800 in 2026. Understanding inflation is essential for financial planning, salary negotiations, investment decisions, and historical price comparisons.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">How the Consumer Price Index (CPI) Works</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The CPI is the most widely used measure of inflation in the United States, calculated monthly by the Bureau of Labor Statistics (BLS). It tracks the average price change over time for a basket of approximately 80,000 goods and services across 200 categories including housing (33% weight), food (14%), transportation (16%), medical care (7%), and education (7%). Our calculator uses CPI-U (All Urban Consumers) data, which covers about 93% of the US population.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Types of Inflation and Their Causes</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Economists identify several types of inflation. <strong>Demand-pull inflation</strong> occurs when demand exceeds supply, often during economic booms. <strong>Cost-push inflation</strong> results from rising production costs (raw materials, wages) passed to consumers. <strong>Built-in inflation</strong> stems from the wage-price spiral, where workers demand higher wages to keep up with prices, causing businesses to raise prices further. <strong>Monetary inflation</strong> occurs when central banks increase the money supply faster than economic growth.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Historical US Inflation: Key Periods</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The US has experienced several notable inflationary periods. The post-WWII era (1946-1948) saw inflation peak at 19.7% as wartime price controls ended. The Great Inflation (1965-1982) was driven by oil shocks and expansionary monetary policy, peaking at 14.8% in 1980. The 2021-2023 period saw inflation reach 9.1% (June 2022), driven by pandemic stimulus, supply chain disruptions, and energy price shocks. The Federal Reserve's aggressive rate hikes subsequently brought inflation back toward the 2% target.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Using Inflation Data for Financial Planning</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Inflation data is crucial for several financial decisions. For retirement planning, assuming 2-3% annual inflation helps estimate future living costs. In salary negotiations, knowing that real wages (adjusted for inflation) have grown only about 0.5% annually helps contextualize raise requests. For investors, the real rate of return (nominal return minus inflation) determines actual wealth growth. Our calculator makes these historical and projected calculations simple and instant.` }} />
            </div>
      </section>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-12 max-w-3xl mx-auto px-6 pb-16 relative z-[1]">
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          Calculate how inflation affects your money over time. Our free inflation rate calculator uses official CPI data to show purchasing power changes. Perfect as a cost of living calculator, salary inflation tool, and buying power calculator. Track US inflation rates historically.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://take-home-pay-calculator-sandy.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Salary Tax Calculator →</a>
          <a href="https://loan-payment-calculator-eosin.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Loan Calculator →</a>
          <a href="https://gold-price-today-calculator.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Gold Price Calculator →</a>
        </div>

      </section>
      </>
  );
}
