import React from 'react'
import styled from 'styled-components'
import { useTheme } from './ThemeProvider'

const ToggleButton = styled('button')(
  {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    fontSize: '20px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    '&:focus': {
      outline: '2px solid',
      outlineColor: 'currentColor',
      outlineOffset: '2px'
    }
  },
  props => ({
    color: props.theme.colors.text,
    '&:hover': {
      backgroundColor: props.theme.colorMode === 'light' 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(255, 255, 255, 0.1)'
    }
  })
)

const ThemeToggle = () => {
  const { colorMode, toggleTheme } = useTheme()
  
  return (
    <ToggleButton 
      onClick={toggleTheme}
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {colorMode === 'light' ? '🌙' : '☀️'}
    </ToggleButton>
  )
}

export default ThemeToggle