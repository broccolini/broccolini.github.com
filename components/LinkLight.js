import styled from 'styled-components'
import { space, fontSize, width, color, hover } from 'styled-system'

const LinkLight = styled('a')(
  [],
  props => ({
    textDecoration: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  hover
)

LinkLight.defaultProps = {
  color: 'white',
  hover: {
    color: '#ffeb3b'
  }
}

export default LinkLight
