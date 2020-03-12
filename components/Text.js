import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'

const Text = styled('div')(
  [],
  props => ({
    lineHeight: '1.25'
  }),
  space,
  fontSize,
  fontWeight,
  width,
  color
)

Text.defaultProps = {
  fontSize: 3
}

export default Text
