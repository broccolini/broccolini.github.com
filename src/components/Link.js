import styled from 'styled-components'
import { space, fontSize, width, color, hover, focus } from 'styled-system'

const Link = styled('a')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color,
  hover,
  focus
)

Link.defaultProps = {
  color: 'blue',
  hover: {
    color: '#3549e5'
  }
}

export default Link
