import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Inflation Calculator - CPI Purchasing Power by Year'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          background: 'linear-gradient(135deg, #0a0a0f 0%, #EF444430 50%, #0a0a0f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16 }}>📈</div>
        <div style={{ fontSize: 56, fontWeight: 'bold', textAlign: 'center', marginBottom: 12, textShadow: '0 0 40px #EF444460' }}>
          Inflation Calculator
        </div>
        <div style={{ fontSize: 28, opacity: 0.9, textAlign: 'center', maxWidth: '80%' }}>
          CPI Purchasing Power by Year
        </div>
        <div style={{ fontSize: 20, marginTop: 24, opacity: 0.75, background: 'rgba(255,255,255,0.15)', padding: '8px 24px', borderRadius: 20 }}>
          Free Online Tool • 2026
        </div>
      </div>
    ),
    { ...size }
  )
}
