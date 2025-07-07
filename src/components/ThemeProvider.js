import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import baseTheme from './theme.json'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const getInitialTheme = () => {
  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
  }
  return 'light'
}

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState('light')

  useEffect(() => {
    setColorMode(getInitialTheme())
  }, [])

  const toggleTheme = () => {
    const newMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newMode)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode)
    }
  }

  // Create theme object with current mode
  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...baseTheme.modes[colorMode]
    },
    colorMode
  }

  return (
    <ThemeContext.Provider value={{ colorMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}