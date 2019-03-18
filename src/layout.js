import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { fontFamily, lineHeight, color } from 'styled-system'
import { theme } from './components'

const Typography = styled.div(
  fontFamily,
  lineHeight,
  color
)
Typography.defaultProps = {
  font: '0',
  lineHeight: 1.5,
  color: 'black'
}

export default ({ children }) =>
  <>
    <Helmet>
      <title>broccolini.net</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <Typography>
        {children}
      </Typography>
    </ThemeProvider>
  </>
