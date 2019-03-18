import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Image from './Image'

const ImageYellow = styled(Image)(
  [],
  props => ({
    backgroundBlendMode: 'multiply'
  }),
  space,
  fontSize,
  width,
  color
)

ImageYellow.defaultProps = {
  bg: 'yellow'
}

export default ImageYellow
