import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  {
    lineHeight: '1.25'
  },
  space,
  fontSize,
  fontWeight,
  width,
  color
)

export default Text
