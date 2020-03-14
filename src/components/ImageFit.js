import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const ImageFit = styled('img')(
  {
    display: 'block',
    width: '100%'
  },
  space,
  fontSize,
  width,
  color
)

ImageFit.defaultProps = {}

export default ImageFit
