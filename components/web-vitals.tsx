'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }
    
    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      // gtag('event', metric.name, {
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   event_label: metric.id,
      //   non_interaction: true,
      // })
    }
  })

  return null
}
