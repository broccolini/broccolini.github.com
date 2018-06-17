import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { fontFamily, lineHeight, color } from 'styled-system'
import { theme } from '../components'

const Typography = styled.div([],
  fontFamily,
  lineHeight,
  color
)
Typography.defaultProps = {
  font: '0',
  lineHeight: 1.5,
  color: 'black'
}

export default ({ render }) =>
  <ThemeProvider theme={theme}>
    <Typography>
      {render()}
    </Typography>
  </ThemeProvider>
