import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Box = styled('div')(
  [],
  props => ({
    lineHeight: '1.5'
  }),
  space,
  fontSize,
  width,
  color
)

Box.defaultProps = {
  fontSize: 3
}

export default Box
