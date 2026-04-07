import { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Inflation Calculator - Calculate Purchasing Power Impact',
  description:
    'Calculate how inflation affects your money\'s purchasing power over time. Free CPI-based inflation calculator with detailed analysis and historical data from 1960-2026.',
  keywords: [
    'inflation calculator',
    'purchasing power calculator',
    'CPI calculator',
    'inflation rate',
    'cost of living calculator',
    'money value over time',
    'historical inflation',
  ],
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
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
                <p className="mt-4 text-gray-700 leading-relaxed">
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Inflation is a fundamental economic concept that affects everyone's
              finances. When the general level of prices for goods and services rises
              over time, the purchasing power of money decreases. This means that with
              the same amount of money, you can buy fewer items today than you could
              in the past.
            </p>
            <p className="text-gray-700 leading-relaxed">
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
            <ol className="space-y-3 text-gray-700">
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
            <div className="space-y-4 text-gray-700">
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
        <footer className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-600">
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
    </>
  );
}
