import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Text = styled('div')(
  [],
  props => ({
    lineHeight: '1.25'
  }),
  space,
  fontSize,
  width,
  color
)

Text.defaultProps = {
  fontSize: 4
}

export default Text
