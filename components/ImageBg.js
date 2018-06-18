import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const ImageBg = styled('div')(
  [],
  props => ({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${props.src})`,
    '&:hover': {
      backgroundImage: `url(${props.hover})`
    }
  }),
  space,
  fontSize,
  width,
  color
)

ImageBg.defaultProps = {
  p: 4
}

export default ImageBg
