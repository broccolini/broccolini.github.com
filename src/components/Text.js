import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  {
    lineHeight: '1.5'
  },
  space,
  fontSize,
  fontFamily,
  fontWeight,
  width,
  color
)

export default Text
