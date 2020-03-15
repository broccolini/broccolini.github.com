import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { fontFamily, lineHeight, color } from 'styled-system'
import { theme } from './components'

const Typography = styled.div(
  fontFamily,
  lineHeight,
  color
)
Typography.defaultProps = {
  fontFamily: '0',
  lineHeight: 1.5,
  color: 'black'
}

const Global = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
  }
})

export default ({ children }) =>
  <>
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
    <ThemeProvider theme={theme}>
      <Typography>
        {children}
      </Typography>
    </ThemeProvider>
  </>
