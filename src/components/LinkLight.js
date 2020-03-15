import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const LinkLight = styled('a')(
  {
    textDecoration: 'none',
    '&:hover': {
      color: '#ffeb3b'
    }
  },
  space,
  fontSize,
  width,
  color,
)

LinkLight.defaultProps = {
  color: 'white',
}

export default LinkLight
