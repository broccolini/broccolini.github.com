import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const LinkDark = styled('a')(
  {
    textDecoration: 'none',
    '&:hover': {
      color: '#514EFD'
    }
  },
  space,
  fontSize,
  width,
  color,
)

LinkDark.defaultProps = {
  color: 'black',
}

export default LinkDark
