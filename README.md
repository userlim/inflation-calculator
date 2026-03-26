# Inflation Calculator

A production-ready, SEO-optimized Next.js 14 application for calculating purchasing power changes due to inflation.

## Features

- **Complete CPI Data**: Hardcoded annual inflation rates from 1960-2026 based on U.S. Bureau of Labor Statistics data
- **20-Language Support**: Full multilingual UI (English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Russian, Arabic, Hindi, Korean, Dutch, Turkish, Swedish, Polish)
- **Mobile Responsive**: Fully responsive design that works on all screen sizes
- **LocalStorage Persistence**: User preferences and calculations are saved automatically
- **SEO Optimized**:
  - Comprehensive metadata and Open Graph tags
  - JSON-LD structured data (FAQPage and WebApplication schemas)
  - Robots.txt and sitemap.ts
  - AdSense-ready with GA4 analytics (GA-P08T3SZDQH)
- **Accessible Calculations**:
  - Adjusted amount based on inflation
  - Cumulative inflation rate
  - Average annual inflation rate
  - Purchasing power loss percentage
  - Visual bar chart representation

## Project Structure

```
inflation-calculator/
├── public/
│   └── favicon.svg                 # Dollar/chart icon
├── src/
│   └── app/
│       ├── globals.css             # Tailwind + custom theme (purple accent)
│       ├── layout.tsx              # Root layout with GA4 and metadata
│       ├── page.tsx                # Main page with FAQ and schema.org JSON-LD
│       ├── calculator.tsx          # Client component with calculator logic
│       ├── sitemap.ts              # SEO sitemap
│       └── robots.ts               # Robots.txt configuration
├── package.json
├── tsconfig.json                   # TypeScript config with @ alias
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .gitignore
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js 18+ (Next.js 14 requirement)
- npm or yarn

### Install Dependencies
```bash
cd inflation-calculator
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14.2.21
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5
- **Analytics**: Google Analytics 4
- **Monetization**: Google AdSense (ready for setup)

## Features in Detail

### Calculator Component
- Input validation for currency amounts
- Year range selector (1960-2026)
- Real-time calculation with localStorage persistence
- Language switcher (16 languages)

### Results Display
- Adjusted amount in current dollars
- Purchasing power change percentage
- Average annual inflation rate
- Cumulative inflation rate
- Visual percentage bar chart
- Comparison section ("What could $X buy?")

### SEO & Schema
- Meta tags for social sharing
- Open Graph protocol support
- Twitter Card metadata
- FAQ schema markup (6 common questions)
- WebApplication schema for Google Rich Results
- Robots.txt and XML sitemap

### Design
- Purple gradient color scheme (#7c5cbf accent)
- Nunito font family
- Card-based layout with hover effects
- Smooth animations and transitions
- Mobile-first responsive design

## Configuration

### Update AdSense
In `src/app/layout.tsx`, replace the placeholder with your AdSense client ID:
```typescript
// Before:
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"

// After:
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
```

### Update Analytics ID
The current GA4 ID is `G-P08T3SZDQH`. To use your own:
- Find `G-P08T3SZDQH` in `src/app/layout.tsx`
- Replace with your Google Analytics 4 Measurement ID

### Update Domain
The `metadataBase` in `src/app/layout.tsx` is set to:
```typescript
metadataBase: new URL('https://inflation-calculator-tool.vercel.app')
```
Update to your actual domain for correct canonical URLs and social sharing.

## CPI Data Source

The calculator uses approximate annual inflation rates based on U.S. Bureau of Labor Statistics (BLS) CPI historical data. The data is hardcoded in the `calculator.tsx` file as the `CPI_DATA` object covering 1960-2026.

**Source**: U.S. Bureau of Labor Statistics - Consumer Price Index (CPI)
**URL**: https://www.bls.gov/

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is a standard Next.js 14 app and will work on any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is free to use and modify.

## Support

For inflation data accuracy, refer to official BLS data at https://www.bls.gov/

---

Built with Next.js 14, React 18, and Tailwind CSS
