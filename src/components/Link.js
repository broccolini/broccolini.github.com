import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Link = styled('a')(
  {
    '&:hover': {
      color: '#514EFD'
    }
  },
  space,
  fontSize,
  width,
  color,
)

Link.defaultProps = {
  color: 'black',
}

export default Link
