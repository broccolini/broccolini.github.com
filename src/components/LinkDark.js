import styled from 'styled-components'
import { space, fontSize, width, color, hover } from 'styled-system'

const LinkDark = styled('a')(
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

LinkDark.defaultProps = {
  color: 'black',
  hover: {
    color: '#3b52ff'
  }
}

export default LinkDark
