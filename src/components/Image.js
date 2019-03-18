import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Image = styled('img')(
  props => ({
    display: 'block',
    maxWidth: '100%'
  }),
  space,
  fontSize,
  width,
  color
)

Image.defaultProps = {}

export default Image
