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
    </Helmet>
    <Global />
    <ThemeProvider theme={theme}>
      <Typography>
        {children}
      </Typography>
    </ThemeProvider>
  </>
