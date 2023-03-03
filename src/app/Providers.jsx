 "use client"
 
 import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider  enableSystem='true' attribute='class' >
      <div className='dark:bg-gray-500 min-h-screen transition-colors duration-300' >
      {children}
      </div>
        
    </ThemeProvider>
  )
}
