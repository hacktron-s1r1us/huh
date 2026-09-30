import { useState, useEffect } from 'react'

function App() {
  const [metrics, setMetrics] = useState({ uptime: 0, requests: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        uptime: prev.uptime + 1,
        requests: prev.requests + Math.floor(Math.random() * 10)
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Instinct Dashboard</h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: 8 }}>
          <h3>Uptime</h3>
          <p>{metrics.uptime}s</p>
        </div>
        <div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: 8 }}>
          <h3>Requests</h3>
          <p>{metrics.requests}</p>
        </div>
      </div>
    </div>
  )
}

export default App
