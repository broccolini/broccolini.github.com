import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Link = styled('a')(
  {
    '&:hover': {
      color: '#3549e5'
    }
  },
  space,
  fontSize,
  width,
  color,
)

Link.defaultProps = {
  color: 'blue',
}

export default Link
