import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import sx from './sx'

const Box = styled('div')(
  {
    lineHeight: '1.5'
  },
  space,
  fontSize,
  width,
  color,
  sx
)

Box.defaultProps = {
  fontSize: 3
}

export default Box
