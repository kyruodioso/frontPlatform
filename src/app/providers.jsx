'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Navigation from './components/Navigation'

export default function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark', 'modern']}
      >
        <Navigation />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}