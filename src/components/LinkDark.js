import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const LinkDark = styled('a')(
  props => ({
    textDecoration: 'none',
    '&:hover': {
      color: '#3b52ff'
    }
  }),
  space,
  fontSize,
  width,
  color,
)

LinkDark.defaultProps = {
  color: 'black',
}

export default LinkDark
