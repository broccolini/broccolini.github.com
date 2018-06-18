import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight, hover } from 'styled-system'
import LinkDark from './LinkDark'

const NavLink = styled(LinkDark)(
  [],
  props => ({
    lineHeight: '1.5'
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight,
  hover
)

NavLink.defaultProps = {
  fontSize: 5,
  fontWeight: 'bold',
  hover: {
    backgroundColor: '#ffeb3b'
  }
}

export default NavLink
