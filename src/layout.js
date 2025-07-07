import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { fontFamily, lineHeight, color } from 'styled-system'
import { ThemeProvider } from './components'

const Typography = styled.div(
  fontFamily,
  lineHeight,
  color
)
Typography.defaultProps = {
  fontFamily: 'body',
  lineHeight: 1.5,
  color: 'text'
}

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: background-color 0.2s ease, color 0.2s ease;
  }
`

export default ({ children }) =>
  <ThemeProvider>
    <Helmet>
      <title>broccolini.net</title>
      <link
        rel='icon'
        type='image/png'
        href='favicon.png'
      />
      <link
        rel='apple-touch-icon'
        href='apple-touch-icon.png'
      />
      <meta name='og:title' content='broccolini' />
      <meta name='og:description' content='Diana Mounter’s personal website' />
      <meta name='og:image' content='http://broccolini.net/apple-touch-icon.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@broccolini' />
    </Helmet>
    <Global />
    <Typography>
      {children}
    </Typography>
  </ThemeProvider>
