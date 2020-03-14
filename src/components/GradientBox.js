import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Box from './Box'

const GradientBox = styled(Box)(
  {
    backgroundImage: 'linear-gradient(103.99deg, rgba(245, 250, 28, 0.9) 4.22%, rgba(244, 223, 32, 0) 34.92%), linear-gradient(171.74deg, #6AFFC9 15.85%, rgba(70, 255, 188, 0) 68.04%), linear-gradient(95.09deg, #FCFF6D 1.14%, #65DCB0 33.44%, #FD7DE1 62.8%, #D39BFF 99.02%)'
  },
  space,
  fontSize,
  width,
  color
)

GradientBox.defaultProps = {
  m: 0
}

export default GradientBox
