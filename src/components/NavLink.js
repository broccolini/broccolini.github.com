import styled from 'styled-components'
import { space, fontSize, width, color, fontWeight } from 'styled-system'
import LinkDark from './LinkDark'

const NavLink = styled(LinkDark)(
  props => ({
    lineHeight: '1.5',
    '&:hover': {
      backgroundColor: '#ffeb3b'
    }
  }),
  space,
  fontSize,
  width,
  color,
  fontWeight,
)

NavLink.defaultProps = {
  fontSize: 5,
  fontWeight: 'bold',
}

export default NavLink
