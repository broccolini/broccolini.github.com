import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Box from './Box'

const GradientBox = styled(Box)(
  {
    backgroundImage: 'linear-gradient(57.09deg, rgba(245, 250, 28, 0.9) 0%, rgba(252, 255, 101, 0) 37.99%), linear-gradient(162.34deg, #6AFFC9 25.23%, rgba(70, 255, 188, 0) 70.88%), linear-gradient(95.09deg, #FCFF6D 1.14%, rgba(101, 220, 176, 0.86) 33.44%, rgba(253, 125, 225, 0.86) 62.8%, rgba(211, 155, 255, 0.58) 99.02%)',
    margin: 0
  },
  space,
  fontSize,
  width,
  color
)

export default GradientBox
